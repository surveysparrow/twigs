import React, { ComponentProps, ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled, keyframes } from '../../stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 0.8, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 0.8, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 0.8, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 0.8, transform: 'translateX(0)' }
});

const StyledContent = styled(TooltipPrimitive.Content, {
  lineHeight: '$sm',
  color: '$white900',
  backgroundColor: '$black900',
  userSelect: 'none',
  opacity: 0.8,
  maxWidth: '240px',
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
        borderRadius: '$sm'
      },
      md: {
        padding: '$6 $8',
        fontSize: '$sm',
        borderRadius: '$md'
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
  ComponentProps<typeof StyledContent> &
  ComponentProps<typeof TooltipPrimitive.Root>;

export const Tooltip = ({
  children,
  content,
  side,
  align,
  size,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      {content && (
        <TooltipPrimitive.Portal>
          <StyledContent side={side} align={align} size={size} {...props}>
            {content}
            <StyledArrow size={size} />
          </StyledContent>
        </TooltipPrimitive.Portal>
      )}
    </TooltipPrimitive.Root>
  );
};

export const TooltipProvider = TooltipPrimitive.Provider;
