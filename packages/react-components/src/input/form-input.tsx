import {
  forwardRef, FunctionComponent, ReactElement, useId
} from 'react';
import { styled } from '../stitches.config';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { Text } from '../text';
import { Input, InputProps } from './input';

export type FormInputProps = {
  label?: string;
  showCount?: boolean;
  error?: string;
  requiredIndicator?: boolean | ReactElement;
} & InputProps;

export const StyledError = styled(FormHelperText, {
  color: '$negative500 !important',
  marginTop: '$2'
});

export const FormInput: FunctionComponent<FormInputProps> = forwardRef(
  (
    {
      label,
      showCount,
      value,
      error,
      defaultValue,
      maxLength,
      requiredIndicator,
      id,
      ...rest
    }: FormInputProps,
    ref
  ) => {
    const mergedValue = value || defaultValue;
    const inputId = id || `form-input-${useId()}`;

    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          {...((showCount || label) && { css: { marginBottom: '$2' } })}
        >
          {label ? (
            <FormLabel
              as="label"
              htmlFor={inputId}
              requiredIndicator={requiredIndicator}
              id={`${inputId}-label`}
            >
              {label}
            </FormLabel>
          ) : null}
          {showCount ? (
            <Text
              css={{
                color: '$neutral700',
                ...(!label ? { marginLeft: 'auto' } : {})
              }}
              id={`${inputId}-char-count`}
            >
              {mergedValue?.toString().length || 0}
              {maxLength ? `/${maxLength}` : null}
            </Text>
          ) : null}
        </Flex>
        <Input
          value={value}
          defaultValue={defaultValue}
          {...(maxLength && {
            maxLength
          })}
          ref={ref}
          id={inputId}
          {...rest}
        />
        {error ? <StyledError size="xs">{error}</StyledError> : null}
      </Box>
    );
  }
);
