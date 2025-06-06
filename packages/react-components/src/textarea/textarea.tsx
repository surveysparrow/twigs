import React, {
  ComponentProps, ReactElement, forwardRef, FunctionComponent
} from 'react';
import { styled } from '../stitches.config';
import { StyledError, errorBorderStyles } from '../input';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormLabel } from '../form-label';
import { Text } from '../text/text';

const StyledTextarea = styled('textarea', {
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
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
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

interface TextareaBaseProps {
  label?: string;
  showCount?: boolean;
  error?: string;
  requiredIndicator?: boolean | ReactElement;
  errorBorder?: boolean;
}

export type TextareaProps = TextareaBaseProps & ComponentProps<typeof StyledTextarea>;

export const Textarea: FunctionComponent<TextareaProps> = forwardRef(
  ({
    resize = 'both', variant = 'default', errorBorder = false, label, showCount, error, maxLength, requiredIndicator, css, value, defaultValue, rows, ...rest
  }: TextareaProps, ref) => {
    const mergedValue = value || defaultValue;
    return (
      <Box>
        {label || showCount ? (
          <Flex alignItems="center" justifyContent="space-between" css={{ marginBottom: '$2' }}>
            {label ? (
              <FormLabel htmlFor={rest.id} requiredIndicator={requiredIndicator}>
                {label}
              </FormLabel>
            ) : null}
            {showCount ? (
              <Text
                css={{
                  color: '$neutral700',
                  ...(!label ? { marginLeft: 'auto' } : {})
                }}
                data-testid="textarea-char-count"
              >
                {mergedValue?.toString().length || 0}
                {maxLength ? `/${maxLength}` : null}
              </Text>
            ) : null}
          </Flex>
        ) : null}
        <StyledTextarea
          value={value}
          defaultValue={defaultValue}
          rows={rows}
          css={{
            ...(errorBorder && {
              ...errorBorderStyles
            }),
            ...css
          }}
          {...(maxLength && {
            maxLength
          })}
          resize={resize}
          ref={ref}
          variant={variant}
          {...rest}
        />
        {error ? <StyledError size="xs">{error}</StyledError> : null}
      </Box>
    );
  }
);
