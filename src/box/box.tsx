import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledBox = styled('div', {});

export type BoxProps = ComponentProps<typeof StyledBox> &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType
  };

export const Box: FunctionComponent<BoxProps> = React.forwardRef((
  {
    children,
    ...rest
  }: BoxProps, ref
) => {
  return (
    <StyledBox data-testid="box" ref={ref} {...rest}>
      {children}
    </StyledBox>
  );
});
