import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledText = styled('p', {
  fontWeight: '$4',
  color: '$text',
  variants: {
    size: {
      xxs: {
        fontSize: '$xxs',
        ineHeight: '$xxs',
      },
      xs: {
        fontSize: '$xs',
        ineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        ineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
    },
    weight: {
      regular: {
        fontWeight: '$4',
      },
      medium: {
        fontWeight: '$5',
      },
      bold: {
        fontWeight: '$7',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'regular',
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
