import { forwardRef } from 'react';
import { Stack, StackBaseProps } from './stack';

type OmitDirection = Omit<StackBaseProps, 'direction'>;

export const VStack = forwardRef<HTMLDivElement, OmitDirection>(
  (props, ref) => {
    return <Stack {...props} direction="column" ref={ref} />;
  }
);
