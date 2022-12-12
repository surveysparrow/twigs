import React, { FunctionComponent, isValidElement, ComponentProps, ReactElement } from 'react';
import { Button, ButtonBaseProps } from './button';

type OmitProps = 'iconLeft' | 'iconRight' | 'isText' | 'isIcon';

export interface IconButtonBaseProps {
  icon: ReactElement,
  'aria-label': string
}

interface BaseButtonProps extends ComponentProps<typeof Button> { }
type IconButtonProps = IconButtonBaseProps & Omit<BaseButtonProps, OmitProps>;

// @TODO: revisit the ref approach here
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
        aria-label={ariaLabel}
        icon={validElement}
        ref={ref}
        {...rest}
      />
    );
  }
);
