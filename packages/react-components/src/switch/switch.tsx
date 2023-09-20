import React, { ComponentProps, FunctionComponent } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '../../stitches.config';

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  backgroundColor: '$white900',
  borderRadius: '$pill',
  width: '$3',
  height: '$3',
  transition: 'transform 150ms',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(15px)'
  }
});

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  cursor: 'pointer',
  backgroundColor: '$neutral400',
  borderRadius: '$pill',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  transition: 'all $transitions$2',
  '&:focus-visible': {
    $$shadowColor: '$colors$primary300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&[data-disabled]': {
    background: '$neutral200',
    cursor: 'not-allowed'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$primary600',
    '&[data-disabled]': {
      background: '$primary200',
      cursor: 'not-allowed'
    }
  },
  variants: {
    size: {
      sm: {
        width: '$7',
        height: '14px'
      },
      md: {
        width: '$10',
        height: '$5',
        [`& ${StyledThumb}`]: {
          width: '18px',
          height: '18px',
          '&[data-state="checked"]': {
            transform: 'translateX(21px)'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm'
  }
});

type OmitProps = 'onCheckedChange' | 'onChange';

export type SwitchProps = {
  disabled?: boolean,
  checked?: boolean,
  // eslint-disable-next-line no-unused-vars
  onChange?: (checked: boolean) => void,
  required?: boolean
} & Omit<ComponentProps<typeof StyledSwitch>, OmitProps>;

export const Switch: FunctionComponent<SwitchProps> = React.forwardRef(
  (
    {
      checked, disabled, onChange, required, ...rest
    }: SwitchProps,
    ref
  ) => {
    return (
      <StyledSwitch
        ref={ref}
        disabled={disabled}
        checked={checked}
        required={required}
        onCheckedChange={onChange}
        {...rest}
      >
        <StyledThumb />
      </StyledSwitch>
    );
  }
);
export const SwitchThumb = StyledThumb;
