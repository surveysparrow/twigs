import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { Box } from '../box';
import { styled } from '../../stitches.config';

const StyledInput = styled('input', {
  width: '100%',
  color: '$neutral900',
  background: '$black50',
  borderWidth: '$xs',
  borderStyle: 'solid',
  borderColor: 'transparent',
  transition: 'all $transitions$2',
  '&:hover, &:focus, &:active': {
    background: '$white900',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColor: '$neutral200',
  },
  '&:focus, &:active': {
    $$shadowColor: '$colors$system300',
    outline: 'none',
    background: '$white900',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  '&:disabled': {
    color: '$neutral700',
    background: '$black100',
    cursor: 'not-allowed',
    borderWidth: '$xs',
    borderStyle: 'solid',
    borderColor: '$neutral200',
    '&:hover': {
      background: '$black100',
      boxShadow: 'none',
    },
  },
  '&::placeholder': {
    color: '$neutral600',
  },
  variants: {
    size: {
      xl: {
        height: '$12',
        borderRadius: '$lg',
        padding: '$12',
        fontSize: '$md',
      },
      lg: {
        height: '$10',
        borderRadius: '$lg',
        padding: '$10 $12',
        fontSize: '$sm',
      },
      md: {
        height: '$8',
        borderRadius: '$md',
        padding: '$6 $8',
        fontSize: '$sm',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface InputBaseProps {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>) => void
}

export type InputProps = InputBaseProps & ComponentProps<typeof StyledInput> &
  React.HTMLAttributes<HTMLInputElement> & {
    as?: React.ElementType
 };

const IconContainer = styled(Box, {
  position: 'absolute',
  top: '0',
  height: '100%',
  color: '$neutral800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '2',
  pointerEvents: 'none',
  variants: {
    size: {
      xl: {
        width: '$11',
        '& svg': {
          width: 18,
          height: 18,
        },
      },
      lg: {
        width: '$9',
        '& svg': {
          width: 18,
          height: 18,
        },
      },
      md: {
        width: '$7',
        '& svg': {
          width: '$4',
          height: '$4',
        },
      },
    },
  },
});

export const Input: FunctionComponent<InputProps> = ({
  size = 'md',
  iconLeft,
  iconRight,
  css,
  ...rest
}: InputProps) => {
  let inputPaddingValue = '$44';
  if (size === 'xl') {
    inputPaddingValue = '$44';
  } else if (size === 'lg') {
    inputPaddingValue = '$40';
  } else if (size === 'md') {
    inputPaddingValue = '$28';
  }
  if (iconLeft || iconRight) {
    return (
      <Box css={{
        display: 'flex', alignItems: 'center', position: 'relative', ...css,
      }}
      >
        {iconLeft && (
        <IconContainer
          size={size}
          css={{
            left: '0',
          }}
        >
          {React.cloneElement(iconLeft)}
        </IconContainer>
        )}
        <StyledInput size={size} data-testid="input" css={{ ...(iconLeft && { paddingInlineStart: inputPaddingValue }), ...(iconRight && { paddingInlineEnd: inputPaddingValue }) }} {...rest} />
        {iconRight && (
        <IconContainer
          size={size}
          css={{
            right: '0',
          }}
        >
          {React.cloneElement(iconRight)}
        </IconContainer>
        )}
      </Box>
    );
  }
  return (
    <StyledInput size={size} data-testid="input" {...rest} css={css} />
  );
};
