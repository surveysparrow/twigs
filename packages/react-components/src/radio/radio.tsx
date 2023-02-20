import React, { ComponentProps, FunctionComponent } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { styled } from '../../stitches.config';

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: '$white900',
  borderRadius: '$round',
  border: '$borderWidths$xs solid $neutral400',
  transition: 'all $transitions$2',
  '&:hover': { borderColor: '$neutral700' },
  '&:focus-visible': {
    borderColor: '$neutral700',
    $$shadowColor: '$colors$system300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&[data-state="checked"]': {
    borderColor: '$secondary700'
  },
  '&[data-disabled]': {
    cursor: 'not-allowed'
  },
  variants: {
    size: {
      md: {
        width: '$5',
        height: '$5',
        '& span::after': {
          width: '$3',
          height: '$3'
        }
      },
      sm: {
        width: '$4',
        height: '$4',
        '& span::after': {
          width: '$2',
          height: '$2'
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    borderRadius: '$round',
    backgroundColor: '$secondary700'
  }
});

type OmitProps = 'disabled' | 'onValueChange' | 'required';

type RadioRootProps = {
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void,
  isDisabled?: boolean,
  isRequired?: boolean,
  children: React.ReactNode | React.ReactNode[]
} & Omit<ComponentProps<typeof RadioGroupPrimitive.Root>, OmitProps>

export const RadioGroup: FunctionComponent<RadioRootProps> = React.forwardRef(
  (
    {
      onChange, isDisabled, isRequired, value, children, ...rest
    }: RadioRootProps, ref
  ) => {
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        onValueChange={onChange}
        disabled={isDisabled}
        required={isRequired}
        {...rest}
      >
        {children}
      </RadioGroupPrimitive.Root>
    );
  }
);

export type RadioProps = {
  isDisabled?: boolean,
  isRequired?: boolean
} & Omit<ComponentProps<typeof StyledRadio>, OmitProps>;

export const Radio: FunctionComponent<RadioProps> = React.forwardRef(
  (
    {
      isDisabled, value, onChange, isRequired, ...rest
    }: RadioProps,
    ref
  ) => {
    return (
      <StyledRadio
        ref={ref}
        disabled={isDisabled}
        required={isRequired}
        value={value}
        {...rest}
      >
        <StyledIndicator />
      </StyledRadio>
    );
  }
);
