import React, { FunctionComponent, ComponentProps } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '../../stitches.config';

const TickIcon = () => {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.25L3.5 6.75L1 4.25" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$white900',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '$borderWidths$xs solid $neutral400',
  '&:hover': { border: '$borderWidths$xs solid $neutral700' },
  '&:focus': {
    $$shadowColor: '$colors$blue300',
    border: '$borderWidths$xs solid $neutral700',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  '&:active, &[data-state="checked"]': {
    background: '$cyan700',
    border: '$borderWidths$xs solid transparent',
  },
  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$5',
        height: '$5',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$white900',
});

export interface CheckboxBaseProps {
  onChange?: () => void;
}

export type CheckboxProps = CheckboxBaseProps & ComponentProps<typeof StyledCheckbox> &
  ComponentProps<typeof StyledIndicator> &
  React.HTMLAttributes<HTMLInputElement> & {
    as?: React.ElementType
 };

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  onChange,
  ...rest
}) => {
  return (
    <StyledCheckbox onCheckedChange={onChange} {...rest}>
      <StyledIndicator css={{ display: 'flex' }}>
        <TickIcon />
      </StyledIndicator>
    </StyledCheckbox>
  );
};
