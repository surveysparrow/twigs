import React, { FunctionComponent } from 'react';
import { CSS, VariantProps } from '@stitches/react';
import { styled, keyframes, config } from '../../stitches.config';
import { Box } from '../box';

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
    animation: `${loaderMove} 1.5s infinite cubic-bezier(0.51, 0, 0, 1)`
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
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

export type LineLoaderProps = VariantProps<typeof StyledContainer> &
  React.HTMLAttributes<HTMLDivElement> & {
    containerCSS?: CSS<typeof config>;
    containerRef?: React.RefObject<HTMLDivElement>;
  };

export const LineLoader: FunctionComponent<LineLoaderProps> = ({
  containerCSS,
  containerRef,
  ...props
}) => {
  return (
    <StyledContainer
      data-testid="line-loader"
      {...props}
      ref={containerRef}
      css={{
        ...containerCSS
      }}
    >
      <Box />
    </StyledContainer>
  );
};
