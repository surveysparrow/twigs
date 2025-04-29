import clsx from 'clsx';
import React, {
  ComponentProps,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo
} from 'react';
import ReactSelect, {
  GroupBase,
  components as ReactSelectComponents,
  SelectInstance
} from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import CreatableSelect from 'react-select/creatable';
import { Box } from '../box';
import { Flex } from '../flex';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { globalCss, styled } from '../stitches.config';

const selectStyles = {
  transition: 'all $transitions$2',
  '&--is-disabled': {
    cursor: 'not-allowed'
  },
  '& .twigs-select__control': {
    backgroundColorOpacity: ['$secondary500', 0.06],
    borderColor: 'transparent',
    '&:hover': {
      borderColor: '$neutral200',
      background: '$white900'
    },
    '&.twigs-select__control--is-focused': {
      background: '$white900',
      borderColor: '$neutral200',
      $$shadowColor: '$colors$primary200',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
    },
    '&.twigs-select__control--is-disabled': {
      backgroundColorOpacity: ['$neutral500', 0.06],
      opacity: 0.6
    },
    '&--menu-is-open': {
      '.twigs-select__value-container--has-value': {
        '.twigs-select__single-value': {
          color: '$neutral600'
        }
      }
    }
  },
  '& .twigs-select__value-container, & .twigs-select__placeholder, &.twigs-select__single-value, &.twigs-select__input':
  {
    fontWeight: '$4'
  },
  '& .twigs-select__placeholder': {
    color: '$neutral600'
  },
  '& .twigs-select__indicators': {
    height: '100%'
  },
  '& .twigs-select__value-container': {
    height: '100%',
    color: '$neutral900',
    paddingLeft: '$0',
    paddingRight: '$0'
  },
  '&.twigs-select--dropdown-indicator-left': {
    '& .twigs-select__control': {
      paddingRight: '$14'
    }
  },
  '&.twigs-select--dropdown-indicator-left .twigs-select__value-container': {
    paddingLeft: '$1'
  },
  '&.twigs-select--dropdown-indicator-right .twigs-select__value-container': {
    paddingRight: '$1'
  },
  '& .twigs-select__indicator': {
    padding: '0',
    color: '$neutral600',

    '&.twigs-select__clear-indicator': {
      padding: '0 $4'
    },
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
  '& .twigs-select__multi-value': {
    marginTop: 0
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
      backgroundColorOpacity: ['$primary200', 0.08],
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
  '& .twigs-select__clear-indicator': {
    '&:hover': {
      color: '$neutral800'
    }
  },
  variants: {
    size: {
      xl: {
        '& .twigs-select__control': {
          height: '$12',
          minHeight: '$12',
          borderRadius: '$xl',
          fontSize: '$md',
          padding: '0 $6'
        },
        '& .twigs-select__indicator': {
          '& svg': {
            width: '$5',
            height: '$5'
          }
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
          fontSize: '$sm',
          padding: '0 $6'
        },
        '& .twigs-select__indicator': {
          '& svg': {
            width: '$5',
            height: '$5'
          }
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
          fontSize: '$sm',
          padding: '0 $4'
        },
        '& .twigs-select__multi-value__label': {
          padding: '$2'
        }
      },
      sm: {
        '& .twigs-select__control': {
          height: '$6',
          minHeight: '$6',
          borderRadius: '$sm',
          fontSize: '$xs',
          padding: '0 $4'
        },
        '&.twigs-select--dropdown-indicator-right .twigs-select__value-container':
          {
            paddingRight: '$1'
          },
        '& .twigs-select__value-container, & .twigs-select__input-container': {
          paddingTop: 0,
          paddingBottom: 0
        },
        '& .twigs-select__multi-value__label': {
          padding: '$1'
        },
        '& .twigs-select__indicator': {
          '& svg': {
            width: '14px',
            height: '14px'
          }
        }
      }
    },
    variant: {
      default: {
        '& .twigs-select__control': {
          background: '$white900',
          borderWidth: '$xs',
          borderStyle: 'solid',
          borderColor: '$black300',
          '&:hover, &:focus, &:active': {
            borderWidth: '$xs',
            borderStyle: 'solid',
            borderColor: '$neutral400'
          }
        }
      },
      filled: {
        borderColor: 'transparent',

        '& .twigs-select__control': {
          '&--is-disabled': {
            border: '1px solid $neutral200'
          },
          '&:hover, &:focus, &:active': {
            borderWidth: '$xs',
            borderStyle: 'solid',
            borderColor: '$neutral400'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: 'sm',
    variant: 'default'
  }
};

const portalStyles = globalCss({
  '.twigs-select__menu-portal': selectStyles
});

export const StyledSelect = styled(ReactSelect, selectStyles);
export const StyledAsyncSelect = styled(AsyncSelect, selectStyles);
export const StyledCreatableSelect = styled(CreatableSelect, selectStyles);
export const StyledCreatableAsyncSelect = styled(
  AsyncCreatableSelect,
  selectStyles
);

type SelectBaseProps = {
  showSeparator?: boolean;
  isAsync?: boolean;
  isCreatable?: boolean;
  dropdownIndicatorIcon?: ReactElement;
  dropdownIndicatorPosition?: 'left' | 'right';
  label?: string;
  requiredIndicator?: boolean;
  info?: string | ReactNode;
  labelRightAddon?: ReactNode;
  error?: string;
  helperText?: string;
};

const DropdownIndicator = (props, dropdownIndicatorIcon) => {
  return (
    <ReactSelectComponents.DropdownIndicator {...props}>
      {React.cloneElement(dropdownIndicatorIcon)}
    </ReactSelectComponents.DropdownIndicator>
  );
};

export type SelectProps = SelectBaseProps &
  ComponentProps<typeof StyledSelect> &
  ComponentProps<typeof StyledAsyncSelect> &
  ComponentProps<typeof StyledCreatableSelect> &
  ComponentProps<typeof StyledCreatableAsyncSelect>;

export const Select = React.forwardRef<
  SelectInstance<unknown, boolean, GroupBase<unknown>>,
  SelectProps
>(
  (
    {
      showSeparator,
      isAsync,
      isCreatable,
      components,
      dropdownIndicatorIcon,
      styles,
      dropdownIndicatorPosition = 'right',
      label,
      info,
      error,
      helperText,
      requiredIndicator,
      labelRightAddon,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      if (props.menuPortalTarget) {
        portalStyles();
      }
    }, [props.menuPortalTarget]);

    const customStyles = useMemo(() => {
      const isIconLeftPositioned = dropdownIndicatorPosition === 'left';
      return {
        ...styles,
        control: (base: any) => ({
          ...base,
          ...(isIconLeftPositioned && {
            flexDirection: 'row-reverse'
          })
        }),
        indicatorsContainer: (base: any) => ({
          ...base,
          ...(isIconLeftPositioned && {
            flexDirection: 'row-reverse'
          })
        }),
        clearIndicator: (base: any) => ({
          ...base,
          ...(isIconLeftPositioned && {
            position: 'absolute',
            right: 0
          })
        })
      };
    }, [dropdownIndicatorPosition, styles]);

    // eslint-disable-next-line no-nested-ternary
    const SelectComponent = isCreatable
      ? isAsync
        ? StyledCreatableAsyncSelect
        : StyledCreatableSelect
      : isAsync
        ? StyledAsyncSelect
        : StyledSelect;
    const SelectElement = (
      <SelectComponent
        ref={ref}
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
        className={clsx(props.className, {
          'twigs-select--dropdown-indicator-left':
            dropdownIndicatorPosition === 'left',
          'twigs-select--dropdown-indicator-right':
            dropdownIndicatorPosition === 'right',
          'twigs-select--is-multi': props.isMulti
        })}
        theme={(theme) => ({ ...theme, borderRadius: 10 })}
      />
    );

    const labelSize = props.size === 'xl' ? 'sm' : 'xs';

    return (
      <>
        {label || error || helperText ? (
          <Box>
            {label && (
              <Flex justifyContent="space-between" css={{ marginBottom: '$2' }}>
                <FormLabel
                  requiredIndicator={requiredIndicator}
                  info={info}
                  size={labelSize}
                  rightAddon={labelRightAddon}
                >
                  {label}
                </FormLabel>
              </Flex>
            )}
            {SelectElement}
            {error || helperText ? (
              <Box
                css={{
                  marginTop: ['lg', 'xl'].includes(props.size as string)
                    ? '$2'
                    : '$1'
                }}
              >
                <FormHelperText
                  size={labelSize}
                  color={error ? 'error' : 'info'}
                >
                  {error || helperText}
                </FormHelperText>
              </Box>
            ) : null}
          </Box>
        ) : (
          SelectElement
        )}
      </>
    );
  }
);

export { ReactSelectComponents };
