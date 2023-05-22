import React, { useEffect, useRef, ComponentProps } from 'react';
import * as Portal from '@radix-ui/react-portal';
import { styled } from '../../stitches.config';
import { Box } from '../box';
import { useMountTransition } from '../hooks';

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
}

export type DrawerProps = DrawerBaseProps & ComponentProps<typeof StyledDrawer>;

export const Drawer = ({
  size = 'sm',
  placement = 'right',
  isOpen = false,
  onClose,
  finalFocusRef,
  children
}: DrawerProps) => {
  const bodyRef = useRef(document.querySelector('body'));
  const isTransitioning = useMountTransition(isOpen, 300);

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
    const onKeyPress = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keyup', onKeyPress);
    }

    return () => {
      window.removeEventListener('keyup', onKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isTransitioning && !isOpen) {
    return null;
  }

  return (
    <Portal.Root className="drawer-portal">
      <StyledDrawerContainer>
        <StyledDrawerBackdrop
          className={`${isOpen ? 'open' : ''} ${isTransitioning ? 'transitioning' : ''
          }`}
          onClick={handleClose}
        />
        <StyledDrawer
          placement={placement}
          size={size}
          isOpen={isOpen}
          data-testid="drawer"
          className={`${isOpen ? 'open' : ''} ${isTransitioning ? 'transitioning' : ''
          }`}
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
