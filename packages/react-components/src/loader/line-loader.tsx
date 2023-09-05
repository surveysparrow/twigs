import React, { FunctionComponent } from 'react';
import { CSS, VariantProps } from '@stitches/react';
import { styled, keyframes, config } from '../../stitches.config';
import { Box } from '../box';

const loaderMove = keyframes({
  '0%, 20%': {
    left: '-10px'
  },
  '80%, 100%': {
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
    animation: `${loaderMove} 0.8s infinite ease-in-out`
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
