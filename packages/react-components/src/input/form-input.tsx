import { forwardRef, FunctionComponent } from 'react';
import { styled } from '../../stitches.config';
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
} & InputProps;

const StyledError = styled(FormHelperText, {
  color: '$error500 !important',
  marginTop: '$2'
});

export const FormInput: FunctionComponent<FormInputProps> = forwardRef(({
  label,
  showCount,
  value,
  error,
  defaultValue,
  maxLength,
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
      />
      {
        error
          ? <StyledError size="xs">{error}</StyledError>
          : null
      }
    </Box>
  );
});
