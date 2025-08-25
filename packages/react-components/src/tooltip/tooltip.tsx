import React, { ComponentProps, ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled, keyframes } from '../stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const StyledContent = styled(TooltipPrimitive.Content, {
  lineHeight: '$sm',
  color: '$white900',
  backgroundColor: '$neutral900',
  userSelect: 'none',
  opacity: 1,
  maxWidth: '240px',
  '& span': {
    visibility: 'visible !important'
  },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '800ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  },
  variants: {
    size: {
      sm: {
        padding: '$2 $4',
        fontSize: '$xs',
        fontWeight: '$5',
        borderRadius: '$sm',
        lineHeight: '$xs',
        maxWidth: '$30',
        minWidth: '$8',
        height: 'auto',
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: '$4 !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: '$5 !important'
            }
          }
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: 'auto !important',
              right: '$4 !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: 'auto !important',
              bottom: '$5 !important'
            }
          }
        }
      },
      md: {
        padding: '$3 $6',
        fontSize: '$sm',
        fontWeight: '$4',
        borderRadius: '$lg',
        lineHeight: '$sm',
        maxWidth: '240px',
        minWidth: '50px',
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: '$10 !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: '15px !important'
            }
          }
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: 'auto !important',
              right: '$10 !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: 'auto !important',
              bottom: '15px !important'
            }
          }
        }
      },
      lg: {
        padding: '$6 $8',
        fontSize: '$sm',
        fontWeight: '$5',
        borderRadius: '$lg',
        lineHeight: '$sm',
        maxWidth: '236px',
        minWidth: '$15',
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: '$12 !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: '$8 !important'
            }
          }
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: 'auto !important',
              right: '$12 !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: 'auto !important',
              bottom: '$8 !important'
            }
          }
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$neutral900',
  variants: {
    size: {
      sm: {
        width: '10px',
        height: '6px'
      },
      md: {
        width: '14px',
        height: '$2'
      },
      lg: {
        width: '$5',
        height: '$3'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

interface TooltipBaseProps {
  content: ReactNode;
}

export type TooltipProps = TooltipBaseProps &
  Omit<ComponentProps<typeof StyledContent>, 'content'> &
  ComponentProps<typeof TooltipPrimitive.Root>;

export const Tooltip = ({
  children,
  content,
  side,
  align,
  size,
  open,
  defaultOpen,
  delayDuration,
  disableHoverableContent,
  onOpenChange,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      {content ? (
        <TooltipPrimitive.Portal>
          <StyledContent side={side} align={align} size={size} {...props}>
            {content}
            <StyledArrow size={size} />
          </StyledContent>
        </TooltipPrimitive.Portal>
      ) : (
        <TooltipPrimitive.Content />
      )}
    </TooltipPrimitive.Root>
  );
};

export const TooltipProvider = TooltipPrimitive.Provider;
