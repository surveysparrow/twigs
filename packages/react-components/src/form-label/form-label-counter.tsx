import { ReactNode } from 'react';
import { Flex } from '../flex';
import { InputProps } from '../input';
import { Text } from '../text';

export const FormLabelCounter = ({
  counterSideElement,
  showCount,
  mergedValue,
  maxLength,
  label,
  inputId
}: {
  showCount?: boolean;
  counterSideElement?: ReactNode;
  mergedValue?: InputProps['value'];
  maxLength?: number;
  label?: string;
  inputId?: string;
}) => {
  if (!showCount && !counterSideElement) return null;
  return (
    <FormLabelCounterWrapper
      hasCounterSideElement={!!counterSideElement}
      showCount={showCount}
    >
      {showCount && (
        <Text
          css={{
            color: '$neutral700',
            ...(!label ? { marginLeft: 'auto' } : {})
          }}
          id={`${inputId}-char-count`}
          data-testid="form-label-counter"
        >
          {mergedValue?.toString().length || 0}
          {maxLength ? `/${maxLength}` : null}
        </Text>
      )}
      {counterSideElement || null}
    </FormLabelCounterWrapper>
  );
};

const FormLabelCounterWrapper = ({
  children,
  showCount,
  hasCounterSideElement
}: {
  children: ReactNode;
  showCount?: boolean;
  hasCounterSideElement: boolean;
}) => {
  if (showCount && hasCounterSideElement) {
    return (
      <Flex gap="$4" alignItems="center">
        {children}
      </Flex>
    );
  }

  return <>{children}</>;
};
