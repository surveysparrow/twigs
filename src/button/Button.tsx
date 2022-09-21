import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { DotLoader } from '../loader';

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'none',
  background: 'transparent',
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
    variant: {
      default: {
        background: '$black50',
        color: '$neutral800',
        border: '$borderWidths$sm solid transparent',
        '&:hover, &:focus': {
          color: '$neutral900',
          background: '$black100',
          borderColor: 'transparent',
        },
        '&:active': {
          color: '$neutral900',
          background: '$black300',
          borderColor: 'transparent',
        },
      },
      primary: {
        background: '$primary',
        color: '$white900',
        border: '2px solid $colors$primary',
        '&:hover, &:focus': {
          background: '$red700',
          borderColor: '$red700',
        },
        '&:active': {
          background: '$red800',
          borderColor: '$red800',
        },
      },
      accent: {
        background: '$grey600',
        color: '$white900',
        border: '2px solid $colors$grey600',
        '&:hover, &:focus': {
          background: '$grey700',
          borderColor: '$grey700',
        },
        '&:active': {
          background: '$grey800',
          borderColor: '$grey800',
        },
      },
      secondary: {
        background: 'transparent',
        color: '$grey600',
        border: '2px solid $colors$grey600',
        '&:hover, &:focus': {
          color: '$grey700',
          border: '2px solid $grey700',
        },
        '&:active': {
          color: '$grey700',
          background: '$grey100',
        },
      },
    },
    isText: {
      true: {
        background: 'transparent',
        border: 'none',
        color: '$neutral700',
        fontWeight: '$7',
        padding: 0,
        '&:hover, &:active, &:focus': {
          background: 'transparent',
          borderColor: 'transparent',
        },
      },
    },
    isTransparent: {
      true: {
        border: 'none',
        background: 'transparent',
        '&:active, &:focus, &:hover': {
          borderColor: 'transparent',
          background: 'transparent',
        },
      },
    },
    isLoading: {
      true: {
        pointerEvents: 'none',
      },
    },
    isIcon: {
      true: {
        padding: 0,
        justifyContent: 'center',
        width: '$10',
        height: '$10',
        '& svg path': {
          stroke: 'CurrentColor',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      isText: true,
      css: {
        color: '$cyan700',
        '&:hover, &:focus, &:active': {
          color: '$cyan900',
        },
      },
    },
    {
      variant: 'primary',
      isLoading: true,
      css: {
        background: '$red700',
      },
    },
    {
      variant: 'accent',
      isText: true,
      css: {
        color: '$grey600',
        '&:hover, &:focus, &:active': {
          color: '$grey700',
        },
      },
    },
    {
      variant: 'default',
      isText: true,
      css: {
        color: '$neutral700',
        '&:hover, &:focus, &:active': {
          color: '$neutral900',
        },
      },
    },
    {
      variant: 'default',
      isLoading: true,
      css: {
        background: '$black100',
        '& div': {
          background: '$neutral800',
        },
      },
    },
    {
      variant: 'secondary',
      isLoading: true,
      css: {
        background: '$grey100',
        '& div': {
          background: '$grey700',
        },
      },
    },
    {
      isIcon: true,
      isTransparent: true,
      css: {
        padding: 0,
        width: 'auto',
        height: 'auto',
      },
    },
    {
      isIcon: true,
      size: 'xxl',
      css: {
        width: '$16',
        height: '$16',
        '& svg': {
          width: '$4',
          height: '$4',
        },
      },
    },
    {
      isIcon: true,
      size: 'xl',
      css: {
        width: '$12',
        height: '$12',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'lg',
      css: {
        width: '$10',
        height: '$10',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'md',
      css: {
        width: '$8',
        height: '$8',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'sm',
      css: {
        width: '$6',
        height: '$6',
        '& svg': {
          width: '10px',
          height: '10px',
        },
      },
    },
    {
      isIcon: true,
      size: 'xs',
      css: {
        width: '$5',
        height: '$5',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'xxs',
      css: {
        width: '$4',
        height: '$4',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});

const StyledSpan = styled('span', {});

export interface ButtonBaseProps {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  icon?: ReactElement;
  onClick?: () => void;
}

type ButtonProps = ButtonBaseProps &
  ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const Button:FunctionComponent<ButtonProps> = React.forwardRef(
  (
    {
      children, variant = 'primary', isIcon = false, icon, iconLeft, iconRight, isLoading, disabled, onClick, ...rest
    }: ButtonProps,
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        isIcon={isIcon}
        disabled={disabled}
        data-testid="button"
        onClick={onClick}
        {...rest}
      >
        {isLoading
          ? <DotLoader />
          : (
            <>
              {
              isIcon
                ? (
                  <>
                    { icon && React.cloneElement(icon)}
                  </>
                )
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
                )
            }
            </>
          )}
      </StyledButton>
    );
  },
);
