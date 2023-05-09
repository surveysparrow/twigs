import React, { FunctionComponent, ReactElement } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  WarningIcon, AlertFillIcon, TickCircleFillIcon
} from '@sparrowengg/twigs-react-icons';
import { styled, keyframes } from '../../stitches.config';
import { Flex } from '../flex';

const StyledTickIcon = styled(TickCircleFillIcon);
const StyledErrorIcon = styled(AlertFillIcon);
const StyledWarningIcon = styled(WarningIcon);

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
  paddingBottom: '$12',
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
    default: () => <StyledTickIcon />,
    success: () => <StyledTickIcon />,
    error: () => <StyledErrorIcon />,
    warning: () => <StyledWarningIcon />
  };
  return (
    <StyledIcon {...props}>
      {children || <>{iconMap[variant]()}</>}
    </StyledIcon>
  );
};

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  fontWeight: '$5',
  color: '$white900',
  fontSize: '$sm'
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$white900',
  fontSize: '$sm'
});

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$neutral900',
  borderRadius: '$xl',
  display: 'grid',
  padding: '$8 $6',
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
      default: {
        background: '$accent100',
        [`& ${StyledIcon} svg`]: {
          color: '$accent500'
        },
        [`& ${StyledTitle}`]: {
          color: '$black900'
        },
        [`& ${StyledDescription}`]: {
          color: '$black800'
        }
      },
      success: {
        background: '$accent700',
        [`& ${StyledIcon} svg`]: {
          color: '$primary400'
        },
        [`& ${StyledTitle}`]: {
          color: '$white900'
        },
        [`& ${StyledDescription}`]: {
          color: '$white800'
        }
      },
      error: {
        background: '$negative600',
        [`& ${StyledIcon} svg`]: {
          color: '$white900'
        },
        [`& ${StyledTitle}`]: {
          color: '$white900'
        },
        [`& ${StyledDescription}`]: {
          color: '$white800'
        }
      },
      warning: {
        background: '$attention500',
        [`& ${StyledIcon} svg`]: {
          color: '$black700'
        },
        [`& ${StyledTitle}`]: {
          color: '$black900'
        },
        [`& ${StyledDescription}`]: {
          color: '$black800'
        }
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
    variant: 'default'
  }
});

interface ToastBaseProps {
  children: React.ReactNode;
  variant: string,
  icon?: ReactElement;
}

export type ToastProps = ToastBaseProps & React.ComponentProps<typeof StyledToast>;

const ToastWrapper: FunctionComponent<ToastProps> = ({
  children,
  icon,
  variant = 'default',
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

type ProviderProps = React.ComponentProps<typeof StyledViewport> & ToastPrimitive.ToastProviderProps

const Provider: FunctionComponent<ProviderProps> = ({
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  children,
  ...rest
}: ProviderProps) => {
  return (
    <ToastPrimitive.Provider
      duration={duration}
      label={label}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
    >
      {children}
      <StyledViewport {...rest} />
    </ToastPrimitive.Provider>
  );
};

const StyledContent = styled(Flex, {
  gridArea: 'content',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  // padding: '$8 0',
  gap: '$4',
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

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
  padding: '0 $6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: '$2'
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
