import React, { FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import { Box, BoxProps } from '../box';

const StyledBox = styled(Box, {});

export type FlexProps = {
  flexDirection?: React.CSSProperties['flexDirection'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  alignContent?: React.CSSProperties['alignContent'];
  justifyItems?: React.CSSProperties['justifyItems'];
  wrap?: React.CSSProperties['flexWrap'];
  grow?: React.CSSProperties['flexGrow'];
  gap?: React.CSSProperties['gap'];
  shrink?: React.CSSProperties['flexShrink'];
  flow?: React.CSSProperties['flexFlow'];
  basis?: React.CSSProperties['flexBasis'];
} & BoxProps;

export const Flex: FunctionComponent<FlexProps> = React.forwardRef(
  (
    {
      children,
      flexDirection,
      justifyContent,
      justifyItems,
      alignContent,
      alignItems,
      gap,
      wrap,
      shrink,
      css,
      grow,
      flow,
      basis,
      ...rest
    }: FlexProps,
    ref
  ) => {
    return (
      <StyledBox
        css={{
          display: 'flex',
          flexDirection,
          justifyContent,
          justifyItems,
          alignContent,
          alignItems,
          gap,
          flexShrink: shrink,
          flexWrap: wrap,
          flexGrow: grow,
          flexFlow: flow,
          flexBasis: basis,
          ...css
        }}
        data-testid="flex"
        {...rest}
        ref={ref}
      >
        {children}
      </StyledBox>
    );
  }
);
