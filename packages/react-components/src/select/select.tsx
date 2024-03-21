import React, { ComponentProps, ReactElement, useMemo } from 'react';
import ReactSelect, { components as ReactSelectComponent } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { styled } from '../stitches.config';
import { Box, FormLabel } from '..';

const selectStyles = {
  transition: 'all $transitions$2',
  '&--is-disabled': {
    cursor: 'not-allowed'
  },
  '& .twigs-select__control': {
    background: '$black50',
    borderColor: 'transparent',
    '&:hover': {
      borderColor: '$neutral200',
      background: '$white900'
    },
    '&.twigs-select__control--is-focused': {
      background: '$white900',
      borderColor: '$neutral200',
      $$shadowColor: '$colors$primary300',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
    },
    '&.twigs-select__control--is-disabled': {
      backgroundColorOpacity: ['$neutral500', 0.06]
    }
  },
  '& .twigs-select__value-container, & .twigs-select__placeholder, &.twigs-select__single-value, &.twigs-select__input':
  {
    fontWeight: '$4'
  },
  '& .twigs-select__placeholder': {
    color: '$neutral600'
  },
  '& .twigs-select__value-container': {
    color: '$neutral900'
  },
  '& .twigs-select__indicator': {
    padding: '0 $4',
    '& svg': {
      width: '$4',
      height: '$4'
    }
  },
  '& .twigs-select__input-container': {
    boxShadow: 'none',
    lineHeight: '$sm'
  },
  '& .twigs-select__menu': {
    overflow: 'hidden',
    margin: '$3 0',
    boxShadow: '$sm',
    border: '$borderWidths$xs solid $colors$neutral300'
  },
  '& .twigs-select__single-value': {
    color: '$neutral900',
    lineHeight: '$sm'
  },
  '& .twigs-select__multi-value__label': {
    fontSize: '100%'
  },
  '& .twigs-select__option': {
    fontSize: '$sm',
    lineHeight: '$sm',
    fontWeight: '$4',
    padding: '$4 $6',
    color: '$neutral900',
    '&.twigs-select__option--is-focused': {
      backgroundColorOpacity: ['$secondary500', 0.06]
    },
    '&.twigs-select__option--is-selected': {
      color: '$neutral900',
      background: '$primary100',
      '&.twigs-select__option--is-disabled': {
        opacity: 1,
        cursor: 'not-allowed',
        color: '$white900',
        background: '$black800'
      }
    },
    '&.twigs-select__option--is-disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      color: '$neutral800',
      background: 'none'
    }
  },
  '& .twigs-select--hide-indicator': {
    '& .twigs-select__indicator': {
      display: 'none'
    }
  },
  variants: {
    size: {
      xl: {
        '& .twigs-select__control': {
          height: '$12',
          minHeight: '$12',
          borderRadius: '$lg',
          fontSize: '$md'
        },
        '& .twigs-select__multi-value__label': {
          padding: '$4'
        }
      },
      lg: {
        '& .twigs-select__control': {
          height: '$10',
          minHeight: '$10',
          borderRadius: '$lg',
          fontSize: '$md'
        },
        '& .twigs-select__multi-value__label': {
          padding: '$3'
        },
        '& .twigs-select__value-container, & .twigs-select__placeholder, &.twigs-select__single-value, &.twigs-select__input':
        {
          fontSize: '$md'
        }
      },
      md: {
        '& .twigs-select__control': {
          height: '$8',
          minHeight: '$8',
          borderRadius: '$lg',
          fontSize: '$sm'
        },
        '& .twigs-select__multi-value__label': {
          padding: '$2'
        }
      },
      sm: {
        '& .twigs-select__control': {
          height: '$6',
          minHeight: '$6',
          borderRadius: '$md',
          fontSize: '$sm'
        },
        '& .twigs-select__value-container, & .twigs-select__input-container': {
          paddingTop: 0,
          paddingBottom: 0
        },
        '& .twigs-select__multi-value__label': {
          padding: '$1'
        }
      }
    },
    variant: {
      default: {
        '& .twigs-select__control': {
          background: '$white900',
          borderWidth: '$xs',
          borderStyle: 'solid',
          borderColor: '$neutral200',
          '&:hover, &:focus, &:active': {
            borderWidth: '$xs',
            borderStyle: 'solid',
            borderColor: '$neutral300'
          }
        }
      },
      filled: {
        borderColor: 'transparent'
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    variant: 'default'
  }
};

const StyledSelect = styled(ReactSelect, selectStyles);
const StyledAsyncSelect = styled(AsyncSelect, selectStyles);
const StyledCreatableSelect = styled(CreatableSelect, selectStyles);
const StyledCreatableAsyncSelect = styled(AsyncCreatableSelect, selectStyles);

type SelectBaseProps = {
  showSeparator?: boolean;
  isAsync?: boolean;
  isCreatable?: boolean,
  dropdownIndicatorIcon?: ReactElement;
  dropdownIndicatorPosition?: 'left' | 'right';
  label?: string;
  requiredIndicator?: boolean;
};

const DropdownIndicator = (
  props, dropdownIndicatorIcon
) => {
  return (
    <ReactSelectComponent.DropdownIndicator {...props}>
      {React.cloneElement(dropdownIndicatorIcon)}
    </ReactSelectComponent.DropdownIndicator>
  );
};

export type SelectProps = SelectBaseProps &
  ComponentProps<typeof StyledSelect> &
  ComponentProps<typeof StyledAsyncSelect> &
  ComponentProps<typeof StyledCreatableSelect> &
  ComponentProps<typeof StyledCreatableAsyncSelect>;

export const Select = ({
  showSeparator, isAsync, isCreatable, components, dropdownIndicatorIcon, styles, dropdownIndicatorPosition = 'right', label, requiredIndicator, ...props
}: SelectProps) => {
  const customStyles = useMemo(() => {
    const isLIconLeftPositioned = dropdownIndicatorPosition === 'left';
    return {
      ...styles,
      control: (base: any) => ({
        ...base,
        ...(isLIconLeftPositioned && {
          flexDirection: 'row-reverse'
        })
      }),
      indicatorsContainer: (base: any) => ({
        ...base,
        ...(isLIconLeftPositioned && {
          flexDirection: 'row-reverse'
        })
      }),
      clearIndicator: (base: any) => ({
        ...base,
        ...(isLIconLeftPositioned && {
          position: 'absolute',
          right: 0
        })
      })
    };
  }, [dropdownIndicatorPosition, styles]);

  // eslint-disable-next-line no-nested-ternary
  const SelectComponent = isCreatable ? (isAsync ? StyledCreatableAsyncSelect : StyledCreatableSelect) : (isAsync ? StyledAsyncSelect : StyledSelect);
  return (
    <Box>
      {!!label && <FormLabel css={{ marginBottom: "$2" }} requiredIndicator={requiredIndicator}>{label}</FormLabel>}
      <SelectComponent
        styles={customStyles}
        {...props}
        components={{
          ...(!showSeparator && {
            IndicatorSeparator: null
          }),
          ...(dropdownIndicatorIcon && {
            DropdownIndicator: (dropdownProps) => DropdownIndicator(dropdownProps, dropdownIndicatorIcon)
          }),
          ...components
        }}
        classNamePrefix="twigs-select"
        theme={(theme) => ({ ...theme, borderRadius: 10 })}
      />
    </Box>
  );
};
