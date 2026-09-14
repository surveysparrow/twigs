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
  // One duration for every drawer: `.transitioning.open` also matches drawers
  // merely reacting to a neighbour, so an enter/exit asymmetry would leave the
  // stack re-settling after the drawer that triggered it had gone.
  transition:
    'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1), filter 0.3s ease, max-width 0.3s cubic-bezier(0.32, 0.72, 0, 1), max-height 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
  // Stacking geometry (Base UI's model): shrink by one step, then translate far
  // enough to cancel the shrink at the anchored edge and clear the drawer in
  // front by one peek.
  '--stack-step': '0.05',
  '--stack-peek': '16px',
  '--stack-scale': 'max(0, calc(1 - var(--nested-drawers, 0) * var(--stack-step)))',
  '--stack-shrink': 'calc(1 - var(--stack-scale))',
  // Resolves against --stack-size (the frontmost drawer's size, set inline)
  // rather than `100%`, so the transform does not depend on this panel's own
  // size while that is animating.
  '--stack-offset':
    'calc(var(--stack-shrink) * var(--stack-size, 100%) + var(--nested-drawers, 0) * var(--stack-peek))',
  '&[data-nested-drawer-open]': {
    filter: 'brightness(0.95)'
  },
  // Gentler, not zero: still fades and still steps back, just does not slide.
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
  // A nested drawer adopts the frontmost drawer's size so the stack steps
  // evenly whatever the drawers measure.
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
      // Own stacking context, so a nested drawer's backdrop is not outranked
      // by its parent's panel z-index.
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
        {/* One backdrop for the whole stack: crossfading one per drawer dips
            the composited dim mid-transition and reads as a flicker. */}
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
