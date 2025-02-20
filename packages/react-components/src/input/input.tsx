import { prefixClassName } from '@src/utils';
import clsx from 'clsx';
import React, { ComponentProps, FunctionComponent, ReactElement } from 'react';
import { Box } from '../box';
import { styled } from '../stitches.config';

const CLASSNAMES = {
  inputContainer: prefixClassName('input-container'),
  input: prefixClassName('input'),
  inputWithLeftIcon: prefixClassName('input--with-left-icon'),
  inputWithRightIcon: prefixClassName('input--with-right-icon')
};

const StyledInput = styled('input', {
  width: '100%',
  color: '$neutral900',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: 'transparent',
  transition: 'all $transitions$2',
  '&::placeholder': {
    color: '$neutral500'
  },
  '&:hover:not(:disabled), &:focus, &:active:not(:disabled)': {
    background: '$white900',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColor: '$neutral400'
  },
  '&:focus, &:active:not(:disabled)': {
    $$shadowColor: '$colors$primary200',
    outline: 'none',
    background: '$white900',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&:disabled': {
    color: '$neutral700',
    backgroundColorOpacity: ['$secondary500', 0.06],
    cursor: 'not-allowed',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColor: '$neutral200',
    opacity: 0.6,

    '&:hover': {
      boxShadow: 'none'
    }
  },
  variants: {
    size: {
      xl: {
        height: '$12',
        borderRadius: '$xl',
        padding: '$6',
        fontSize: '$md',

        [`&.${CLASSNAMES.inputWithLeftIcon}`]: {
          paddingInlineStart: '$18'
        },

        [`&.${CLASSNAMES.inputWithRightIcon}`]: {
          paddingInlineEnd: '$18'
        }
      },
      lg: {
        height: '$10',
        borderRadius: '$lg',
        padding: '$5 $6',
        fontSize: '$sm',

        [`&.${CLASSNAMES.inputWithLeftIcon}`]: {
          paddingInlineStart: '$18'
        },

        [`&.${CLASSNAMES.inputWithRightIcon}`]: {
          paddingInlineEnd: '$18'
        }
      },
      md: {
        height: '$8',
        borderRadius: '$lg',
        padding: '$3 $4',
        fontSize: '$sm',

        [`&.${CLASSNAMES.inputWithLeftIcon}`]: {
          paddingInlineStart: '$14'
        },

        [`&.${CLASSNAMES.inputWithRightIcon}`]: {
          paddingInlineEnd: '$14'
        }
      },
      sm: {
        height: '$6',
        borderRadius: '$sm',
        padding: '$2 $4',
        fontSize: '$xs',

        [`&.${CLASSNAMES.inputWithLeftIcon}`]: {
          paddingInlineStart: '$13'
        },

        [`&.${CLASSNAMES.inputWithRightIcon}`]: {
          paddingInlineEnd: '$12'
        }
      }
    },
    variant: {
      default: {
        background: '$white900',
        borderWidth: '$xs',
        borderStyle: 'solid',
        borderColorOpacity: ['$black900', 0.15],
        '&:hover:not(:disabled), &:focus, &:active:not(:disabled)': {
          borderWidth: '$xs',
          borderStyle: 'solid',
          borderColor: '$neutral400'
        }
      },
      filled: {
        backgroundColorOpacity: ['$secondary500', 0.06]
      }
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default'
  }
});

function getInputPadding(
  size: string | { '@initial'?: 'sm' | 'md' | 'lg' | 'xl' }
) {
  switch (size) {
    case 'lg':
      return '$20';
    case 'md':
      return '$14';
    case 'sm':
      return '$14';
    default:
      return '$22';
  }
}

export interface InputBaseProps {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  rightElement?: ReactElement;
  leftElement?: ReactElement;
  errorBorder?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>
  ) => void;
}

export type InputProps = InputBaseProps &
  ComponentProps<typeof StyledInput> &
  React.HTMLAttributes<HTMLInputElement> & {
    as?: React.ElementType;
  };

const IconContainer = styled(Box, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$neutral800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '2',
  pointerEvents: 'none',
  variants: {
    size: {
      xl: {
        width: '$5',
        height: '$5',
        '& svg': {
          width: '100%',
          height: '100%'
        }
      },
      lg: {
        width: '$5',
        height: '$5',
        '& svg': {
          width: '100%',
          height: '100%'
        }
      },
      md: {
        width: '$4',
        height: '$4',
        '& svg': {
          width: '$4',
          height: '$4'
        }
      },
      sm: {
        width: '14px',
        height: '14px',

        '& svg': {
          width: '14px',
          height: '14px'
        }
      }
    },
    position: {
      left: {},
      right: {}
    }
  },
  compoundVariants: [
    {
      position: 'left',
      size: 'sm',
      css: {
        left: '$4'
      }
    },
    {
      position: 'left',
      size: 'md',
      css: {
        left: '$4'
      }
    },
    {
      position: 'left',
      size: 'lg',
      css: {
        left: '$6'
      }
    },
    {
      position: 'left',
      size: 'xl',
      css: {
        left: '$6'
      }
    },
    {
      position: 'right',
      size: 'sm',
      css: {
        right: '$4'
      }
    },
    {
      position: 'right',
      size: 'md',
      css: {
        right: '$4'
      }
    },
    {
      position: 'right',
      size: 'lg',
      css: {
        right: '$6'
      }
    },
    {
      position: 'right',
      size: 'xl',
      css: {
        right: '$6'
      }
    }
  ]
});

const AddonContainer = styled(Box, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  variants: {
    position: {
      right: {
        right: 0
      },
      left: {
        left: 0
      }
    }
  }
});

export const errorBorderStyles = {
  boxShadow: '$colors$negative500 0px 1px 0px 0px',
  borderBottomWidth: '0',
  '&:not(:disabled):hover': {
    borderBottomWidth: '0'
  },
  '&:focus,&:active': {
    $$shadowColor: '$colors$primary200',
    borderBottom: '0',
    boxShadow:
      '$colors$negative500 0px 1px 0px 0px,rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  }
};

export const Input: FunctionComponent<InputProps> = React.forwardRef(
  (
    {
      size = 'md',
      leftIcon,
      rightIcon,
      css,
      rightElement,
      leftElement,
      errorBorder = false,
      ...rest
    }: InputProps,
    ref
  ) => {
    const inputPaddingValue = getInputPadding(size);
    if (leftIcon || rightIcon || rightElement || leftElement) {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            ...css
          }}
          className={CLASSNAMES.inputContainer}
        >
          {leftIcon && (
            <IconContainer size={size} position="left">
              {React.cloneElement(leftIcon)}
            </IconContainer>
          )}

          {leftElement && (
            <AddonContainer position="left">
              {React.cloneElement(leftElement)}
            </AddonContainer>
          )}

          <StyledInput
            ref={ref}
            size={size}
            data-testid="input"
            css={{
              ...(leftIcon && { paddingInlineStart: inputPaddingValue }),
              ...(rightIcon && { paddingInlineEnd: inputPaddingValue }),
              ...(errorBorder && {
                ...errorBorderStyles
              })
            }}
            {...rest}
            className={clsx(CLASSNAMES.input, rest.className, {
              [CLASSNAMES.inputWithLeftIcon]: !!leftIcon,
              [CLASSNAMES.inputWithRightIcon]: !!rightIcon
            })}
          />
          {rightIcon && (
            <IconContainer
              size={size}
              position="right"
            >
              {React.cloneElement(rightIcon)}
            </IconContainer>
          )}

          {rightElement && (
            <AddonContainer position="right">
              {React.cloneElement(rightElement)}
            </AddonContainer>
          )}
        </Box>
      );
    }
    return (
      <StyledInput
        ref={ref}
        size={size}
        data-testid="input"
        {...rest}
        css={{ ...css, ...(errorBorder && { ...errorBorderStyles }) }}
      />
    );
  }
);
