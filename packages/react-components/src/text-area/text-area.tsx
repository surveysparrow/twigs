import React, { ComponentProps } from 'react';
import { styled } from '../stitches.config';
import { errorBorderStyles } from '../input';

const StyledTextArea = styled('textarea', {
  width: '100%',
  color: '$neutral900',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: 'transparent',
  transition: 'all $transitions$2',
  '&::placeholder': {
    color: '$neutral500'
  },
  '&:hover, &:focus, &:active': {
    background: '$white900',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColorOpacity: ['$secondary500', 0.4]
  },
  '&:focus, &:active': {
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
  borderRadius: '$md',
  padding: '$6',
  variants: {
    resize: {
      horizontal: {
        resize: 'horizontal'
      },
      vertical: {
        resize: 'vertical'
      },
      both: {
        resize: 'both'
      },
      none: {
        resize: 'none'
      }
    },
    size: {

    },
    variant: {
      default: {
        background: '$white900',
        borderWidth: '$xs',
        borderStyle: 'solid',
        borderColor: '$neutral200',
        '&:hover, &:focus, &:active': {
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
    resize: 'both',
    variant: 'default'
  }
});

interface TextAreaBaseProps {
  resize?: 'horizontal' | 'vertical' | 'both' | 'none';
  variant?: 'default' | 'filled';
  errorBorder?: boolean;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => void;
}

export type TextAreaProps = TextAreaBaseProps &
  ComponentProps<typeof StyledTextArea>;

export const TextArea = ({
  resize = 'both', variant = 'default', errorBorder = false, css, ...rest
}: TextAreaProps) => {
  return (
    <StyledTextArea
      css={{
        ...(errorBorder && {
          ...errorBorderStyles
        }),
        ...css
      }}
      resize={resize}
      variant={variant}
      {...rest}
    />
  );
};
