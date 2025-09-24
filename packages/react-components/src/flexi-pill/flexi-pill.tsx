import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import clsx from 'clsx';
import { ScaleValue } from '@stitches/react';
import { config, keyframes, styled } from '../stitches.config';
import { FlexiPillSideElement } from './side-element';
import {
  FLEXI_PILL_CLASSNAMES,
  getLoaderIconSizeFromFlexiPillProps
} from './utils';

const loadingBlink = keyframes({
  '50%': {
    opacity: 0.6
  },
  '0%, 100%': {
    opacity: 1
  }
});

const StyledFlexiPill = styled('button', {
  appearance: 'none',
  border: 'none',
  background: 'transparent',
  fontSize: '$lg',
  fontWeight: '$4',
  lineHeight: '$md',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
    $$shadowColor: '$colors$primary200',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  [`&.${FLEXI_PILL_CLASSNAMES.loading} .${FLEXI_PILL_CLASSNAMES.content}`]: {
    animation: `${loadingBlink} 1.5s cubic-bezier(0.51, 0, 0, 1) infinite`
  },
  variants: {
    weight: {
      regular: {
        fontWeight: '$4'
      },
      bold: {
        fontWeight: '$7'
      }
    },
    size: {
      lg: {
        padding: '$4 $8',
        borderRadius: '$lg',
        fontSize: '$md',
        lineHeight: '$md',
        height: '$10',
        [`& .${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
          width: '$5',
          height: '$5'
        }
      },
      md: {
        padding: '$3 $6',
        borderRadius: '$lg',
        fontSize: '$sm',
        lineHeight: '$md',
        height: '$8',
        [`& .${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
          width: '$5',
          height: '$5'
        }
      },
      sm: {
        padding: '$2 $4',
        borderRadius: '$sm',
        fontSize: '$sm',
        // fontWeight: '$5',
        lineHeight: '$sm',
        height: '$7',
        [`& .${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
          width: '$4',
          height: '$4'
        }
      }
    },
    variant: {
      solid: {
        backgroundColorOpacity: ['$secondary500', 0.08],
        color: '$neutral800',
        '&:hover:not(:disabled), &:focus': {
          backgroundColorOpacity: ['$secondary500', 0.15]
        },
        [`&:active:not(:disabled), &.${FLEXI_PILL_CLASSNAMES.loading}`]: {
          backgroundColorOpacity: ['$secondary500', 0.2],
          color: '$neutral900'
        }
      },
      ghost: {
        color: '$neutral800',
        background: 'transparent',
        '&:hover:not(:disabled), &:focus': {
          backgroundColorOpacity: ['$secondary500', 0.08]
        },
        [`&:active:not(:disabled), &.${FLEXI_PILL_CLASSNAMES.loading}`]: {
          color: '$neutral900',
          backgroundColorOpacity: ['$secondary500', 0.15]
        }
      },
      outline: {
        borderWidth: '$xs',
        color: '$neutral800',
        background: '$white900',
        borderColor: '$black300',
        borderStyle: 'solid',
        '&:hover:not(:disabled), &:focus': {
          borderColor: '$black400',
          backgroundColorOpacity: ['$secondary500', 0.04]
        },
        [`&:active:not(:disabled), &.${FLEXI_PILL_CLASSNAMES.loading}`]: {
          borderColor: '$black500',
          backgroundColorOpacity: ['$secondary500', 0.06]
        }
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
      true: {}
    },
    isRightIcon: {
      true: {}
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
      isIcon: true,
      size: 'lg',
      css: {
        width: '$10',
        height: '$10',
        [`& .${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
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
        [`& .${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
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
        [`& .${FLEXI_PILL_CLASSNAMES.iconBox}`]: {
          width: '$4',
          height: '$4'
        }
      }
    },
    {
      isLeftIcon: true,
      size: 'lg',
      css: {
        paddingLeft: '$6'
      }
    },
    {
      isLeftIcon: true,
      size: 'md',
      css: {
        paddingLeft: '$4'
      }
    },
    {
      isLeftIcon: true,
      size: 'sm',
      css: {
        paddingLeft: '$3'
      }
    },
    {
      isRightIcon: true,
      size: 'lg',
      css: {
        paddingRight: '$6'
      }
    },
    {
      isRightIcon: true,
      size: 'md',
      css: {
        paddingRight: '$4'
      }
    },
    {
      isRightIcon: true,
      size: 'sm',
      css: {
        paddingRight: '$3'
      }
    }
  ],
  defaultVariants: {
    size: 'sm',
    variant: 'solid'
  }
});

export interface FlexiPillBaseProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  icon?: ReactElement;
  loading?: boolean;
  disabled?: boolean;
  loader?: ReactElement | 'line' | 'circle';
}

export type FlexiPillProps = FlexiPillBaseProps &
  ComponentProps<typeof StyledFlexiPill> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const FlexiPill: FunctionComponent<FlexiPillProps> = React.forwardRef(
  (
    {
      children,
      className,
      icon,
      leftIcon,
      rightIcon,
      loading,
      disabled,
      loader,
      onClick,
      ...rest
    }: FlexiPillProps,
    ref
  ) => {
    const hasNoIcon = !(leftIcon || rightIcon || icon);
    let flexiPillLoaderMargin: ScaleValue<'space', typeof config> = '$2';

    if (rest.size as Extract<FlexiPillProps['size'], string> === 'sm') {
      flexiPillLoaderMargin = '$1';
    }

    const { size: loaderSize, ...loaderCSS } = getLoaderIconSizeFromFlexiPillProps(
      {
        flexiPillSize: rest.size,
        loaderType: loader
      }
    );

    return (
      <StyledFlexiPill
        type="flexiPill"
        ref={ref}
        isIcon={!!icon}
        isLeftIcon={!!leftIcon}
        isRightIcon={!!rightIcon}
        disabled={disabled}
        data-testid="flexiPill"
        onClick={onClick}
        className={clsx(className, FLEXI_PILL_CLASSNAMES.flexiPill, {
          [`${FLEXI_PILL_CLASSNAMES.loading}`]: !!loading,
          [`${FLEXI_PILL_CLASSNAMES.disabled}`]: disabled
        })}
        {...rest}
      >
        {icon && (
          <FlexiPillSideElement
            icon={icon}
            loaderSize={loaderSize}
            loaderCSS={loaderCSS}
            loading={!!loading}
            loader={loader}
            loaderColor="secondary"
          />
        )}

        {(leftIcon || hasNoIcon) && (
          <FlexiPillSideElement
            icon={hasNoIcon ? undefined : leftIcon}
            loaderSize={loaderSize}
            loaderCSS={loaderCSS}
            loading={!!loading}
            loader={loader}
            loaderColor="secondary"
            containerStyle={{
              marginRight: hasNoIcon && !loading ? '0' : flexiPillLoaderMargin
            }}
          />
        )}

        <span className={FLEXI_PILL_CLASSNAMES.content}>{children}</span>

        {rightIcon && (
          <FlexiPillSideElement
            icon={rightIcon}
            loaderSize={loaderSize}
            loaderCSS={loaderCSS}
            loading={!!loading}
            loaderColor="secondary"
            containerStyle={{
              marginLeft: flexiPillLoaderMargin
            }}
            loader={loader}
          />
        )}
      </StyledFlexiPill>
    );
  }
);
