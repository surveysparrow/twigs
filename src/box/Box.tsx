import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledBox = styled('div', {});

export type BoxProps = ComponentProps<typeof StyledBox> &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType
 };

export const Box: FunctionComponent<BoxProps> = ({
  children,
  ...rest
}: BoxProps) => {
  return (
    <StyledBox data-testid="box" {...rest}>
      {children}
    </StyledBox>
  );
};
