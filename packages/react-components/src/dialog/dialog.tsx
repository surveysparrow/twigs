import React, {
  ComponentProps,
  useContext,
  createContext,
  ReactNode
} from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { prefixClassName } from '@src/utils';
import clsx from 'clsx';
import { keyframes, styled } from '../stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
});

type SizeType = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type ScrollType = 'auto' | 'scroll' | 'hidden';

type DialogContextType = {
  size: SizeType;
  scrollBehavior: ScrollType;
};

const DialogContext = createContext<DialogContextType>({
  size: 'md',
  scrollBehavior: 'auto'
});

const DialogProvider = ({
  children,
  size,
  scrollBehavior
}: {
  children: ReactNode;
  size: SizeType;
  scrollBehavior: ScrollType;
}) => {
  return (
    <DialogContext.Provider value={{ size, scrollBehavior }}>
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
  backgroundColor: '$white900',
  borderRadius: '$2xl',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '80vh',
  maxWidth: '95vw',
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
    },
    scrollBehavior: {
      auto: {
        overflowY: 'auto'
      },
      scroll: {
        overflowY: 'scroll'
      },
      hidden: {
        overflowY: 'hidden'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    scrollBehavior: 'auto'
  }
});

type ContentProps = {
  children?: ReactNode;
  overlayClassName?:string;
  portalContainer?: HTMLElement;
} & ComponentProps<typeof StyledContent>;

const Content = ({
  children, portalContainer, overlayClassName, ...props
}: ContentProps) => {
  const dialogContext = useContext(DialogContext);
  return (
    <DialogPrimitive.Portal container={portalContainer}>
      <StyledOverlay className={clsx(prefixClassName('dialog__overlay'), overlayClassName)} />
      <StyledContent {...dialogContext} {...props}>
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  );
};

export type DialogRootProps = {
  children: ReactNode;
  size?: SizeType;
  scrollBehavior?: ScrollType;
} & ComponentProps<typeof DialogPrimitive.Root>;

const DialogRoot = ({
  children,
  size = 'md',
  scrollBehavior = 'auto',
  ...props
}: DialogRootProps) => {
  return (
    <DialogProvider scrollBehavior={scrollBehavior} size={size}>
      <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
    </DialogProvider>
  );
};

const StyledHeader = styled('header', {
  minHeight: '$18',
  padding: '$8 $12',
  borderBottom: '$borderWidths$xs solid $colors$neutral200'
});

type HeaderProps = {
  children?: ReactNode;
} & ComponentProps<typeof StyledHeader>;

const Header = ({ children, ...props }: HeaderProps) => {
  return <StyledHeader {...props}>{children}</StyledHeader>;
};

const StyledBody = styled('div', {
  padding: '$8 $12'
});

type BodyProps = {
  children?: ReactNode;
} & ComponentProps<typeof StyledBody>;

const Body = ({ children, ...props }: BodyProps) => {
  return <StyledBody {...props}>{children}</StyledBody>;
};

const StyledFooter = styled('footer', {
  height: '$18',
  padding: '$8 $12'
});

type FooterProps = {
  children?: ReactNode;
} & ComponentProps<typeof StyledFooter>;

const Footer = ({ children, ...props }: FooterProps) => {
  return <StyledFooter {...props}>{children}</StyledFooter>;
};

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: '$7',
  fontSize: '$lg',
  color: '$neutral900',
  variants: {
    size: {
      md: {
        fontSize: '$md',
        lineHeight: '$md'
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg'
      }
    }
  },
  defaultVariants: {
    size: 'lg'
  }
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: 0,
  color: '$neutral700',
  fontSize: '$xs',
  lineHeight: '$xxs'
});

// Exports
export const Dialog = DialogRoot;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogHeader = Header;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogBody = Body;
export const DialogFooter = Footer;
export const DialogClose = DialogPrimitive.Close;
