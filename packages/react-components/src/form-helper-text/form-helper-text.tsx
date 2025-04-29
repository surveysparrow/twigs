import React, { ComponentProps, FunctionComponent } from 'react';
import { styled } from '../stitches.config';
import { Text } from '../text';

const StyledFormHelperText = styled(Text, {
  color: '$neutral700',
  fontWeight: '$4',
  variants: {
    color: {
      error: {
        color: '$negative500'
      },
      info: {
        color: '$neutral700'
      }
    }
  },
  defaultVariants: {
    color: 'info'
  }
});

export type FormHelperTextProps = ComponentProps<typeof StyledFormHelperText> & {
  as?: React.ElementType;
};

export const FormHelperText: FunctionComponent<FormHelperTextProps> = ({
  css,
  children,
  ...rest
}: FormHelperTextProps) => {
  return (
    <StyledFormHelperText
      size="xs"
      css={css}
      data-testid="helper-text"
      {...rest}
    >
      {children}
    </StyledFormHelperText>
  );
};
