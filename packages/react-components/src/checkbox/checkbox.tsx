import React, { FunctionComponent, ComponentProps, ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { FormLabel } from '../form-label';
import { styled } from '../../stitches.config';

const TickIcon = () => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.25L3.5 6.75L1 4.25"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const HorizontalLineIcon = () => {
  return (
    <svg
      width="10"
      height="2"
      viewBox="0 0 10 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1H1"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  backgroundColor: '$white900',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '$borderWidths$xs solid $neutral400',
  transition: 'all $transitions$2',
  '&:hover': { border: '$borderWidths$xs solid $neutral700' },
  '&:focus-visible': {
    outline: 'none',
    $$shadowColor: '$colors$system300',
    border: '$borderWidths$xs solid $neutral700',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&:active, &[data-state="checked"], &[data-state="indeterminate"]': {
    background: '$secondary700',
    border: '$borderWidths$xs solid transparent'
  },
  '& .check-icon': {
    display: 'none'
  },
  '&[data-state="checked"]': {
    '.check-icon': {
      display: 'flex'
    }
  },
  variants: {
    size: {
      sm: {
        width: '$4',
        height: '$4'
      },
      md: {
        width: '$5',
        height: '$5'
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

const StyledCheckIconContainer = styled('span', {
  display: 'flex',
  alignItems: 'center'
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$white900',
  display: 'flex'
});

const StyledLabelContainer = styled('span', {
  display: 'inline-flex',
  paddingInlineStart: '$8'
});

type OmitProps = 'disabled' | 'checked' | 'onCheckedChange' | 'required' | 'onChange';

export type CheckboxBaseProps = {
  isChecked?: boolean | string,
  isIndeterminate?: boolean,
  children?: ReactNode,
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean | 'indeterminate') => void,
  isRequired?: boolean,
  isDisabled?: boolean
}

export type CheckboxProps = CheckboxBaseProps &
  Omit<ComponentProps<typeof StyledCheckbox>, OmitProps> &
  ComponentProps<typeof StyledIndicator> &
  React.HTMLAttributes<HTMLInputElement> & {
    as?: React.ElementType;
  };

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  isChecked,
  isIndeterminate,
  isDisabled,
  isRequired,
  onChange,
  children,
  ...rest
}) => {
  if (children) {
    return (
      <FormLabel as="label" css={{ display: 'flex', alignItems: 'center' }}>
        <StyledCheckbox
          checked={isChecked}
          onCheckedChange={onChange}
          disabled={isDisabled}
          required={isRequired}
          {...(isIndeterminate && { 'data-state': 'indeterminate' })}
          {...rest}
        >
          <StyledIndicator
            {...(isIndeterminate && { 'data-state': 'indeterminate' })}
          >
            <StyledCheckIconContainer className="check-icon">
              <TickIcon />
            </StyledCheckIconContainer>
            {isIndeterminate && <HorizontalLineIcon />}
          </StyledIndicator>
        </StyledCheckbox>
        <StyledLabelContainer>{children}</StyledLabelContainer>
      </FormLabel>
    );
  }
  return (
    <StyledCheckbox
      checked={isChecked}
      onCheckedChange={onChange}
      disabled={isDisabled}
      required={isRequired}
      {...(isIndeterminate && { 'data-state': 'indeterminate' })}
      {...rest}
    >
      <StyledIndicator
        {...(isIndeterminate && { 'data-state': 'indeterminate' })}
      >
        <StyledCheckIconContainer className="check-icon">
          <TickIcon />
        </StyledCheckIconContainer>
        {isIndeterminate && <HorizontalLineIcon />}
      </StyledIndicator>
    </StyledCheckbox>
  );
};
