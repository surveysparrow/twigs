import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from '../../stitches.config';

export type FormLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  as?: React.ElementType
};

export const FormLabel = styled(LabelPrimitive.Root, {
  display: 'inline-block',
  color: '$neutral800',
  fontWeight: '$4',
  userSelect: 'none',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs'
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});
