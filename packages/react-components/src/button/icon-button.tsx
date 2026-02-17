import React, {
  ComponentProps,
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

export const IconButton = React.forwardRef<typeof StyledIconButton, IconButtonProps>(
  (
    {
      children, icon, 'aria-label': ariaLabel, ...rest
    },
    ref
  ) => {
    const element = icon || children;
    const validElement = isValidElement(element) ? element : null;
    return (
      <StyledIconButton
        ref={ref}
        aria-label={ariaLabel}
        icon={validElement as ReactElement}
        {...rest}
      />
    );
  }
);
