import { combinedRef } from '@src/utils/combine-ref';
import { mergeReactProps } from '@src/utils/merge-props';
import React from 'react';

interface SlotProps {
  children?: React.ReactNode; // Only one child allowed.
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  (props, forwardedRef) => {
    const { children, ...slotProps } = props;

    if (!React.isValidElement(children)) {
      return null;
    }
    return React.cloneElement(children, {
      ...mergeReactProps(slotProps, children.props),
      ref: combinedRef([forwardedRef, (children as any).ref])
    } as any);
  }
);
