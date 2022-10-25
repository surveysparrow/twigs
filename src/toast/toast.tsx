import React, { FunctionComponent, ReactElement } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { styled, keyframes } from '../../stitches.config';
import { Flex } from '../flex';

const TickIcon = () => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1.5L6 12.5L1 7.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ErrorIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 13.12V9.38"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.029 4.139L21.688 17.543C22.578 19.101 21.453 21.04 19.659 21.04H4.34101C2.54601 21.04 1.42101 19.101 2.31201 17.543L9.97101 4.139C10.868 2.568 13.132 2.568 14.029 4.139Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r="1" fill="white" />
    </svg>
  );
};

const WarningIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 8L10 11L14 13L11 16"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 19.8L4.1 17.1C3.4 16.4 3 15.4 3 14.3V9.7C3 8.6 3.4 7.6 4.2 6.9L6.9 4.2C7.6 3.4 8.6 3 9.7 3H14.4C15.5 3 16.5 3.4 17.2 4.2L19.9 6.9C20.6 7.6 21 8.6 21 9.7V14.4C21 15.5 20.6 16.5 19.8 17.2L17.1 19.9C16.3 20.7 15.3 21.1 14.3 21.1H9.7C8.6 21 7.6 20.6 6.8 19.8Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 8L10 11L14 13L11 16"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 19.8L4.1 17.1C3.4 16.4 3 15.4 3 14.3V9.7C3 8.6 3.4 7.6 4.2 6.9L6.9 4.2C7.6 3.4 8.6 3 9.7 3H14.4C15.5 3 16.5 3.4 17.2 4.2L19.9 6.9C20.6 7.6 21 8.6 21 9.7V14.4C21 15.5 20.6 16.5 19.8 17.2L17.1 19.9C16.3 20.7 15.3 21.1 14.3 21.1H9.7C8.6 21 7.6 20.6 6.8 19.8Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StyledTickIcon = styled(TickIcon);
const StyledErrorIcon = styled(ErrorIcon);
const StyledWarningIcon = styled(WarningIcon);
const StyledInfoIcon = styled(InfoIcon);

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
});

const slideInFromRight = keyframes({
  from: { transform: 'translateX(calc(100% + $space$12))' },
  to: { transform: 'translateX(0)' }
});

const slideInFromLeft = keyframes({
  from: { transform: 'translateX(calc(-100% + $space$12))' },
  to: { transform: 'translateX(0)' }
});

const slideInFromTop = keyframes({
  from: { transform: 'translateY(calc(-100% + $space$12))' },
  to: { transform: 'translateY(0)' }
});

const slideInFromBottom = keyframes({
  from: { transform: 'translateY(calc(100% + $space$12))' },
  to: { transform: 'translateY(0)' }
});

const swipeOutToRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(100% + $space$12))' }
});

const swipeOutToLeft = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(-100% + $space$12))' }
});

const swipeOutToTop = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateY(calc(-100% + $space$12))' }
});

const swipeOutToBottom = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateY(calc(100% + $space$12))' }
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  padding: '$12',
  gap: '$space$5',
  width: 406,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 99999999,
  outline: 'none',
  variants: {
    position: {
      'top-left': {
        top: '0',
        left: '0',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            },
            '&[data-swipe="end"]': {
              animation: `${swipeOutToLeft} 100ms ease-out`
            }
          }
        }
      },
      'top-center': {
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromTop} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            },
            '&[data-swipe="end"]': {
              animation: `${swipeOutToTop} 100ms ease-out`
            }
          }
        }
      },
      'top-right': {
        top: '0',
        right: '0',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            },
            '&[data-swipe="end"]': {
              animation: `${swipeOutToRight} 100ms ease-out`
            }
          }
        }
      },
      'bottom-left': {
        bottom: '0',
        left: '0',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            },
            '&[data-swipe="end"]': {
              animation: `${swipeOutToLeft} 100ms ease-out`
            }
          }
        }
      },
      'bottom-center': {
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromBottom} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            },
            '&[data-swipe="end"]': {
              animation: `${swipeOutToBottom} 100ms ease-out`
            }
          }
        }
      },
      'bottom-right': {
        bottom: '0',
        right: '0',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            },
            '&[data-swipe="end"]': {
              animation: `${swipeOutToRight} 100ms ease-out`
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    position: 'bottom-center'
  }
});

const StyledIcon = styled(Flex, {
  gridArea: 'icon',
  height: '100%',
  width: '$10',
  alignItems: 'center',
  justifyContent: 'center'
});

type IconBaseProps = {
  children?: React.ReactNode;
  variant: string | undefined;
};

type IconProps = IconBaseProps &
  React.ComponentProps<typeof StyledIcon>

const Icon = ({ children, variant = 'success', ...props }: IconProps) => {
  const iconMap = {
    success: () => <StyledTickIcon />,
    error: () => <StyledErrorIcon />,
    warning: () => <StyledWarningIcon />,
    info: () => <StyledInfoIcon />
  };
  return (
    <StyledIcon className="icon-container" {...props}>
      {children || <>{iconMap[variant]()}</>}
    </StyledIcon>
  );
};

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$neutral900',
  borderRadius: '$xl',
  display: 'grid',
  gridTemplateAreas: '"icon content action" "icon content action"',
  gridTemplateColumns: 'max-content auto max-content',
  columnGap: '$8',
  alignItems: 'center',
  overflow: 'hidden',
  '&:focus, &:active': {
    outline: 'none'
  },
  '&:focus-visible': {
    $$shadowColor: '$colors$system300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  variants: {
    variant: {
      success: {
        '& .icon-container': {
          background: '$positive500'
        }
      },
      error: {
        '& .icon-container': {
          background: '$negative500'
        }
      },
      warning: {
        '& .icon-container': {
          background: '$attention400'
        }
      },
      info: {
        '& .icon-container': {
          background: '$system500'
        }
      }
    },
    size: {
      sm: {
        height: '$13',
        '& .toast-actions': {
          '&:before': {
            display: 'none'
          },
          '& :last-child': {
            display: 'none'
          }
        }
      },
      md: {
        height: '$20'
      }
    }
  },
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    }
  },
  defaultVariants: {
    size: 'sm',
    variant: 'success'
  }
});

interface ToastBaseProps {
  children: React.ReactNode;
  variant: string,
  icon?: ReactElement;
}

type ToastProps = ToastBaseProps & React.ComponentProps<typeof StyledToast>;

const ToastWrapper: FunctionComponent<ToastProps> = ({
  children,
  icon,
  variant = 'success',
  ...props
}) => {
  return (
    <StyledToast data-testid="toast" variant={variant} {...props}>
      <Icon variant={variant}>
        {icon && React.cloneElement(icon)}
      </Icon>
      {children}
    </StyledToast>
  );
};

type ProviderProps = React.ComponentProps<typeof StyledViewport>;

const Provider = ({ children, ...props }: ProviderProps) => {
  return (
    <ToastPrimitive.Provider>
      {children}
      <StyledViewport {...props} />
    </ToastPrimitive.Provider>
  );
};

const StyledContent = styled(Flex, {
  gridArea: 'content',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '$8 0',
  overflow: 'hidden'
});

type ContentBaseProps = {
  children: React.ReactNode
}

type ContentProps = ContentBaseProps & React.ComponentProps<typeof StyledContent>

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <StyledContent {...props}>
      {children}
    </StyledContent>
  );
};

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: '$4',
  fontWeight: '$5',
  color: '$white900',
  fontSize: '$md'
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$white900',
  fontSize: '$sm'
});

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
  padding: '0 $6',
  borderLeft: '$borderWidths$xs solid $colors$black500',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '100%',
  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    height: '$borderWidths$xs',
    background: '$black500'
  }
});

type ActionBaseProps = {
  children: React.ReactNode;
};

type ActionProps = ActionBaseProps & React.ComponentProps<typeof StyledAction>;

const Action = ({ children, ...props }: ActionProps) => {
  return (
    <StyledAction className="toast-actions" {...props}>
      {children}
    </StyledAction>
  );
};

export const ToastProvider = Provider;
export const ToastViewport = StyledViewport;
export const Toast = ToastWrapper;
export const ToastContent = Content;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = Action;
export const ToastClose = ToastPrimitive.Close;
