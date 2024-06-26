import React, {
  ReactElement, FunctionComponent, ComponentProps
} from 'react';
import clsx from 'clsx';
import { ScaleValue } from '@stitches/react';
import { config, keyframes, styled } from '../stitches.config';
import { ButtonSideElement } from './side-element';
import {
  getLoaderIconSizeFromButtonProps,
  getLoaderVariantFromButtonVariant
} from './utils';
import { prefixClassName } from '../utils';

const loadingBlink = keyframes({
  '50%': {
    opacity: 0.6
  },
  '0%, 100%': {
    opacity: 1
  }
});

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'none',
  background: 'transparent',
  fontSize: '$lg',
  lineHeight: '$md',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$7',
  cursor: 'pointer',
  transition: 'all $transitions$2',
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed'
  },
  '&:active:hover': {
    opacity: '0.8'
  },
  '&:focus, &:active': {
    outline: 'none'
  },
  '&:focus-visible': {
    $$shadowColor: '$colors$primary300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  [`&.${prefixClassName('button--loading')} .${prefixClassName(
    'button__content'
  )}`]: {
    animation: `${loadingBlink} 1.5s cubic-bezier(0.51, 0, 0, 1) infinite`
  },
  variants: {
    size: {
      '2xl': {
        padding: '$9 $12',
        borderRadius: '$2xl',
        fontSize: '$lg',
        lineHeight: '$lg',
        height: '$16',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$6',
          height: '$6'
        }
      },
      xl: {
        padding: '$5 $10',
        borderRadius: '$xl',
        fontSize: '$lg',
        lineHeight: '$lg',
        height: '$12',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$6',
          height: '$6'
        }
      },
      lg: {
        padding: '$4 $8',
        borderRadius: '$xl',
        fontSize: '$md',
        lineHeight: '$md',
        height: '$10',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$5',
          height: '$5'
        }
      },
      md: {
        padding: '$3 $5',
        borderRadius: '$lg',
        fontSize: '$sm',
        lineHeight: '$md',
        height: '$8',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$5',
          height: '$5'
        }
      },
      sm: {
        padding: '$1 $4',
        borderRadius: '$sm',
        fontSize: '$sm',
        lineHeight: '$sm',
        height: '$6',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$4',
          height: '$4'
        }
      },
      xs: {
        padding: '$1 $3',
        borderRadius: '$sm',
        fontSize: '$xs',
        lineHeight: '$xs',
        height: '$5',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$2',
          height: '$2'
        }
      },
      xxs: {
        padding: '$1 $2',
        borderRadius: '$sm',
        fontSize: '$xxs',
        lineHeight: '$xxs',
        height: '$4',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$2',
          height: '$2'
        }
      }
    },
    color: {
      default: {
        backgroundColorOpacity: ['$secondary500', 0.08],
        color: '$secondary500',
        [`&:hover:not(:disabled), &:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          color: '$secondary600',
          backgroundColorOpacity: ['$secondary500', 0.08]
        },
        '&:focus': {
          color: '$secondary600'
        }
      },
      primary: {
        background: '$primary400',
        color: '$white900',
        '&:hover:not(:disabled), &:focus': {
          background: '$primary500'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          background: '$primary700'
        }
      },
      secondary: {
        background: '$secondary500',
        color: '$white900',
        '&:hover:not(:disabled), &:focus': {
          background: '$secondary600'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          background: '$secondary800'
        }
      },
      bright: {
        background: '$white900',
        color: '$secondary500',
        '&:hover:not(:disabled), &:focus': {
          color: '$secondary600',
          background: '$neutral50'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          color: '$secondary600',
          background: '$neutral100'
        }
      },
      light: {
        backgroundColorOpacity: ['$white200', 0.1],
        color: '$white900',
        '&:hover:not(:disabled), &:focus': {
          background: '$white300'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          background: '$white400'
        }
      },
      error: {
        background: '$negative100',
        color: '$negative600',
        '&:hover:not(:disabled)': {
          background: '$negative200'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          background: '$negative300'
        }
      }
    },
    variant: {
      solid: {
        unset: 'none'
      },
      ghost: {
        background: 'transparent'
      },
      outline: {
        background: '$white900'
      }
    },
    loading: {
      true: {
        pointerEvents: 'none'
      }
    },
    isIcon: {
      true: {
        justifyContent: 'center',
        width: '$10',
        height: '$10'
      }
    },
    isLeftIcon: {
      true: {
      }
    },
    isRightIcon: {
      true: {
      }
    }
  },
  compoundVariants: [
    {
      isIcon: true,
      css: {
        padding: 0
      }
    },
    {
      variant: 'outline',
      size: 'xxs',
      css: {
        borderWidth: '$xs'
      }
    },
    {
      variant: 'outline',
      size: 'xs',
      css: {
        borderWidth: '$xs'
      }
    },
    {
      variant: 'outline',
      size: 'sm',
      css: {
        borderWidth: '$xs'
      }
    },
    {
      variant: 'outline',
      size: 'md',
      css: {
        borderWidth: '1.5px'
      }
    },
    {
      variant: 'outline',
      size: 'lg',
      css: {
        borderWidth: '$sm'
      }
    },
    {
      variant: 'outline',
      size: 'xl',
      css: {
        borderWidth: '$sm'
      }
    },
    {
      variant: 'outline',
      size: '2xl',
      css: {
        borderWidth: '$sm'
      }
    },
    {
      color: 'primary',
      variant: 'ghost',
      css: {
        background: 'transparent',
        color: '$primary500',
        '&:focus': {
          backgroundColorOpacity: ['$primary500', 0.06]
        },
        '&:hover:not(:disabled)': {
          backgroundColorOpacity: ['$primary500', 0.08]
        },
        '&:hover:not(:disabled), &:focus': {
          color: '$primary700'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          color: '$primary800',
          backgroundColorOpacity: ['$primary500', 0.15]
        }
      }
    },
    {
      color: 'primary',
      variant: 'outline',
      css: {
        color: '$primary500',
        borderColorOpacity: ['$primary500', 0.4],
        borderStyle: 'solid',
        '&:hover:not(:disabled), &:focus': {
          borderColorOpacity: ['$primary500', 0.8],
          color: '$primary600',
          background: '$white900'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          borderColorOpacity: ['$primary500', 0.9],
          color: '$primary700',
          background: '$white900'
        }
      }
    },
    {
      color: 'secondary',
      variant: 'ghost',
      css: {
        background: 'transparent',
        color: '$secondary500',
        '&:hover:not(:disabled), &:focus': {
          color: '$secondary600',
          backgroundColorOpacity: ['$secondary500', 0.08]
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          color: '$secondary700',
          backgroundColorOpacity: ['$secondary500', 0.15]
        }
      }
    },
    {
      color: 'secondary',
      variant: 'outline',
      css: {
        color: '$secondary500',
        background: '$white900',
        borderColorOpacity: ['$secondary400', 0.2],
        borderStyle: 'solid',
        '&:hover:not(:disabled), &:focus': {
          borderColorOpacity: ['$secondary600', 0.4],
          color: '$secondary600',
          background: '$white900'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          borderColorOpacity: ['$secondary800', 0.8],
          color: '$secondary800',
          background: '$white900'
        }
      }
    },
    {
      color: 'light',
      variant: 'outline',
      css: {
        background: 'transparent',
        borderColorOpacity: ['$white400', 0.2],
        borderStyle: 'solid',
        color: '$white900',
        '&:hover:not(:disabled), &:focus': {
          background: 'transparent',
          borderColorOpacity: ['$white500', 0.3]
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          background: 'transparent',
          borderColorOpacity: ['$white700', 0.7]
        }
      }
    },
    {
      color: 'default',
      variant: 'ghost',
      css: {
        background: 'transparent',
        color: '$neutral800',
        '&:hover:not(:disabled), &:focus, &:active:not(:disabled)': {
          color: '$neutral900'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          backgroundColorOpacity: ['$black500', 0.08]
        },
        '&:hover:not(:disabled), &:focus': {
          backgroundColorOpacity: ['$black500', 0.04]
        }
      }
    },
    {
      color: 'light',
      variant: 'ghost',
      css: {
        background: 'transparent',
        color: '$white900',
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          backgroundColorOpacity: ['$white400', 0.2]
        },
        '&:hover:not(:disabled), &:focus': {
          backgroundColorOpacity: ['$white300', 0.15]
        }
      }
    },
    {
      color: 'error',
      variant: 'ghost',
      css: {
        color: '$negative600',
        background: 'transparent',
        '&:hover:not(:disabled), &:focus': {
          background: '$negative100'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          background: '$negative200'
        }
      }
    },
    {
      color: 'error',
      variant: 'outline',
      css: {
        color: '$negative600',
        background: '$white900',
        borderColor: '$negative200',
        borderStyle: 'solid',
        '&:hover:not(:disabled), &:focus': {
          borderColor: '$negative300',
          color: '$negative700',
          background: '$white900'
        },
        [`&:active:not(:disabled), &.${prefixClassName('button--loading')}`]: {
          borderColor: '$negative600',
          color: '$negative800',
          background: '$white900'
        }
      }
    },
    {
      isIcon: true,
      size: '2xl',
      css: {
        width: '$16',
        height: '$16',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$8',
          height: '$8'
        }
      }
    },
    {
      isIcon: true,
      size: 'xl',
      css: {
        width: '$12',
        height: '$12',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$8',
          height: '$8'
        }
      }
    },
    {
      isIcon: true,
      size: 'lg',
      css: {
        width: '$10',
        height: '$10',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$6',
          height: '$6'
        }
      }
    },
    {
      isIcon: true,
      size: 'md',
      css: {
        width: '$8',
        height: '$8',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$5',
          height: '$5'
        }
      }
    },
    {
      isIcon: true,
      size: 'sm',
      css: {
        width: '$6',
        height: '$6',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$4',
          height: '$4'
        }
      }
    },
    {
      isIcon: true,
      size: 'xs',
      css: {
        width: '$5',
        height: '$5',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$3',
          height: '$3'
        }
      }
    },
    {
      isIcon: true,
      size: 'xxs',
      css: {
        width: '$4',
        height: '$4',
        [`& .${prefixClassName('button__icon-container > *')}`]: {
          width: '$2',
          height: '$2'
        }
      }
    },
    {
      isLeftIcon: true,
      size: '2xl',
      css: {
        padding: '$9 $12 $9 $10'
      }
    },
    {
      isLeftIcon: true,
      size: 'xl',
      css: {
        padding: '$5 $10 $5 $8'
      }
    },
    {
      isLeftIcon: true,
      size: 'lg',
      css: {
        padding: '$4 $8 $4 $6'
      }
    },
    {
      isLeftIcon: true,
      size: 'md',
      css: {
        padding: '$3 $5 $3 $4'
      }
    },
    {
      isLeftIcon: true,
      size: 'sm',
      css: {
        padding: '$1 $4 $1 $3'
      }
    },
    {
      isLeftIcon: true,
      size: 'xs',
      css: {
        padding: '$1 $3 $1 $2'
      }
    },
    {
      isLeftIcon: true,
      size: 'xxs',
      css: {
        padding: '1px $2 1px $1'
      }
    },
    {
      isRightIcon: true,
      size: '2xl',
      css: {
        padding: '$9 $10 $9 $12'
      }
    },
    {
      isRightIcon: true,
      size: 'xl',
      css: {
        padding: '$5 $8 $5 $10'
      }
    },
    {
      isRightIcon: true,
      size: 'lg',
      css: {
        padding: '$4 $6 $4 $8'
      }
    },
    {
      isRightIcon: true,
      size: 'md',
      css: {
        padding: '$3 $4 $3 $5'
      }
    },
    {
      isRightIcon: true,
      size: 'sm',
      css: {
        padding: '$1 $3 $1 $4'
      }
    },
    {
      isRightIcon: true,
      size: 'xs',
      css: {
        padding: '$1 $2 $1 $3'
      }
    },
    {
      isRightIcon: true,
      size: 'xxs',
      css: {
        padding: '1px $1 1px $2'
      }
    }
  ],
  defaultVariants: {
    color: 'default',
    size: 'sm',
    variant: 'solid'
  }
});

export interface ButtonBaseProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  icon?: ReactElement;
  loading?: boolean;
  disabled?: boolean;
  loader?: ReactElement | 'line' | 'circle';
}

export type ButtonProps = ButtonBaseProps &
  ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const Button: FunctionComponent<ButtonProps> = React.forwardRef(
  (
    {
      children,
      className,
      color = 'primary',
      icon,
      leftIcon,
      rightIcon,
      loading,
      disabled,
      loader,
      onClick,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const hasNoIcon = !(leftIcon || rightIcon || icon);
    let buttonLoaderMargin: ScaleValue<'space', typeof config> = '$4';

    if (['lg', 'xl'].includes(rest.size as Extract<ButtonProps['size'], string>)) {
      buttonLoaderMargin = '$5';
    } else if (['xxs', 'xs', 'sm', 'md'].includes(rest.size as Extract<ButtonProps['size'], string>)) {
      buttonLoaderMargin = '$1';
    }

    const { size: loaderSize, ...loaderCSS } = getLoaderIconSizeFromButtonProps({
      buttonSize: rest.size,
      loaderType: loader
    });
    const loaderColor = getLoaderVariantFromButtonVariant({
      variant: rest.variant ?? 'solid',
      color
    });

    return (
      <StyledButton
        type="button"
        ref={ref}
        color={color}
        isIcon={!!icon}
        isLeftIcon={!!leftIcon}
        isRightIcon={!!rightIcon}
        disabled={disabled}
        data-testid="button"
        onClick={onClick}
        className={clsx(className, {
          [`${prefixClassName('button--loading')}`]: !!loading,
          [`${prefixClassName('button--disabled')}`]: disabled
        })}
        {...rest}
      >
        {icon && (
          <ButtonSideElement
            icon={icon}
            loaderSize={loaderSize}
            loaderCSS={loaderCSS}
            loading={!!loading}
            loader={loader}
            loaderColor={loaderColor}
          />
        )}

        {(leftIcon || hasNoIcon) && (
          <ButtonSideElement
            icon={hasNoIcon ? undefined : leftIcon}
            loaderSize={loaderSize}
            loaderCSS={loaderCSS}
            loading={!!loading}
            loader={loader}
            loaderColor={loaderColor}
            containerStyle={{
              marginRight: hasNoIcon && !loading ? '0' : buttonLoaderMargin
            }}
          />
        )}

        <span className={`${prefixClassName('button__content')}`}>
          {children}
        </span>

        {rightIcon && (
          <ButtonSideElement
            icon={rightIcon}
            loaderSize={loaderSize}
            loaderCSS={loaderCSS}
            loading={!!loading}
            loaderColor={loaderColor}
            containerStyle={{
              marginLeft: buttonLoaderMargin
            }}
            loader={loader}
          />
        )}
      </StyledButton>
    );
  }
);
