import {
  useCallback, useEffect, useRef, useState
} from 'react';

type DrawerSize = { width: number; height: number };
type DrawerEntry = {
  id: symbol;
  close: () => void;
  measure: () => DrawerSize | null;
  size: DrawerSize | null;
};

// Shared across every Drawer instance so nested drawers know where they sit.
const stack: DrawerEntry[] = [];
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

/**
 * Re-measures the drawers whose size can be trusted, and reports whether
 * anything changed.
 *
 * Only the frontmost drawer is unconstrained — every drawer behind it has
 * adopted the frontmost's size, so measuring one would record the shrunken
 * value as its natural size and it would stay wrong once it returned to the
 * front. Those are latched at their last reading instead.
 */
const syncSizes = () => {
  let changed = false;
  stack.forEach((entry, index) => {
    const isFrontmost = index === stack.length - 1;
    if (!isFrontmost && entry.size) return;

    const next = entry.measure();
    if (!next) return;
    if (
      entry.size
      && entry.size.width === next.width
      && entry.size.height === next.height
    ) return;

    stack[index].size = next;
    changed = true;
  });
  return changed;
};

const emit = () => {
  syncSizes();
  notify();
};

/** Dismisses the frontmost open drawer. The single backdrop is its target. */
export const closeTopDrawer = () => {
  stack[stack.length - 1]?.close();
};

/**
 * Tracks a drawer's position in the open-drawer stack and owns the body
 * scroll lock. `depth` is how many drawers are below it, `nested` how many
 * are open on top of it, and `frontmost` is the size of the drawer currently
 * in front — parents adopt it so a stack of differently sized drawers still
 * lines up into an even ladder. Scroll is only restored once the stack
 * empties. Spread `setPanel` onto the drawer panel so it can be measured.
 */
export const useDrawerStack = (isOpen: boolean, onClose: () => void) => {
  const id = useRef<symbol>();
  if (!id.current) id.current = Symbol('drawer');

  // Kept in a ref so the stack entry never calls a stale onClose.
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  const panelRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const [position, setPosition] = useState<{
    depth: number;
    nested: number;
    frontmost: DrawerSize | null;
  }>({ depth: 0, nested: 0, frontmost: null });

  // Stable identity, so React runs it only when the element itself attaches or
  // detaches. Radix's Portal renders its children a commit after it mounts, so
  // this is also the first moment the panel can be measured at all.
  const setPanel = useCallback((el: HTMLElement | null) => {
    panelRef.current = el;
    observerRef.current?.disconnect();
    observerRef.current = null;

    if (!el) return;

    if (typeof ResizeObserver === 'function') {
      // The panel's natural size is viewport-dependent (`width: 100%` under a
      // max-width), so it has to be re-read on reflow, not just once.
      observerRef.current = new ResizeObserver(() => {
        if (syncSizes()) notify();
      });
      observerRef.current.observe(el);
    }

    emit();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const self = id.current!;
    stack.push({
      id: self,
      close: () => closeRef.current(),
      // offsetWidth/Height are layout sizes, so the stacking transform does
      // not skew them.
      measure: () => {
        const el = panelRef.current;
        if (!el) return null;
        // The adopted max-size is written inline while this drawer is nested,
        // and React only clears it a render after it returns to the front.
        // Measuring in between would record the shrunken size as the natural
        // one; the ResizeObserver picks it up once the constraint is gone.
        if (el.style.maxWidth || el.style.maxHeight) return null;
        // While the panel animates back to its own size, offsetWidth reports
        // an intermediate value. Publishing that would retarget every
        // follower's size transition on each frame, so they converge
        // asymptotically instead of in one duration — the stack appears to
        // take far longer to settle than the drawer that triggered it.
        // The settled size is already cached from when this drawer opened
        // unconstrained; the observer re-reads it once the animation ends.
        if (typeof el.getAnimations === 'function') {
          const resizing = el.getAnimations().some((animation) => {
            const property = (animation as unknown as {
              transitionProperty?: string;
            }).transitionProperty;
            return (
              (property === 'max-width' || property === 'max-height')
              && animation.playState === 'running'
            );
          });
          if (resizing) return null;
        }
        return { width: el.offsetWidth, height: el.offsetHeight };
      },
      size: null
    });
    document.body.style.overflow = 'hidden';

    const sync = () => {
      const index = stack.findIndex((entry) => entry.id === self);
      // Keep the last known position while the drawer animates out.
      if (index === -1) return;
      const next = {
        depth: index,
        nested: stack.length - 1 - index,
        frontmost: stack[stack.length - 1].size
      };
      setPosition((prev) => (prev.depth === next.depth
        && prev.nested === next.nested
        && prev.frontmost?.width === next.frontmost?.width
        && prev.frontmost?.height === next.frontmost?.height
        ? prev
        : next));
    };

    listeners.add(sync);
    emit();

    return () => {
      listeners.delete(sync);
      const index = stack.findIndex((entry) => entry.id === self);
      // splice(-1, 1) would evict an unrelated drawer.
      if (index !== -1) stack.splice(index, 1);
      if (!stack.length) {
        document.body.style.overflow = '';
      }
      emit();
    };
  }, [isOpen]);

  return { ...position, setPanel };
};
