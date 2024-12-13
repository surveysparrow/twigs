import React, { FunctionComponent } from 'react';
import { CSS, VariantProps } from '@stitches/react';
import { styled, keyframes, config } from '../stitches.config';
import { Box } from '../box';
import { prefixClassName } from '../utils';

const loaderMove = keyframes({
  '0%': {
    left: '-10px'
  },
  '100%': {
    left: 'calc(100% + 10px)'
  }
});

const StyledContainer = styled(Box, {
  width: '$6',
  backgroundColor: '$white600',
  borderRadius: '100px',
  position: 'relative',
  overflow: 'hidden',
  '& div': {
    width: '10px',
    height: '100%',
    backgroundColor: '$white900',
    borderRadius: '100px',
    position: 'absolute',
    animation: `${loaderMove} 1.5s infinite cubic-bezier(0.51, 0, 0, 1)`,
    animationDelay: '0.15s'
  },
  variants: {
    size: {
      sm: {
        height: '4px'
      },
      md: {
        height: '5px'
      },
      lg: {
        height: '6px'
      },
      xl: {
        height: '8px'
      }
    },
    color: {
      primary: {
        backgroundColorOpacity: ['$primary800', 0.25],

        [`.${prefixClassName('line-loader__dot')}`]: {
          backgroundColor: '$primary800'
        }
      },
      secondary: {
        backgroundColorOpacity: ['$secondary700', 0.4],

        [`.${prefixClassName('line-loader__dot')}`]: {
          backgroundColor: '$secondary700'
        }
      },
      bright: {
        backgroundColorOpacity: ['$white900', 0.5],

        [`.${prefixClassName('line-loader__dot')}`]: {
          backgroundColor: '$white900'
        }
      },
      negative: {
        backgroundColorOpacity: ['$negative500', 0.4],

        [`.${prefixClassName('line-loader__dot')}`]: {
          backgroundColor: '$negative700'
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    color: 'ghost'
  }
});

export type LineLoaderProps = VariantProps<typeof StyledContainer> &
  React.HTMLAttributes<HTMLDivElement> & {
    css?: CSS<typeof config>;
    containerRef?: React.Ref<HTMLDivElement>;
  };

export const LineLoader: FunctionComponent<LineLoaderProps> = ({
  css,
  containerRef,
  ...props
}) => {
  return (
    <StyledContainer
      data-testid="line-loader"
      {...props}
      ref={containerRef}
      css={css}
    >
      <Box className={`${prefixClassName('line-loader__dot')}`} />
    </StyledContainer>
  );
};
