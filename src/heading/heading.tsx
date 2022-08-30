import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledHeading = styled('h1', {
  fontWeight: '$7',
  color: '$text',
  variants: {
    size: {
      h6: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      h5: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      h4: {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      h3: {
        fontSize: '$3xl',
        lineHeight: '$2xl',
      },
      h2: {
        fontSize: '$4xl',
        lineHeight: '$3xl',
      },
      h1: {
        fontSize: '$5xl',
        lineHeight: '$4xl',
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
    size: 'h1',
    weight: 'bold',
  },
});

export type HeadingProps = ComponentProps<typeof StyledHeading> &
  React.HTMLAttributes<HTMLParagraphElement> & {
    as?: React.ElementType
 };

export const Heading: FunctionComponent<HeadingProps> = ({
  children,
  ...rest
}: HeadingProps) => {
  return (
    <StyledHeading data-testid="heading" {...rest}>
      {children}
    </StyledHeading>
  );
};
