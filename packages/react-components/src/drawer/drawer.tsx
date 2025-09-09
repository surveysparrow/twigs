import * as Portal from '@radix-ui/react-portal';
import clsx from 'clsx';
import React, { ComponentProps, useEffect, useRef } from 'react';
import { Box } from '../box';
import { useMountTransition } from '../hooks';
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
  transition: 'opacity 0.3s ease ,visibility 0.3s ease',
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
  transition: 'transform 0.3s ease',
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
        transform: 'translateX(100%)',
        '&.transitioning.open': {
          transform: 'translateX(0%)'
        }
      },
      left: {
        left: '0',
        top: '0',
        transform: 'translateX(-100%)',
        '&.transitioning.open': {
          transform: 'translateX(0%)'
        }
      },
      top: {
        top: '0',
        left: '0',
        width: '100%',
        maxWidth: '100vw',
        maxHeight: '300px',
        transform: 'translateY(-100%)',
        '&.transitioning.open': {
          transform: 'translateX(0%)'
        }
      },
      bottom: {
        left: '0',
        bottom: '0',
        width: '100%',
        maxWidth: '100vw',
        maxHeight: '300px',
        transform: 'translateY(100%)',
        '&.transitioning.open': {
          transform: 'translateX(0%)'
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
  const bodyRef = useRef(document.querySelector('body'));
  const isTransitioning = useMountTransition(isOpen, 300);
  const portalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (onClose) {
      onClose();
      finalFocusRef?.current?.focus();
    }
  };

  useEffect(() => {
    const updatePageScroll = () => {
      if (isOpen && bodyRef && bodyRef.current) {
        bodyRef.current.style.overflow = 'hidden';
      } else if (bodyRef && bodyRef.current) {
        bodyRef.current.style.overflow = '';
      }
    };

    updatePageScroll();
  }, [isOpen]);

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

  return (
    <Portal.Root
      className="drawer-portal"
      container={portalContainer}
      tabIndex={-1}
      ref={portalRef}
      onKeyDown={(e) => {
        if (
          e.key === 'Escape'
          && e.target instanceof HTMLElement
          && e.target.closest('.drawer-portal') === portalRef.current
        ) {
          handleClose();
        }
        if (e.key === 'Tab') {
          const focusableElements = portalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) ?? [];

          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }}
    >
      <StyledDrawerContainer>
        <StyledDrawerBackdrop
          className={clsx({
            open: isOpen,
            transitioning: isTransitioning
          })}
          onClick={handleClose}
        />
        <StyledDrawer
          placement={placement}
          size={size}
          isOpen={isOpen}
          data-testid="drawer"
          {...props}
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
