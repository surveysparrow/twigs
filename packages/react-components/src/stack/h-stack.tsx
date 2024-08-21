import { forwardRef } from 'react';
import { Stack, StackBaseProps } from './stack';

type OmitDirection = Omit<StackBaseProps, 'direction'>;

export const HStack = forwardRef<HTMLDivElement, OmitDirection>(
  (props, ref) => {
    return <Stack {...props} direction="row" ref={ref} />;
  }
);
