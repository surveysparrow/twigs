import React, {
  ComponentProps,
  FunctionComponent,
  isValidElement,
  ReactElement
} from 'react';
import { Button } from './button';
import { styled } from '../stitches.config';
import { BUTTON_CLASSNAMES } from './utils';

type OmitProps = 'leftIcon' | 'rightIcon' | 'isIcon';

export interface IconButtonBaseProps {
  icon: ReactElement;
  'aria-label'?: string;
}

const StyledIconButton = styled(Button, {
  variants: {
    shape: {
      round: {
        [`&.${BUTTON_CLASSNAMES.button}`]: {
          borderRadius: '$round'
        }
      },
      default: {}
    }
  },
  defaultVariants: {
    shape: 'default'
  }
});

export type IconButtonProps = IconButtonBaseProps &
  Omit<ComponentProps<typeof StyledIconButton>, OmitProps> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: FunctionComponent<IconButtonProps> = React.forwardRef(
  (
    {
      children, icon, 'aria-label': ariaLabel, as, ...rest
    }: IconButtonProps,
    ref
  ) => {
    const element = icon || children;
    const validElement = isValidElement(element) ? element : null;
    return (
      <StyledIconButton
        ref={ref}
        buttonAs={as}
        aria-label={ariaLabel}
        icon={validElement as ReactElement}
        {...rest}
      />
    );
  }
);
