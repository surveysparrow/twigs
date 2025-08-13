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
  backgroundColor: '$black900',
  userSelect: 'none',
  opacity: 1,
  maxWidth: '240px',
  gap: '10px',
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
        padding: '$1 $2',
        fontSize: '$xs',
        fontWeight: '$5',
        borderRadius: '$sm',
        lineHeight: '$xs',
        maxWidth: '$30',
        minWidth: '32px',
        height: 'auto',
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: '8px !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: '8px !important'
            }
          },
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: 'auto !important',
              right: '8px !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: 'auto !important',
              bottom: '8px !important'
            }
          },
        },
      },
      md: {
        padding: '6px 12px',
        fontSize: '$sm',
        fontWeight: '$4',
        borderRadius: '$lg',
        lineHeight: '$sm',
        maxWidth: '240px',
        minWidth: '50px',
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: '20px !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: '12px !important'
            }
          },
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: 'auto !important',
              right: '20px !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: 'auto !important',
              bottom: '12px !important'
            }
          },
        },
      },
      lg: {
        padding: '12px 16px',
        fontSize: '$sm',
        fontWeight: '$5',
        borderRadius: '$lg',
        lineHeight: '$sm',
        maxWidth: '236px',
        minWidth: '60px',
        '&[data-align="start"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: '24px !important'
            }
          },  
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: '12px !important'
            }
          },
        },
        '&[data-align="end"]': {
          '&[data-side="top"], &[data-side="bottom"]': {
            '& span': {
              left: 'auto !important',
              right: '24px !important'
            }
          },
          '&[data-side="left"], &[data-side="right"]': {
            '& span': {
              top: 'auto !important',
              bottom: '12px !important'
            }
          },
        },
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$black900',
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
