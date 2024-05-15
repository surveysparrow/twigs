import React, {
  ComponentProps, FunctionComponent, isValidElement, ReactElement
} from 'react';
import { Button } from './button';
import { styled } from '../stitches.config';
import { Flex } from '../flex';

type OmitProps = 'leftIcon' | 'rightIcon' | 'loader' | 'loading' | 'isIcon' | 'variant'

export interface SplitButtonBaseProps {
    icon: ReactElement,
    color?: 'primary' | 'secondary',
    disabled?: boolean,
}

type SplitButtonProps = SplitButtonBaseProps & Omit<ComponentProps<typeof Button>, OmitProps> &
React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledLeftButton = styled(Button, {
  '&&': {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
});

const StyledRightButton = styled(Button, {
  '&&': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  '&:active': {
    border: '0'
  }
});

export const SplitButton : FunctionComponent<SplitButtonProps> = React.forwardRef(
  (
    {
      children, icon, disabled, color, ...rest
    }: SplitButtonProps,
    ref
  ) => {
    const element = icon || children;
    const validElement = isValidElement(element) ? element : null;
    return (
      <Flex>
        <StyledLeftButton
          ref={ref}
          disabled={disabled}
          color={color}
          {...rest}
        >
          {children}
        </StyledLeftButton>
        <StyledRightButton
          ref={ref}
          icon={validElement as ReactElement}
          disabled={disabled}
          color={color}
          {...rest}
        />
      </Flex>
    );
  }
);
