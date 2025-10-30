import React, { ComponentProps } from 'react';
import { styled } from '../stitches.config';

const StyledBox = styled('div', {});

export type BoxProps = ComponentProps<typeof StyledBox> &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType;
  };

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledBox data-testid="box" ref={ref} {...rest}>
        {children}
      </StyledBox>
    );
  }
);
