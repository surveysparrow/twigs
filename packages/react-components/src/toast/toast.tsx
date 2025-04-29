import React, { FunctionComponent, ReactElement } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  AlertFillIcon, TickCircleFillIcon,
  InfoFillIcon
} from '@sparrowengg/twigs-react-icons';
import { CircleLoader } from '../loader/circle';
import { styled, keyframes, hexToRgba } from '../stitches.config';
import { Flex } from '../flex';
import { Box } from '../box';

const StyledTickIcon = styled(TickCircleFillIcon);
const StyledErrorIcon = styled(AlertFillIcon);
const StyledWarningIcon = styled(InfoFillIcon);

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
  to: { transform: 'translateX(100vw)' }
});

const swipeOutToLeft = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(-100vw)' }
});

const swipeOutToTop = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: 'translateY(-100vh)' }
});

const swipeOutToBottom = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: 'translateY(100vh)' }
});

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  gap: '$space$5',
  minWidth: 400,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 99999999,
  outline: 'none',
  '& li': {
    '@media (prefers-reduced-motion: no-preference)': {
      '&[data-swipe-direction="up"], &[data-swipe-direction="down"]': {
        '&[data-swipe="move"]': {
          transform: 'translateY(var(--radix-toast-swipe-move-y))'
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateY(0)',
          transition: 'transform 200ms ease-out'
        }
      },
      '&[data-swipe-direction="up"]': {
        '&[data-swipe="end"]': {
          animation: `${swipeOutToTop} 150ms ease-out`
        }
      },
      '&[data-swipe-direction="down"]': {
        '&[data-swipe="end"]': {
          animation: `${swipeOutToBottom} 150ms ease-out`
        }
      },
      '&[data-swipe-direction="left"], &[data-swipe-direction="right"]': {
        '&[data-swipe="move"]': {
          transform: 'translateX(var(--radix-toast-swipe-move-x))'
        },
        '&[data-swipe="cancel"]': {
          transform: 'translateX(0)',
          transition: 'transform 200ms ease-out'
        }
      },
      '&[data-swipe-direction="left"]': {
        '&[data-swipe="end"]': {
          animation: `${swipeOutToLeft} 300ms ease-out`
        }
      },
      '&[data-swipe-direction="right"]': {
        '&[data-swipe="end"]': {
          animation: `${swipeOutToRight} 300ms ease-out`
        }
      }
    }
  },
  variants: {
    position: {
      'top-left': {
        top: '0',
        left: '0',
        paddingTop: '$12',
        paddingLeft: '$12',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            }
          }
        }
      },
      'top-center': {
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        paddingTop: '$12',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromTop} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            }
          }
        }
      },
      'top-right': {
        top: '0',
        right: '0',
        paddingTop: '$12',
        paddingRight: '$12',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            }
          }
        }
      },
      'bottom-left': {
        bottom: '0',
        left: '0',
        paddingBottom: '$12',
        paddingLeft: '$12',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            }
          }
        }
      },
      'bottom-center': {
        bottom: '0',
        left: '50%',
        paddingBottom: '$12',
        transform: 'translateX(-50%)',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromBottom} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
            }
          }
        }
      },
      'bottom-right': {
        bottom: '0',
        right: '0',
        paddingBottom: '$12',
        paddingRight: '$12',
        '& li': {
          '@media (prefers-reduced-motion: no-preference)': {
            '&[data-state="open"]': {
              animation: `${slideInFromRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
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
  width: '$6',
  height: '$6',
  alignItems: 'center',
  justifyContent: 'center'
});

type IconBaseProps = {
  children?: React.ReactNode;
  variant: string | undefined;
};

type IconProps = IconBaseProps & React.ComponentProps<typeof StyledIcon>;

const Icon = ({ children, variant = 'success', ...props }: IconProps) => {
  const iconMap = {
    default: () => <StyledTickIcon size={24} />,
    success: () => <StyledTickIcon size={24} />,
    error: () => <StyledErrorIcon size={24} />,
    warning: () => <StyledWarningIcon size={24} />
  };
  return variant === 'loading' ? (
    children || (
      <StyledIcon>
        <CircleLoader size="xl" color="accent" />
      </StyledIcon>
    )
  ) : (
    <StyledIcon {...props}>{children || <>{iconMap[variant]()}</>}</StyledIcon>
  );
};

const StyledTitle = styled(ToastPrimitive.Title, {
  fontWeight: '$7',
  lineHeight: '$sm',
  fontSize: '$sm'
});

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$white900',
  fontSize: '$sm'
});
// eslint-disable-next-line max-len
const defaultBoxShadow = `0px 56px 70px 30px ${hexToRgba('$white900', 0.4)}, 0px 10px 20px 0px ${hexToRgba('$accent500', 0.15)}, 0px 2px 5px 0px ${hexToRgba('$accent500', 0.06)}, 0px 1px 1px 0px ${hexToRgba('$accent500', 0.06)}`;

// eslint-disable-next-line max-len
const successBoxShadow = `0px 56px 70px 30px ${hexToRgba('$white900', 0.4)}, 0px 10px 20px 0px ${hexToRgba('$accent700', 0.15)}, 0px 2px 5px 0px ${hexToRgba('$accent700', 0.06)}, 0px 1px 1px 0px ${hexToRgba('$accent700', 0.06)}`;

// eslint-disable-next-line max-len
const errorBoxShadow = `0px 56px 70px 30px ${hexToRgba('$white900', 0.4)}, 0px 10px 20px 0px ${hexToRgba('$negative700', 0.15)}, 0px 2px 5px 0px ${hexToRgba('$negative700', 0.06)}, 0px 1px 1px 0px ${hexToRgba('$negative700', 0.06)}`;

// eslint-disable-next-line max-len
const warningBoxShadow = `0px 56px 70px 30px ${hexToRgba('$white900', 0.4)}, 0px 10px 20px 0px ${hexToRgba('$warning700', 0.15)}, 0px 2px 5px 0px ${hexToRgba('$warning700', 0.06)}, 0px 1px 1px 0px ${hexToRgba('$warning700', 0.06)}`;

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$neutral900',
  borderRadius: '$xl',
  display: 'flex',
  borderWidth: '.5px',
  borderStyle: 'solid',
  borderColorOpacity: ['$secondary500', 0.4],
  padding: '$7 $8',
  overflow: 'hidden',
  '&:focus, &:active': {
    outline: 'none'
  },
  '&:focus-visible': {
    $$shadowColor: '$colors$primary300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  variants: {
    variant: {
      default: {
        background: '$accent50',
        boxShadow: defaultBoxShadow,
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
        background: '$accent500',
        boxShadow: successBoxShadow,
        [`& ${StyledIcon} svg`]: {
          color: '$accent100'
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
        boxShadow: errorBoxShadow,
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
        background: '$warning200',
        boxShadow: warningBoxShadow,

        [`& ${StyledIcon} svg`]: {
          color: '$black700'
        },
        [`& ${StyledTitle}`]: {
          color: '$black900'
        },
        [`& ${StyledDescription}`]: {
          color: '$black800'
        }
      },
      loading: {
        backgroundColorOpacity: ['$accent500', 0.04],
        borderColorOpacity: ['$accent500', 0.2],
        borderRadius: '$xl',
        [`& ${StyledTitle}`]: {
          color: '$neutral900'
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

const StyledToastWrapper = styled(Box, {
  display: 'grid',
  minWidth: '100%',
  gridTemplateAreas: '"icon content action" "icon content action"',
  gridTemplateColumns: 'max-content auto max-content',
  columnGap: '$4',
  alignItems: 'center'
});

interface ToastBaseProps {
  children?: React.ReactNode;
  variant?: string;
  icon?: ReactElement;
}

export type ToastProps = ToastBaseProps &
  React.ComponentProps<typeof StyledToast>;

const ToastWrapper: FunctionComponent<ToastProps> = ({
  children,
  icon,
  variant = 'default',
  ...props
}) => {
  return (
    <StyledToast data-testid="toast" variant={variant} {...props}>
      <StyledToastWrapper>
        <Icon variant={variant}>{icon && React.cloneElement(icon)}</Icon>
        {children}
      </StyledToastWrapper>
    </StyledToast>
  );
};

export type ToastProviderProps = React.ComponentProps<typeof StyledViewport> &
  ToastPrimitive.ToastProviderProps;

const Provider: FunctionComponent<ToastProviderProps> = ({
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  children,
  ...rest
}: ToastProviderProps) => {
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
  gap: '$2',
  overflow: 'hidden'
});

type ContentBaseProps = {
  children: React.ReactNode;
};

type ContentProps = ContentBaseProps &
  React.ComponentProps<typeof StyledContent>;

const Content = ({ children, ...props }: ContentProps) => {
  return <StyledContent {...props}>{children}</StyledContent>;
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
