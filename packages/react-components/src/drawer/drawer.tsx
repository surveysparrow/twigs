import * as Portal from '@radix-ui/react-portal';
import clsx from 'clsx';
import React, { ComponentProps, useEffect, useRef } from 'react';
import { Box } from '../box';
import { useMountTransition } from '../hooks';
import { closeTopDrawer, useDrawerStack } from './use-drawer-stack';
import { styled } from '../stitches.config';

const StyledDrawerBackdrop = styled(Box, {
  position: 'fixed',
  left: '0',
  top: '0',
  width: '100vw',
  height: '100vh',
  visibility: 'hidden',
  opacity: 0,
  background: '$black600',
  // Same curve and duration as the panel it belongs to.
  transition:
    'opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1), visibility 0.3s',
  '&.transitioning.open': {
    visibility: 'visible',
    opacity: 1
  }
});

const StyledDrawerContainer = styled(Box, {
  display: 'flex',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  left: '0',
  top: '0',
  zIndex: '9999',
  justifyContent: 'center'
});

const StyledDrawer = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  boxShadow: '$sm',
  width: '100%',
  height: '100%',
  background: '$white900',
  zIndex: '10000',
  // iOS drawer curve (Ionic): fast out, long settle.
  //
  // max-width / max-height are transitioned despite being layout properties:
  // a drawer returning to the front resizes back to its own width, and
  // snapping that is more jarring than the cost of animating it.
  //
  // One duration for everything, deliberately. An exit-faster-than-enter
  // asymmetry would key off `.transitioning.open`, which also matches the
  // drawers merely reacting to a neighbour opening or closing — so closing a
  // drawer would leave the stack behind it still re-settling after it had
  // gone. Everything that moves together moves for the same length of time.
  transition:
    'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), filter 0.3s ease, max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), max-height 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
  // Stacking geometry (Base UI's model). Each parent shrinks by one step,
  // then translates far enough to cancel the shrink at its anchored edge and
  // peek past the drawer in front of it, so every layer steps by one constant
  // peek no matter how wide it is.
  '--stack-step': '0.05',
  '--stack-peek': '16px',
  '--stack-scale': 'max(0, calc(1 - var(--nested-drawers, 0) * var(--stack-step)))',
  '--stack-shrink': 'calc(1 - var(--stack-scale))',
  // --stack-size is the frontmost drawer's size in px, published by the panel
  // below. Resolving against it rather than `100%` keeps the transform
  // independent of this panel's own size, which is itself animating as it
  // adopts the frontmost's — otherwise the two chase each other and stutter.
  '--stack-offset':
    'calc(var(--stack-shrink) * var(--stack-size, 100%) + var(--nested-drawers, 0) * var(--stack-peek))',
  // Parents darken themselves instead of stacking backdrops.
  '&[data-nested-drawer-open]': {
    filter: 'brightness(0.95)'
  },
  // Gentler, not zero: the drawer still fades and still steps back when
  // nested, it just does not slide or animate the scale.
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 0,
    transition: 'opacity 0.2s ease',
    '&.transitioning.open': {
      opacity: 1
    }
  },
  variants: {
    size: {
      sm: {
        maxWidth: '600px'
      }
    },
    placement: {
      right: {
        right: '0',
        top: '0',
        transformOrigin: 'right center',
        transform: 'translateX(100%)',
        '&.transitioning.open': {
          transform: 'translateX(0%)'
        },
        // Peek out from behind the drawers stacked on top.
        '&.transitioning.open[data-nested-drawer-open]': {
          transform: 'translateX(calc(-1 * var(--stack-offset))) scale(var(--stack-scale))'
        }
      },
      left: {
        left: '0',
        top: '0',
        transformOrigin: 'left center',
        transform: 'translateX(-100%)',
        '&.transitioning.open': {
          transform: 'translateX(0%)'
        },
        // Peek out from behind the drawers stacked on top.
        '&.transitioning.open[data-nested-drawer-open]': {
          transform: 'translateX(var(--stack-offset)) scale(var(--stack-scale))'
        }
      },
      top: {
        top: '0',
        left: '0',
        width: '100%',
        maxWidth: '100vw',
        maxHeight: '300px',
        transformOrigin: 'center top',
        transform: 'translateY(-100%)',
        '&.transitioning.open': {
          transform: 'translateY(0%)'
        },
        // Peek out from behind the drawers stacked on top.
        '&.transitioning.open[data-nested-drawer-open]': {
          transform: 'translateY(var(--stack-offset)) scale(var(--stack-scale))'
        }
      },
      bottom: {
        left: '0',
        bottom: '0',
        width: '100%',
        maxWidth: '100vw',
        maxHeight: '300px',
        transformOrigin: 'center bottom',
        transform: 'translateY(100%)',
        '&.transitioning.open': {
          transform: 'translateY(0%)'
        },
        // Peek out from behind the drawers stacked on top.
        '&.transitioning.open[data-nested-drawer-open]': {
          transform: 'translateY(calc(-1 * var(--stack-offset))) scale(var(--stack-scale))'
        }
      }
    },
    isOpen: {
      true: {}
    }
  },
  defaultVariants: {
    placement: 'right',
    size: 'sm'
  }
});

const StyledDrawerHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '$18',
  paddingInlineStart: '$12',
  paddingInlineEnd: '$12',
  paddingTop: '$8',
  paddingBottom: '$8',
  borderBottom: '$borderWidths$xs solid $neutral200'
});

const StyledDrawerFooter = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '$18',
  paddingInlineStart: '$12',
  paddingInlineEnd: '$12',
  paddingTop: '$8',
  paddingBottom: '$8',
  borderTop: '$borderWidths$xs solid $neutral200'
});

const StyledDrawerBody = styled(Box, {
  paddingInlineStart: '$12',
  paddingInlineEnd: '$12',
  paddingTop: '$12',
  paddingBottom: '$12',
  flex: '1 1 0%',
  overflow: 'auto'
});

interface DrawerBaseProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg';
  placement?: 'top' | 'left' | 'right' | 'bottom';
  finalFocusRef?: React.RefObject<HTMLButtonElement>;
  portalContainer?: HTMLElement;
}

export type DrawerProps = DrawerBaseProps & ComponentProps<typeof StyledDrawer>;

export const Drawer = ({
  size = 'sm',
  placement = 'right',
  isOpen = false,
  onClose,
  finalFocusRef,
  children,
  portalContainer,
  ...props
}: DrawerProps) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
      finalFocusRef?.current?.focus();
    }
  };

  const isTransitioning = useMountTransition(isOpen, 300);
  const {
    depth, nested, frontmost, setPanel
  } = useDrawerStack(isOpen, handleClose);
  const portalRef = useRef<HTMLDivElement>(null);
  const isVertical = placement === 'top' || placement === 'bottom';
  // While nested, a drawer adopts the frontmost drawer's size so the stack
  // steps evenly, and publishes it as --stack-size so the offset resolves
  // against that rather than this panel's own (animating) size.
  const stackStyle: Record<string, string | number> = {
    '--nested-drawers': nested
  };
  if (nested > 0 && frontmost) {
    const length = isVertical ? frontmost.height : frontmost.width;
    stackStyle[isVertical ? 'maxHeight' : 'maxWidth'] = length;
    stackStyle['--stack-size'] = `${length}px`;
  }

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        portalRef.current?.focus({ preventScroll: true });
      });
    }
  }, [isOpen]);

  if (!isTransitioning && !isOpen) {
    return null;
  }

  const handleTabKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const focusableElementsList = portalRef.current?.querySelectorAll(
      `button:not([disabled]),
      [href]:not([disabled]),
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      [contenteditable="true"]:not([disabled]),
      [tabindex]:not([tabindex="-1"]):not([disabled])`
    ) ?? [];

    const focusableElements = Array.from(focusableElementsList).filter(
      (element) => {
        return (
          element.getAttribute('aria-disabled') !== 'true'
          && element.getAttribute('tabindex') !== '-1'
        );
      }
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (!lastElement) {
      e.preventDefault();
      return;
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };

  const handleEscapeKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLElement
      && e.target.closest('.drawer-portal') === portalRef.current
      // Only close if other components like select, dropdown, etc. are not open
      && e.target.getAttribute('aria-expanded') !== 'true'
    ) {
      handleClose();
    }
  };

  return (
    <Portal.Root
      className="drawer-portal"
      container={portalContainer}
      tabIndex={-1}
      // Own stacking context per drawer, so a nested drawer layers cleanly
      // above its parent instead of fighting the parent panel's z-index.
      style={{ position: 'relative', zIndex: 9999 + depth }}
      ref={portalRef}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleEscapeKey(e);
        } else if (e.key === 'Tab') {
          handleTabKey(e);
        }
      }}
    >
      <StyledDrawerContainer>
        {/* One backdrop for the whole stack. Crossfading a backdrop per
            drawer dips the composited dim mid-transition, which reads as a
            flicker, so nesting must not touch this element at all. */}
        {depth === 0 && (
          <StyledDrawerBackdrop
            className={clsx({
              open: isOpen,
              transitioning: isTransitioning
            })}
            onClick={closeTopDrawer}
          />
        )}
        <StyledDrawer
          placement={placement}
          size={size}
          isOpen={isOpen}
          data-testid="drawer"
          ref={setPanel}
          data-nested-drawer-open={nested > 0 ? '' : undefined}
          {...props}
          style={{ ...props.style, ...stackStyle } as React.CSSProperties}
          className={clsx(props.className, {
            open: isOpen,
            transitioning: isTransitioning
          })}
        >
          {children}
        </StyledDrawer>
      </StyledDrawerContainer>
    </Portal.Root>
  );
};

export const DrawerHeader = StyledDrawerHeader;
export const DrawerFooter = StyledDrawerFooter;
export const DrawerBody = StyledDrawerBody;
