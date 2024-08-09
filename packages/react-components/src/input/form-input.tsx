import {
  forwardRef,
  FunctionComponent,
  ReactElement,
  ReactNode,
  useId
} from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { FormLabelCounter } from '../form-label/form-label-counter';
import { styled } from '../stitches.config';
import { Input, InputProps } from './input';

export type FormInputProps = {
  label?: string;
  showCount?: boolean;
  error?: string;
  requiredIndicator?: boolean | ReactElement;
  counterSideElement?: ReactNode;
  info?: string | ReactNode;
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
      info,
      defaultValue,
      maxLength,
      requiredIndicator,
      counterSideElement,
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
