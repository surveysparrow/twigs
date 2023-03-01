import * as PopoverPrimitive from '@radix-ui/react-popover';
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

export const PopoverContent = styled(PopoverPrimitive.Content, {
  padding: '$2',
  width: 260,
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: '$neutral300',
  borderRadius: '$md',
  backgroundColor: '$white900',
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

export const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: 'white',
  stroke: '$neutral300'
});

export const PopoverClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  position: 'absolute',
  top: 5,
  right: 5
});

export const { PopoverTrigger } = PopoverPrimitive;
export const Popover = PopoverPrimitive.Root;
export const PopoverPortal = PopoverPrimitive.Portal;
export const PopoverAnchor = PopoverPrimitive.Anchor;
