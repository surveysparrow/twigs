import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledText = styled('p', {
  variants: {
    fontSize: {
      xs: {
        fontSize: '$1',
      },
      sm: {
        fontSize: '$2',
      },
      md: {
        fontSize: '$3',
      },
      lg: {
        fontSize: '$4',
      },
      xl: {
        fontSize: '$5',
      },
      '2xl': {
        fontSize: '$6',
      },
      '3xl': {
        fontSize: '$7',
      },
      '4xl': {
        fontSize: '$8',
      },
    },
  },
});

export type TextProps = ComponentProps<typeof StyledText> &
  React.HTMLAttributes<HTMLParagraphElement> & {
    as?: React.ElementType
 };

export const Text: FunctionComponent<TextProps> = ({
  children,
  ...rest
}: TextProps) => {
  return (
    <StyledText data-testid="text" {...rest}>
      {children}
    </StyledText>
  );
};
