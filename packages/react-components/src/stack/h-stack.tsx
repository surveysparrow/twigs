import { forwardRef } from 'react';
import { Stack, StackProps } from './stack';

type OmitDirection = Omit<StackProps, 'direction'>;

export const HStack = forwardRef<HTMLDivElement, OmitDirection>(
  (props, ref) => {
    return <Stack {...props} direction="row" ref={ref} />;
  }
);
