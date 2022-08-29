import React, { FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';

const StyledHeading = styled('h1', {
  fontWeight: '$7',
  variants: {
    size: {
      h6: {
        fontSize: '$h6',
      },
      h5: {
        fontSize: '$h5',
      },
      h4: {
        fontSize: '$h4',
      },
      h3: {
        fontSize: '$h3',
      },
      h2: {
        fontSize: '$h2',
      },
      h1: {
        fontSize: '$h1',
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
    size: 'h1',
    weight: '700',
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
