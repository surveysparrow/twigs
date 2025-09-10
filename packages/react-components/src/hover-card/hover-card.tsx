import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { ComponentProps, ReactElement } from 'react';
import { keyframes, styled } from '../stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
});

const StyledHoverCardContent = styled(HoverCardPrimitive.Content, {
  padding: '$4',
  width: 300,
  backgroundColor: '$white900',
  boxShadow:
    '0px 8px 12px 0px #0000000F, 0px 2px 5px 0px #0000000F, 0px 1px 1px 0px #0000000F',
  border: '0.5px solid #00000026',
  borderRadius: '$xl',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade }
  }
});
export const StyledHoverCardArrow = styled(HoverCardPrimitive.Arrow, {
  fill: 'white'
});

export type HoverCardContentProps = {
  children?: ReactElement | ReactElement[];
  arrow?: boolean;
} & ComponentProps<typeof StyledHoverCardContent>;

const Content = ({
  children,
  arrow = true,
  ...props
}: HoverCardContentProps) => {
  return (
    <HoverCardPrimitive.Portal>
      <StyledHoverCardContent {...props}>
        {arrow ? <StyledHoverCardArrow data-testid="hover-card-arrow" /> : null}
        {children}
      </StyledHoverCardContent>
    </HoverCardPrimitive.Portal>
  );
};

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardPortal = HoverCardPrimitive.Portal;
export const HoverCardContent = Content;
