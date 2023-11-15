import React, { ReactElement, ComponentProps } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled, keyframes } from '../stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$black700',
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '80vh',
  maxWidth: '95vw',
  padding: '$12',
  zIndex: 999,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' },
  variants: {
    size: {
      xl: {
        width: '1346px',
        minHeight: '792px'
      },
      lg: {
        width: '980px',
        minHeight: '862px'
      },
      md: {
        width: '600px',
        minHeight: '580px'
      },
      sm: {
        width: '464px',
        minHeight: '240px'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

type ContentProps = {
  children?: ReactElement | ReactElement[];
  size?: 'sm' | 'md' | 'lg' | 'xl' ;
} & ComponentProps<typeof StyledContent>

const Content = ({ children, size = 'md', ...props }: ContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent size={size} {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
};

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  fontSize: '$lg'
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '$5 0 $10',
  fontSize: '$md'
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
