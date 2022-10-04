import React, { FunctionComponent } from 'react';
import { Text, TextProps } from '../text';

export type FormLabelProps = TextProps &
  React.HTMLAttributes<HTMLLabelElement> & {
    as?: React.ElementType
 };

export const FormLabel: FunctionComponent<FormLabelProps> = ({
  css,
  children,
  ...rest
}: FormLabelProps) => {
  return (
    <Text
      as="label"
      css={{
        display: 'inline-block',
        color: '$neutral700',
        fontWeight: '$4',
        userSelect: 'none',
        ...css
      }}
      data-testid="form-label"
      {...rest}
    >
      {children}
    </Text>
  );
};
