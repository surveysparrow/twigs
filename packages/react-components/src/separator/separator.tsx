import React, { forwardRef } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { CSS } from '@stitches/react';
import { styled, config } from '../stitches.config';

const SeparatorRoot = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$neutral100',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 }
});

export type SeparatorProps = {
   orientation: 'horizontal' | 'vertical';
   decorative?: boolean;
   ref?: React.Ref<HTMLDivElement>;
   css?: CSS<typeof config>;
} & React.ComponentProps<typeof SeparatorPrimitive.Root>;

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation, decorative, ...props }, ref) => {
    return (
      <SeparatorRoot
        ref={ref}
        data-testid="separator"
        orientation={orientation}
        decorative={decorative}
        {...props}
      />
    );
  }
);
