import { forwardRef } from 'react';
import { Stack, StackProps } from './stack';

type OmitDirection = Omit<StackProps, 'direction'>;

export const VStack = forwardRef<HTMLDivElement, OmitDirection>(
  (props, ref) => {
    return <Stack {...props} direction="column" ref={ref} />;
  }
);
