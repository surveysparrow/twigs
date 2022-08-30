import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { DotLoader } from '../loader';

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '$lg',
  lineHeight: '$md',
  borderRadius: '$lg',
  padding: '$3 $4',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '$7',
  cursor: 'pointer',
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
  '&:focus': {
    $$shadowColor: '$colors$blue300',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white900',
        border: '1px solid $primary',
      },
      secondary: {
        backgroundColor: '$white900',
        color: '$text',
        border: '1px solid $gray500',
      },
      text: {
        fontWeight: '400',
        color: '$text',
        padding: 0,
      },
    },
    size: {
      xxl: {
        padding: '18px $4',
        borderRadius: '$xl',
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        padding: '10px 20px',
        borderRadius: '$xl',
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      lg: {
        padding: '$3 $4',
        borderRadius: '$lg',
        fontSize: '$md',
        lineHeight: '$md',
      },
      md: {
        padding: '6px 10px',
        borderRadius: '$md',
        fontSize: '$sm',
        lineHeight: '$md',
      },
      sm: {
        padding: '$1 $3',
        borderRadius: '$sm',
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      xs: {
        padding: '$1 6px',
        borderRadius: '$sm',
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      xxs: {
        padding: '$1 $2',
        borderRadius: '$sm',
        fontSize: '$xxs',
        lineHeight: '$xxs',
      },
    },
    loading: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
});

const StyledSpan = styled('span', {});

export interface ButtonBaseProps {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

type ButtonProps = ButtonBaseProps &
  ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const Button:FunctionComponent<ButtonProps> = React.forwardRef(
  (
    {
      children, iconLeft, iconRight, loading, disabled, type, onClick, ...rest
    }: ButtonProps,
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        type={type}
        disabled={disabled}
        data-testid="button"
        onClick={onClick}
        {...rest}
      >
        {loading
          ? <DotLoader />
          : (
            <>
              {iconLeft && (
              <StyledSpan css={{ marginRight: '8px' }}>
                {React.cloneElement(iconLeft)}
              </StyledSpan>
              )}
              {children}
              {iconRight && (
              <StyledSpan css={{ marginLeft: '8px' }}>
                {React.cloneElement(iconRight)}
              </StyledSpan>
              )}
            </>
          )}
      </StyledButton>
    );
  },
);
