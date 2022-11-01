import React, { FunctionComponent, isValidElement, ReactElement } from 'react';
import { Button, ButtonBaseProps } from './button';

type OmitProps = 'iconLeft' | 'iconRight' | 'isTransparent';

export interface IconButtonBaseProps {
  icon: ReactElement,
  'aria-label': string
}

interface BaseButtonProps extends Omit<ButtonBaseProps, OmitProps> { }
type IconButtonProps = IconButtonBaseProps &
  BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: FunctionComponent<IconButtonProps> = React.forwardRef(
  (
    {
      children, icon, 'aria-label': ariaLabel, ...rest
    }: IconButtonProps
  ) => {
    const element = icon || children;
    const validElement = isValidElement(element) ? element : null;
    return (
      <Button
        aria-label={ariaLabel}
        {...rest}
      >
        {validElement}
      </Button>
    );
  }
);
