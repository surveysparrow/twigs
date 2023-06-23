import React, { ComponentProps } from 'react';
import { keyframes, Box, styled } from '@sparrowengg/twigs-react';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

const StyledBox = styled(Box, {
  borderRradius: '50%',
  width: '$7',
  height: '$7',
  borderRadius: '$round',
  borderStyle: 'solid',
  borderBottomColor: '$white300',
  borderRightColor: '$white300',
  borderTopColor: '$white300',
  borderLeftColor: '$white900',
  animationDuration: '600ms',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  willChange: 'transform',
  animationName: `${spin}`,
  variants: {
    size: {
      md: {
        width: '$5',
        height: '$5',
        borderWidth: '$sm',
      },
      sm: {
        width: '$3',
        height: '$3',
        borderWidth: '$xs',
      },
      xs: {
        width: 10,
        height: 10,
        borderWidth: '$xs',
      },
      xxs: {
        width: 9,
        height: 9,
        borderWidth: '$sm',
      },
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

type SpinnerProps = ComponentProps<typeof StyledBox>;

export const Spinner: React.FC<SpinnerProps> = React.forwardRef(
  ({ size, ...rest }: SpinnerProps, ref) => {
    return <StyledBox size={size} {...rest} ref={ref} />;
  }
);