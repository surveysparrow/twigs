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
  borderRadius: '$md',
  padding: '$6 $8',
  fontSize: '$sm',
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
  }
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$black900'
});

export const { Provider } = TooltipPrimitive;
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
  open,
  defaultOpen,
  onOpenChange,
  ...props
} :TooltipProps) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledContent side={side} align={align} {...props}>
          {content}
          <StyledArrow css={{ width: '$5', height: '$3' }} />
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};
