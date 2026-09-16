import {
  useCallback, useEffect, useRef, useState
} from 'react';

type DrawerSize = { width: number; height: number };
type DrawerEntry = {
  close: () => void;
  measure: () => DrawerSize | null;
  size: DrawerSize | null;
};

// Shared across every Drawer instance so nested drawers know where they sit.
const stack: DrawerEntry[] = [];
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

/**
 * Re-measures the drawers whose size can be trusted and reports whether
 * anything changed. Only the frontmost drawer is unconstrained; the rest have
 * adopted its size, so they stay latched at their last reading.
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
 * Tracks a drawer's position in the open-drawer stack and owns the body scroll
 * lock, which is only released once the stack empties.
 *
 * `depth` is how many drawers sit below it, `nested` how many are open on top,
 * and `frontmost` the size of the drawer in front — which the others adopt so
 * differently sized drawers still form an even ladder. Put `setPanel` on the
 * drawer panel so it can be measured.
 */
export const useDrawerStack = (isOpen: boolean, onClose: () => void) => {
  // Ref, so the stack entry never calls a stale onClose.
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  const panelRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const [position, setPosition] = useState<{
    depth: number;
    nested: number;
    frontmost: DrawerSize | null;
  }>({ depth: 0, nested: 0, frontmost: null });

  // Stable identity, so it runs only when the element attaches or detaches.
  // Radix's Portal renders children a commit after it mounts, so this is the
  // first point the panel can be measured.
  const setPanel = useCallback((el: HTMLElement | null) => {
    panelRef.current = el;
    observerRef.current?.disconnect();
    observerRef.current = null;

    if (!el) return;

    if (typeof ResizeObserver === 'function') {
      // Natural size is viewport-dependent (`width: 100%` under a max-width),
      // so it has to be re-read on reflow.
      observerRef.current = new ResizeObserver(() => {
        if (syncSizes()) notify();
      });
      observerRef.current.observe(el);
    }

    emit();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const self: DrawerEntry = {
      close: () => closeRef.current(),
      // offsetWidth/Height are layout sizes, unskewed by the transform.
      measure: () => {
        const el = panelRef.current;
        if (!el) return null;
        // The adopted max-size is written inline while this drawer is nested,
        // and React only clears it a render after it returns to the front.
        // Measuring in between would record the shrunken size as the natural
        // one; the ResizeObserver picks it up once the constraint is gone.
        if (el.style.maxWidth || el.style.maxHeight) return null;
        // Mid-animation widths would retarget every follower's transition
        // each frame, so they would converge asymptotically rather than in one
        // duration. The observer re-reads once the animation ends.
        const resizing = el.getAnimations?.()?.some((animation) => {
          const { transitionProperty: property } = animation as unknown as {
            transitionProperty?: string;
          };
          return (
            (property === 'max-width' || property === 'max-height')
            && animation.playState === 'running'
          );
        });
        if (resizing) return null;
        return { width: el.offsetWidth, height: el.offsetHeight };
      },
      size: null
    };
    stack.push(self);
    document.body.style.overflow = 'hidden';

    const sync = () => {
      const index = stack.indexOf(self);
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
      const index = stack.indexOf(self);
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
