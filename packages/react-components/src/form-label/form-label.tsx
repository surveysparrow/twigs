import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentProps } from '@stitches/react';
import React, { ReactElement, forwardRef, isValidElement } from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { Text } from '../text';

export type FormLabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  as?: React.ElementType;
  requiredIndicator?: ReactElement | boolean;
  containerRef?: React.Ref<HTMLDivElement>;
};

const StyledFormLabel = styled(LabelPrimitive.Root, {
  display: 'block',
  color: '$neutral800',
  fontWeight: '$4',
  userSelect: 'none',
  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs'
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledText = styled(Text, {
  color: '$negative600',
  paddingTop: '$1'
});

// FormLabelProps & ComponentProps<typeof StyledFormLabel>
export const FormLabel = forwardRef<
  HTMLLabelElement,
  FormLabelProps & ComponentProps<typeof StyledFormLabel>
>(({
  children, requiredIndicator = false, as, containerRef, ...rest
}, ref) => {
  if (
    !isValidElement(requiredIndicator)
    && typeof requiredIndicator !== 'boolean'
  ) {
    throw Error('requiredIndicator is not a valid component');
  }
  return (
    <Flex gap="$1" ref={containerRef}>
      <StyledFormLabel as={as} {...rest} ref={ref}>
        {children}
      </StyledFormLabel>
      {requiredIndicator === true ? (
        <StyledText data-testid="label-required-indicator">*</StyledText>
      ) : null}
      {typeof requiredIndicator !== 'boolean'
        ? React.cloneElement(requiredIndicator)
        : null}
    </Flex>
  );
});
