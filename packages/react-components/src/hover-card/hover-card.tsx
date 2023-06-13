import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { ComponentProps, ReactElement } from 'react';
import { keyframes, styled } from '../../stitches.config';

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

const StyledHoverCardContent = styled(HoverCardPrimitive.Content, {
  borderRadius: '$md',
  padding: '$4',
  width: 300,
  backgroundColor: '$white900',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
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
  arrow?: boolean
} & ComponentProps<typeof StyledHoverCardContent>

const Content = ({ children, arrow = true, ...props }: HoverCardContentProps) => {
  return (
    <HoverCardPrimitive.Portal>
      <StyledHoverCardContent {...props}>
        {
          arrow
            ? <StyledHoverCardArrow data-testid="hover-card-arrow" />
            : null
        }
        {children}
      </StyledHoverCardContent>
    </HoverCardPrimitive.Portal>
  );
};

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = Content;
