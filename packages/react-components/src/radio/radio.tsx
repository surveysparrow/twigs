import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import React, {
  ComponentProps, FunctionComponent,
  useId
} from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';

const StyledRadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2'
});

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  backgroundColor: '$white900',
  borderRadius: '$round',
  border: '$borderWidths$xs solid $neutral700',
  transition: 'all $transitions$2',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.4
  },

  '&:hover:not(:disabled)': { borderColor: '$secondary500' },
  '&:focus-visible': {
    borderColor: '$secondary500',
    $$shadowColor: '$colors$primary300',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
  },
  '&[data-state="checked"]': {
    borderColor: '$secondary500'
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
    backgroundColor: '$secondary500'
  }
});

type OmitProps = 'onValueChange' | 'onChange';

type RadioRootProps = {
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  children: React.ReactNode | React.ReactNode[];
} & Omit<ComponentProps<typeof RadioGroupPrimitive.Root>, OmitProps>;

export const RadioGroup: FunctionComponent<RadioRootProps> = React.forwardRef<
  React.ElementRef<typeof StyledRadioGroup>,
  RadioRootProps
>(({
  onChange, disabled, required, children, ...rest
}, ref) => {
  return (
    <StyledRadioGroup
      ref={ref}
      onValueChange={onChange}
      disabled={disabled}
      required={required}
      {...rest}
    >
      {children}
    </StyledRadioGroup>
  );
});

const StyledLabelContainer = styled('label', {
  display: 'inline-flex',
  paddingInlineStart: '$4'
});

export type RadioProps = {
  disabled?: boolean;
  required?: boolean;
  containerRef?: React.Ref<HTMLDivElement>;
} & Omit<ComponentProps<typeof StyledRadio>, OmitProps>;

export const Radio: FunctionComponent<RadioProps> = React.forwardRef<
  React.ElementRef<typeof StyledRadio>,
  RadioProps
>(({
  disabled, value, required, children, id, containerRef, ...rest
}, ref) => {
  const generatedId = useId();
  const uniqueId = id || generatedId;

  return (
    <Flex alignItems="center" ref={containerRef}>
      <StyledRadio
        ref={ref}
        disabled={disabled}
        required={required}
        value={value}
        id={uniqueId}
        {...rest}
      >
        <StyledIndicator />
      </StyledRadio>
      {children && (
        <StyledLabelContainer htmlFor={uniqueId}>
          {children}
        </StyledLabelContainer>
      )}
    </Flex>
  );
});
