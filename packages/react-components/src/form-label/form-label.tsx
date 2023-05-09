import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from '@stitches/react';

export type FormLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  as?: React.ElementType
};

export const FormLabel = styled(LabelPrimitive.Root, {
  display: 'inline-block',
  color: '$neutral700',
  fontWeight: '$4',
  userSelect: 'none'
});
