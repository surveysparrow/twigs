import React, { FunctionComponent, isValidElement, ReactElement } from 'react';
import { Button, ButtonBaseProps } from './button';

type OmitProps = 'iconLeft' | 'iconRight' | 'isText' | 'isIcon';

export interface IconButtonBaseProps {
  icon: ReactElement,
  'aria-label': string,
  variant: 'default' | 'primary' | 'accent' | 'secondary',
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
  isTransparent: boolean
}

interface BaseButtonProps extends Omit<ButtonBaseProps, OmitProps> { }
type IconButtonProps = IconButtonBaseProps &
  BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

// @TODO: revisit the ref approach here
export const IconButton: FunctionComponent<IconButtonProps> = React.forwardRef(
  (
    {
      children, icon, 'aria-label': ariaLabel, ...rest
    }: IconButtonProps,
    // eslint-disable-next-line
    ref 
  ) => {
    const element = icon || children;
    const validElement = isValidElement(element) ? element : null;
    return (
      <Button
        aria-label={ariaLabel}
        icon={validElement}
        {...rest}
      />
    );
  }
);
