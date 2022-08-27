import React, { FunctionComponent, ComponentProps } from 'react';
import { styled, keyframes } from '../../stitches.config';
import { Box } from '../box';

const bounceDelay = keyframes({
  '0%, 80%, 100%': {
    '-webkit-transform': 'scale(0)',
    transform: 'scale(0)',
  },
  '40%': {
    '-webkit-transform': 'scale(1.0)',
    transform: 'scale(1.0)',
  },
});

const StyledContainer = styled(Box, {
  '& div': {
    width: 10,
    height: 10,
    marginRight: 8,
    display: 'inline-block',
    backgroundColor: '#ffffff',
    borderRadius: '100%',
    WebkitAnimation: `${bounceDelay} 1.4s infinite ease-in-out both`,
    animation: `${bounceDelay} 1s infinite ease-in-out both`,
  },
  '& div:nth-child(1)': {
    WebkitAnimationDelay: '-0.32s',
    animationDelay: '-0.32s',
  },
  '& div:nth-child(2)': {
    WebkitAnimationDelay: '-0.16s',
    animationDelay: '-0.16s',
  },
  '& div:nth-child(3)': {
    marginRight: 0,
  },
});

export type DotLoaderProps = ComponentProps<typeof StyledContainer> &
  React.HTMLAttributes<HTMLDivElement>

export const DotLoader: FunctionComponent<DotLoaderProps> = () => {
  return (
    <StyledContainer data-testid="dot-loader">
      <Box />
      <Box />
      <Box />
    </StyledContainer>
  );
};
