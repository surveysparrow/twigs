import {
  forwardRef,
  FunctionComponent,
  ReactElement,
  ReactNode,
  useId,
  useMemo
} from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { styled } from '../stitches.config';
import { Input, InputProps } from './input';
import { Text } from '../text';

export type FormInputProps = {
  label?: string;
  showCount?: boolean;
  error?: string;
  requiredIndicator?: boolean | ReactElement;
  helperText?: string;
  info?: string | ReactNode;
  renderCounter?: ({
    length,
    maxLength
  }: {
    length: number;
    maxLength?: number;
  }) => ReactNode;
} & InputProps;

export const StyledError = styled(FormHelperText, {
  color: '$negative500 !important',
  marginTop: '$2'
});

const StyledHelper = styled(FormHelperText, {
  marginTop: '$2',
  variants: {
    color: {
      error: {
        color: '$negative500 !important'
      },
      info: {
        color: '$neutral700 !important'
      }
    }
  }
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
      helperText,
      id,
      renderCounter,
      ...rest
    }: FormInputProps,
    ref
  ) => {
    const mergedValue = value || defaultValue;
    const inputId = id || `form-input-${useId()}`;

    const labelSize = rest.size === 'xl' ? 'sm' : 'xs';

    const counterElement = useMemo(() => {
      if (!showCount) return null;

      if (renderCounter) {
        return renderCounter({
          length: mergedValue?.toString().length || 0,
          maxLength
        });
      }

      return (
        <Text
          css={{
            color: '$neutral700',
            ...(!label ? { marginLeft: 'auto' } : {})
          }}
          id={`${inputId}-char-count`}
          data-testid="form-input-char-count"
          size={labelSize}
        >
          {mergedValue?.toString().length || 0}
          {maxLength ? `/${maxLength}` : null}
        </Text>
      );
    }, [
      showCount,
      label,
      mergedValue,
      maxLength,
      inputId,
      labelSize,
      renderCounter
    ]);

    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          {...((showCount || label) && { css: { marginBottom: '$2' } })}
        >
          {(label || counterElement) && (
            <FormLabel
              as="label"
              htmlFor={inputId}
              requiredIndicator={requiredIndicator}
              id={`${inputId}-label`}
              info={info}
              rightAddon={counterElement}
              size={labelSize}
            >
              {label}
            </FormLabel>
          )}
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
        {error || helperText ? (
          <StyledHelper size="xs" color={error ? 'error' : 'info'}>
            {error || helperText}
          </StyledHelper>
        ) : null}
      </Box>
    );
  }
);
