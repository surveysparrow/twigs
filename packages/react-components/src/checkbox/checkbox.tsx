import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import React, {
  ComponentProps,
  ReactNode,
  forwardRef,
  useId
} from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';

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
  flexShrink: '0',
  justifyContent: 'center',
  border: '$borderWidths$xs solid $neutral400',
  transition: 'all $transitions$2',
  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.4
  },
  '&:hover:not(:disabled)': { border: '$borderWidths$xs solid $neutral700' },
  '&:focus-visible': {
    outline: 'none',
    $$shadowColor: '$colors$primary300',
    border: '$borderWidths$xs solid $neutral700',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
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
    },
    color: {
      default: {
        '&:active, &[data-state="checked"], &[data-state="indeterminate"]': {
          background: '$secondary500',
          border: 'none'
        },
        '&:hover:active, &[data-state="checked"]:hover, &[data-state="indeterminate"]:hover':
          {
            border: '$borderWidths$xs solid $secondary600'
          },
        '&:disabled[data-state="checked"], &:disabled[data-state="indeterminate"]':
          {
            background: '$secondary500',
            border: 'none'
          }
      },
      primary: {
        '&:active, &[data-state="checked"], &[data-state="indeterminate"]': {
          background: '$primary500',
          border: 'none'
        },
        '&:hover:active, &[data-state="checked"]:hover, &[data-state="indeterminate"]:hover':
          {
            border: '$borderWidths$xs solid $primary600'
          },
        '&:disabled[data-state="checked"], &:disabled[data-state="indeterminate"]':
          {
            background: '$secondary500',
            border: 'none'
          }
      },
      warning: {
        '&:active, &[data-state="checked"], &[data-state="indeterminate"]': {
          background: '$warning500',
          border: 'none'
        },
        '&:hover:active, &[data-state="checked"]:hover, &[data-state="indeterminate"]:hover':
          {
            border: '$borderWidths$xs solid $warning600'
          },
        '&:disabled[data-state="checked"], &:disabled[data-state="indeterminate"]':
          {
            background: '$secondary500',
            border: 'none'
          }
      },
      success: {
        '&:active, &[data-state="checked"], &[data-state="indeterminate"]': {
          background: '$positive500',
          border: 'none'
        },
        '&:hover:active, &[data-state="checked"]:hover, &[data-state="indeterminate"]:hover':
          {
            border: '$borderWidths$xs solid $positive600'
          },
        '&:disabled[data-state="checked"], &:disabled[data-state="indeterminate"]':
          {
            background: '$secondary500',
            border: 'none'
          }
      },
      error: {
        '&:active, &[data-state="checked"], &[data-state="indeterminate"]': {
          background: '$negative500',
          border: 'none'
        },
        '&:hover:active, &[data-state="checked"]:hover, &[data-state="indeterminate"]:hover':
          {
            border: '$borderWidths$xs solid $negative600'
          },
        '&:disabled[data-state="checked"], &:disabled[data-state="indeterminate"]':
          {
            background: '$secondary500',
            border: 'none'
          }
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    color: 'default'
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

const StyledLabelContainer = styled('label', {
  display: 'inline-flex',
  paddingInlineStart: '$4'
});

type OmitProps = 'onCheckedChange' | 'onChange';

export type CheckboxBaseProps = {
  checked?: boolean | 'indeterminate';
  children?: ReactNode;
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean | 'indeterminate') => void;
  required?: boolean;
  disabled?: boolean;
  containerRef?: React.Ref<HTMLDivElement>;
  color?: string
};

export type CheckboxProps = CheckboxBaseProps &
  Omit<ComponentProps<typeof StyledCheckbox>, OmitProps> &
  ComponentProps<typeof StyledIndicator> &
  React.HTMLAttributes<HTMLInputElement> & {
    as?: React.ElementType;
  };

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({
  checked,
  disabled,
  required,
  onChange,
  children,
  id,
  containerRef,
  color,
  ...rest
}, ref) => {
  const isIndeterminate = checked === 'indeterminate';
  const uniqueId = id || useId();
  return (
    <Flex alignItems="center" ref={containerRef}>
      <StyledCheckbox
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
        required={required}
        color={color}
        id={uniqueId}
        {...(isIndeterminate && { 'data-state': 'indeterminate' })}
        {...rest}
        ref={ref}
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
      {children && (
        <StyledLabelContainer htmlFor={uniqueId}>
          {children}
        </StyledLabelContainer>
      )}
    </Flex>
  );
});
