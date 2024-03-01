import React, { FunctionComponent } from 'react';
import { CSS, VariantProps } from '@stitches/react';
import { styled, keyframes, config } from '../stitches.config';
import { Box } from '../box';
import { prefixClassName } from '../utils';

const loaderSpin = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

const StyledContainer = styled(Box, {
  borderRadius: '100px',
  position: 'relative',
  overflow: 'hidden',

  [`.${prefixClassName('circle-loader__ring')}`]: {
    stroke: 'rgba(255, 255, 255, 0.15)',
    fill: 'none'
  },

  [`.${prefixClassName('circle-loader__dot')}`]: {
    stroke: '#fff',
    fill: 'none',
    transformOrigin: '50% 50%',
    animation: `${loaderSpin} 0.8s infinite linear`
  },

  svg: {
    width: '100%',
    height: '100%',
    display: 'block'
  },

  variants: {
    size: {
      xs: {
        height: '$2',
        width: '$2'
      },
      sm: {
        height: '10px',
        width: '10px'
      },
      md: {
        height: '$3',
        width: '$3'
      },
      lg: {
        height: '$4',
        width: '$4'
      },
      xl: {
        height: '$6',
        width: '$6'
      },
      '2xl': {
        height: '$8',
        width: '$8'
      },
      '3xl': {
        height: '$10',
        width: '$10'
      }
    },
    color: {
      primary: {
        [`.${prefixClassName('circle-loader__ring')}`]: {
          stroke: '$primary800',
          strokeOpacity: 0.25
        },

        [`.${prefixClassName('circle-loader__dot')}`]: {
          stroke: '$primary800'
        }
      },
      secondary: {
        [`.${prefixClassName('circle-loader__ring')}`]: {
          stroke: '$secondary700',
          strokeOpacity: 0.4
        },

        [`.${prefixClassName('circle-loader__dot')}`]: {
          stroke: '$secondary700'
        }
      },
      bright: {
        [`.${prefixClassName('circle-loader__ring')}`]: {
          stroke: '$white900',
          strokeOpacity: 0.5
        },

        [`.${prefixClassName('circle-loader__dot')}`]: {
          stroke: '$white900'
        }
      },
      negative: {
        [`.${prefixClassName('circle-loader__ring')}`]: {
          stroke: '$negative500',
          strokeOpacity: 0.4
        },
        [`.${prefixClassName('circle-loader__dot')}`]: {
          stroke: '$negative700'
        }
      }
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'ghost'
  }
});

export type CircleLoaderProps = VariantProps<typeof StyledContainer> &
  React.HTMLAttributes<HTMLDivElement> & {
    css?: CSS<typeof config>;
    containerRef?: React.RefObject<HTMLDivElement>;
  };

export const CircleLoader: FunctionComponent<CircleLoaderProps> = ({
  css,
  containerRef,
  ...props
}) => {
  const circumference = 2 * Math.PI * 6;

  return (
    <StyledContainer
      data-testid="circle-loader"
      {...props}
      css={css}
      ref={containerRef}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="5" strokeWidth="2" className={`${prefixClassName('circle-loader__ring')}`} />
        <circle
          cx="6"
          cy="6"
          r="5"
          strokeWidth="2"
          className={`${prefixClassName('circle-loader__dot')}`}
          strokeDasharray={`${circumference / 4} ${circumference}`}
        />
      </svg>
    </StyledContainer>
  );
};
