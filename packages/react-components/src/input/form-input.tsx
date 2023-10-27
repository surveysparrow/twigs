import { forwardRef, FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { Text } from '../text';
import { Input, InputProps } from './input';

export type FormInputProps = {
  label?: string,
  showCount?: boolean,
  error?: string,
  errorBorder?:boolean;
} & InputProps;

const StyledError = styled(FormHelperText, {
  color: '$negative500 !important',
  marginTop: '$2'
});

export const FormInput: FunctionComponent<FormInputProps> = forwardRef(({
  label,
  showCount,
  value,
  error,
  defaultValue,
  maxLength,
  errorBorder = false,
  ...rest
}: FormInputProps, ref) => {
  const mergedValue = value || defaultValue;

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{ marginBottom: '$2' }}
      >
        {
          label
            ? <FormLabel htmlFor={rest.id}>{label}</FormLabel>
            : null
        }
        {
          showCount
            ? (
              <Text
                css={{
                  color: '$neutral700',
                  ...(!label ? { marginLeft: 'auto' } : {})
                }}
                data-testid="input-char-count"
              >
                {mergedValue?.toString().length || 0}
                {
                  maxLength ? `/${maxLength}` : null
                }
              </Text>
            )
            : null
        }
      </Flex>
      <Input
        value={value}
        defaultValue={defaultValue}
        {...(maxLength && {
          maxLength
        })}
        ref={ref}
        {...rest}
        css={{
          ...rest.css,
          ...(error && errorBorder && {
            boxShadow: '$colors$negative500 0px 1.5px 0px 0px',
            borderBottom: '0',
            '&:hover': {
              borderBottom: '0'
            },
            '&:focus,&:active': {
              $$shadowColor: '$colors$primary300',
              borderBottom: '0',
              boxShadow: '$colors$negative500 0px 1.5px 0px 0px,rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'

            }
          })
        }}
      />
      {
        error
          ? <StyledError size="xs">{error}</StyledError>
          : null
      }
    </Box>
  );
});
