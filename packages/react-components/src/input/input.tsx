import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { Box } from '../box';
import { styled } from '../stitches.config';

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
    borderColorOpacity: ['$secondary500', 0.4]
  },
  '&:focus, &:active:not(:disabled)': {
    $$shadowColor: '$colors$primary300',
    outline: 'none',
    background: '$white900',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&:disabled': {
    color: '$neutral700',
    backgroundColorOpacity: ['$neutral500', 0.06],
    cursor: 'not-allowed',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColorOpacity: ['$neutral500', 0.25],
    '&:hover': {
      boxShadow: 'none'
    }
  },
  variants: {
    size: {
      xl: {
        height: '$12',
        borderRadius: '$lg',
        padding: '$6',
        fontSize: '$md'
      },
      lg: {
        height: '$10',
        borderRadius: '$lg',
        padding: '$5 $6',
        fontSize: '$sm'
      },
      md: {
        height: '$8',
        borderRadius: '$md',
        padding: '$3 $4',
        fontSize: '$sm'
      },
      sm: {
        height: '$6',
        borderRadius: '$md',
        padding: '$3 $4',
        fontSize: '$xs'
      }
    },
    variant: {
      default: {
        background: '$white900',
        borderWidth: '$xs',
        borderStyle: 'solid',
        borderColor: '$neutral200',
        '&:hover:not(:disabled), &:focus, &:active:not(:disabled)': {
          borderWidth: '$xs',
          borderStyle: 'solid',
          borderColor: '$neutral300'
        }
      },
      filled: {
        background: '$black50'
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
        width: '$6',
        height: '$6',
        '& svg': {
          width: 18,
          height: 18
        }
      },
      lg: {
        width: '$6',
        height: '$6',
        '& svg': {
          width: 18,
          height: 18
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
        width: '$3',
        height: '$3',
        '& svg': {
          width: '$3',
          height: '$3'
        }
      }
    }
  }
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
  boxShadow: '$colors$negative500 0px 1.5px 0px 0px',
  borderBottom: '0',
  '&:hover': {
    borderBottom: '0'
  },
  '&:focus,&:active': {
    $$shadowColor: '$colors$primary300',
    borderBottom: '0',
    boxShadow:
      '$colors$negative500 0px 1.5px 0px 0px,rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
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
        >
          {leftIcon && (
            <IconContainer
              size={size}
              css={{
                left: size === 'md' ? '$4' : '$6'
              }}
            >
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
          />
          {rightIcon && (
            <IconContainer
              size={size}
              css={{
                right: size === 'md' ? '$4' : '$6'
              }}
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
