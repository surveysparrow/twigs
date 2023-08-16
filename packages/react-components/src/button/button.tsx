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
  '&:focus, &:active': {
    outline: 'none'
  },
  '&:focus-visible': {
    $$shadowColor: '$colors$primary300',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  variants: {
    size: {
      '2xl': {
        padding: '$9 $12',
        borderRadius: '$2xl',
        fontSize: '$lg',
        lineHeight: '$lg',
        height: '$16',
        '& svg': {
          width: '$6',
          height: '$6'
        }
      },
      xl: {
        padding: '$5 $10',
        borderRadius: 10,
        fontSize: '$lg',
        lineHeight: '$lg',
        height: '$12',
        '& svg': {
          width: '$6',
          height: '$6'
        }
      },
      lg: {
        padding: '$4 $8',
        borderRadius: 10,
        fontSize: '$md',
        lineHeight: '$md',
        height: '$10',
        '& svg': {
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
        '& svg': {
          width: '$5',
          height: '$5'
        }
      },
      sm: {
        padding: '$1 $4',
        borderRadius: '$md',
        fontSize: '$sm',
        lineHeight: '$sm',
        height: '$6',
        '& svg': {
          width: '$4',
          height: '$4'
        }
      },
      xs: {
        padding: '$1 $3',
        borderRadius: '$md',
        fontSize: '$xs',
        lineHeight: '$xs',
        height: '$5',
        '& svg': {
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
        '& svg': {
          width: '$2',
          height: '$2'
        }
      }
    },
    color: {
      default: {
        backgroundColorOpacity: ['$secondary500', 0.08],
        color: '$secondary500',
        '&:hover, &:active': {
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
        '&:hover, &:focus': {
          background: '$primary500'
        },
        '&:active': {
          background: '$primary700'
        }
      },
      secondary: {
        background: '$secondary500',
        color: '$white900',
        '&:hover, &:focus': {
          background: '$secondary600'
        },
        '&:active': {
          background: '$secondary800'
        }
      },
      bright: {
        background: '$white900',
        color: '$secondary500',
        '&:hover, &:focus': {
          color: '$secondary600',
          background: '$neutral50'
        },
        '&:active': {
          color: '$secondary600',
          background: '$neutral100'
        }
      },
      light: {
        background: '$white200',
        color: '$white900',
        '&:hover, &:focus': {
          background: '$white300'
        },
        '&:active': {
          background: '$white400'
        }
      },
      error: {
        background: '$error100',
        color: '$error600',
        '&:hover': {
          background: '$error200'
        },
        '&:active': {
          background: '$error300'
        }
      }
    },
    variant: {
      solid: {
        unset: 'none'
      },
      ghost: {
        background: 'transparent !important'
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
      color: 'primary',
      variant: 'ghost',
      css: {
        color: '$primary500',
        '&:focus': {
          backgroundColorOpacity: ['$primary500', 0.06]
        },
        '&:hover': {
          backgroundColorOpacity: ['$primary500', 0.08]
        },
        '&:hover, &:focus': {
          color: '$primary700'
        },
        '&:active': {
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
        borderWidth: '$xs',
        borderStyle: 'solid',
        '&:hover, &:focus': {
          borderColorOpacity: ['$primary500', 0.8],
          color: '$primary600',
          background: '$white900'
        },
        '&:active': {
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
        color: '$secondary500',
        '&:hover, &:focus': {
          color: '$secondary600',
          backgroundColorOpacity: ['$secondary500', 0.08]
        },
        '&:active': {
          color: '$secondary700',
          backgroundColorOpacity: ['$secondary500', 0.15]
        }
      }
    },
    {
      color: 'default',
      variant: 'ghost',
      css: {
        color: '$neutral800',
        '&:hover, &:focus, &:active': {
          color: '$neutral900'
        },
        '&:active': {
          backgroundColorOpacity: ['$black500', 0.08]
        },
        '&:hover, &:focus': {
          backgroundColorOpacity: ['$black500', 0.04]
        }
      }
    },
    {
      color: 'error',
      variant: 'ghost',
      css: {
        color: '$error600',
        '&:active': {
          background: '$error200'
        },
        '&:hover, &:focus': {
          background: '$error100'
        }
      }
    },
    {
      isIcon: true,
      size: '2xl',
      css: {
        width: '$16',
        height: '$16',
        '& svg': {
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
        '& svg': {
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
        '& svg': {
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
        '& svg': {
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
        '& svg': {
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
        '& svg': {
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
        '& svg': {
          width: '$2',
          height: '$2'
        }
      }
    }
  ],
  defaultVariants: {
    color: 'default',
    size: 'sm',
    variant: 'solid'
  }
});

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center'
});

export interface ButtonBaseProps {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  icon?: ReactElement;
  loading?: boolean,
  disabled?: boolean
}

type ButtonProps = ButtonBaseProps &
  ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const Button: FunctionComponent<ButtonProps> = React.forwardRef(
  (
    {
      children, color = 'primary', icon, iconLeft, iconRight, loading, disabled, onClick, ...rest
    }: ButtonProps,
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        color={color}
        isIcon={!!icon}
        disabled={disabled}
        data-testid="button"
        onClick={onClick}
        {...rest}
      >
        {loading
          ? <DotLoader />
          : (
            <>
              {icon && React.cloneElement(icon)}

              {iconLeft && (
                <StyledSpan css={{ marginRight: '$4' }}>
                  {React.cloneElement(iconLeft)}
                </StyledSpan>
              )}

              {children}

              {iconRight && (
                <StyledSpan css={{ marginLeft: '$4' }}>
                  {React.cloneElement(iconRight)}
                </StyledSpan>
              )}
            </>
          )}
      </StyledButton>
    );
  }
);
