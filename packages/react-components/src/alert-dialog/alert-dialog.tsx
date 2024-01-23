import React, { ComponentProps, ReactNode } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { keyframes, styled } from '../stitches.config';
import { Grid } from '../grid';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: '$neutral900',
  fontSize: '$lg',
  fontWeight: '$7',
  padding: '$12',
  borderBottom: '$borderWidths$xs solid $neutral200'
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  color: '$neutral900',
  fontSize: '$md',
  padding: '$12',
  paddingBottom: 0
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: '$black700',
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: 'white',
  borderRadius: '$2xl',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  lineHeight: '$md',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  zIndex: 9999,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' }
});

const StyledActions = styled(Grid, {
  gridTemplateColumns: '1fr 1fr',
  padding: '$12'
});

type ContentProps = {
  children?: ReactNode;
} & ComponentProps<typeof StyledContent>

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
};

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogContent = Content;
const AlertDialogTitle = StyledTitle;
const AlertDialogDescription = StyledDescription;
const AlertDialogActions = StyledActions;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;
const AlertDialogAction = AlertDialogPrimitive.Action;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogActions
};
