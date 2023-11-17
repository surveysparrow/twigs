import React, {
  ReactElement, ComponentProps, useContext, createContext, ReactNode
} from 'react';
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

type SizeType = 'sm' | 'md' | 'lg' | 'xl' | 'full';

type DialogContextType = {
  size: SizeType;
}

const DialogContext = createContext<DialogContextType>({
  size: 'md'
});

const DialogProvider = ({ children, size }: { children: ReactNode, size: SizeType }) => {
  return (
    <DialogContext.Provider value={{ size }}>
      {children}
    </DialogContext.Provider>
  );
};
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
      full: {
        width: '100vw',
        height: '100vh',
        // overriding default maxHeight and maxWidth
        maxHeight: '100vh',
        maxWidth: '100vw'
      },
      xl: {
        width: '1346px'
      },
      lg: {
        width: '980px'
      },
      md: {
        width: '600px'
      },
      sm: {
        width: '464px'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

type ContentProps = {
  children?: ReactElement | ReactElement[];
} & ComponentProps<typeof StyledContent>

const Content = ({ children }: ContentProps) => {
  const dialogContext = useContext(DialogContext);
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...dialogContext}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
};

type DialogRootProps = {
  children : ReactNode,
  size?: SizeType;
}

const DialogRoot = ({ children, size, ...props }:DialogRootProps) => {
  return (
    <DialogProvider size={size || 'md'}>
      <DialogPrimitive.Root {...props}>
        {children}
      </DialogPrimitive.Root>
    </DialogProvider>
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
export const Dialog = DialogRoot;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;
