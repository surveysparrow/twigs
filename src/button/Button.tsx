import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { DotLoader } from '../loader';

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '19.2px',
  lineHeight: '24px',
  borderRadius: '10px',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '700',
  cursor: 'pointer',
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
  '&:focus': {
    $$shadowColor: '$colors$primary',
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
        padding: '18px 24px',
        borderRadius: '15px',
        fontSize: '19.2px',
        lineHeight: '28px',
      },
      xl: {
        padding: '10px 20px',
        borderRadius: '15px',
        fontSize: '19.2px',
        lineHeight: '28px',
      },
      lg: {
        padding: '8px 16px',
        borderRadius: '10px',
        fontSize: '16px',
        lineHeight: '24px',
      },
      md: {
        padding: '6px 10px',
        borderRadius: '8px',
        fontSize: '13.33px',
        lineHeight: '20px',
      },
      sm: {
        padding: '2px 8px',
        borderRadius: '15px',
        fontSize: '13.33px',
        lineHeight: '28px',
      },
      xs: {
        padding: '2px 6px',
        borderRadius: '15px',
        fontSize: '11.11px',
        lineHeight: '16px',
      },
      xxs: {
        padding: '2px 4px',
        borderRadius: '5px',
        fontSize: '9.26px',
        lineHeight: '12px',
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
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, HTMLButtonElement>) => void;
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
