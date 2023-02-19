import React, { ComponentProps, FunctionComponent, isValidElement, ReactElement } from 'react';
import { Button } from './button';

type OmitProps = 'iconLeft' | 'iconRight' | 'isIcon' | 'isText';

export interface IconButtonBaseProps {
  icon: ReactElement,
  'aria-label'?: string
}

type IconButtonProps = IconButtonBaseProps & Omit<ComponentProps<typeof Button>, OmitProps> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: FunctionComponent<IconButtonProps> = React.forwardRef(
  (
    {
      children, icon, 'aria-label': ariaLabel, ...rest
    }: IconButtonProps,
    ref
  ) => {
    const element = icon || children;
    const validElement = isValidElement(element) ? element : null;
    return (
      <Button
        ref={ref}
        aria-label={ariaLabel}
        icon={validElement}
        {...rest}
      />
    );
  }
);
