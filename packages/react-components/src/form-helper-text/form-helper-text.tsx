import React, { FunctionComponent } from 'react';
import { Text, TextProps } from '../text';

export type FormHelperTextProps = TextProps & {
    as?: React.ElementType
 };

export const FormHelperText: FunctionComponent<FormHelperTextProps> = ({
  css,
  children,
  ...rest
}: FormHelperTextProps) => {
  return (
    <Text size="xs" css={{ color: '$neutral700', fontWeight: '$4', ...css }} data-testid="helper-text" {...rest}>
      {children}
    </Text>
  );
};
