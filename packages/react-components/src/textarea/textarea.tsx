import {
  ComponentProps,
  FunctionComponent,
  ReactElement,
  ReactNode,
  forwardRef,
  useId
} from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormLabel } from '../form-label';
import { FormLabelCounter } from '../form-label/form-label-counter';
import { StyledError, errorBorderStyles } from '../input';
import { styled } from '../stitches.config';

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
    borderColor: '$neutral200',
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
      sm: {
        padding: '$2 $4',
        borderRadius: '$sm'
      },
      md: {
        padding: '$3 $4',
        borderRadius: '$lg'
      },
      lg: {
        padding: '$4 $6',
        borderRadius: '$lg'
      },
      xl: {
        padding: '$6',
        borderRadius: '$xl'
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
    resize: 'both',
    variant: 'default'
  }
});

interface TextareaBaseProps {
  label?: string;
  showCount?: boolean;
  error?: string;
  requiredIndicator?: boolean | ReactElement;
  counterSideElement?: ReactNode;
  errorBorder?: boolean;
  info?: string | ReactNode;
}

export type TextareaProps = TextareaBaseProps &
  ComponentProps<typeof StyledTextarea>;

export const Textarea: FunctionComponent<TextareaProps> = forwardRef(
  (
    {
      resize = 'both',
      variant = 'default',
      errorBorder = false,
      label,
      showCount,
      error,
      maxLength,
      requiredIndicator,
      counterSideElement,
      css,
      value,
      defaultValue,
      size,
      info,
      rows,
      id,
      ...rest
    }: TextareaProps,
    ref
  ) => {
    const inputId = id || `form-input-${useId()}`;
    const mergedValue = value || defaultValue;
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          css={{ marginBottom: '$2' }}
        >
          {label ? (
            <FormLabel
              size={size === 'xl' ? 'sm' : 'xs'}
              htmlFor={id}
              requiredIndicator={requiredIndicator}
              info={info}
            >
              {label}
            </FormLabel>
          ) : null}
          <FormLabelCounter
            counterSideElement={counterSideElement}
            inputId={inputId}
            label={label}
            maxLength={maxLength}
            mergedValue={mergedValue}
            showCount={showCount}
          />
        </Flex>
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
