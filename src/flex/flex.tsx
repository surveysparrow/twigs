import React, { FunctionComponent } from 'react';
import { styled } from '../../stitches.config';
import { Box, BoxProps } from '../box';

const StyledBox = styled(Box, {});

export type FlexProps = BoxProps

export const Flex: FunctionComponent<FlexProps> = ({
  children,
  css,
  ...rest
}: FlexProps) => {
  return (
    <StyledBox css={{ display: 'flex', ...css }} data-testid="flex" {...rest}>
      {children}
    </StyledBox>
  );
};
