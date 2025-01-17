import React, { FunctionComponent } from 'react';
import { Text, TextProps } from '../text';
import { styled } from '../stitches.config';

export type FormHelperTextProps = TextProps & {
  as?: React.ElementType;
};

export const FormHelperText: FunctionComponent<FormHelperTextProps> = ({
  css,
  children,
  ...rest
}: FormHelperTextProps) => {
  return (
    <Text
      size="xs"
      css={{ color: '$neutral700', fontWeight: '$4', ...css }}
      data-testid="helper-text"
      {...rest}
    >
      {children}
    </Text>
  );
};

export const FormInputHelperText = styled(FormHelperText, {
  marginTop: '$1',
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
