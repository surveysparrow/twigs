import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledText = styled('p', {
  variants: {
    size: {
      xxs: {
        fontSize: '$p-xxs',
      },
      xs: {
        fontSize: '$p-xs',
      },
      sm: {
        fontSize: '$p-sm',
      },
      md: {
        fontSize: '$p-md',
      },
      lg: {
        fontSize: '$p-lg',
      },
    },
    weight: {
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    weight: '400',
  },
});

export type TextProps = ComponentProps<typeof StyledText> &
  React.HTMLAttributes<HTMLParagraphElement>

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
