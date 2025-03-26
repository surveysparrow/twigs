import { CloseCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { Flex } from '@src/flex';
import { Tooltip, TooltipProvider } from '@src/tooltip';
import { styled } from '@src/stitches.config';
import { Text } from '@src/text';
import { prefixClassName } from '@src/utils';
import React from 'react';
import { CascaderDropdown } from '@src/cascader-dropdown';
import {
  CascaderDropdownDataValueType, CascaderDropdownItemType, CascaderDropdownOperatorType, CascaderDropdownValueSelectorType, dataTypes, initialFilterValueSelectorValue, optionTypes
} from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';
import FilterPillValueSelector from './filter-pill-value-selector';
import { FilterType } from './stories/filter.stories';

export type FilterPillProps = {
  icon?: React.ReactNode;
  filterPillData: FilterType;
  setFilterPillData: (value: FilterType) => void;
  variant?: 'filled' | 'outline' | 'error';
  cascaderDropdownData: CascaderDropdownItemType[];
  onDelete: () => void;
};

export type FilterValueOperatorType = {
  label: string;
  value: string;
  dataType: keyof typeof dataTypes;
  choices?: { label: string; value: string }[];
};

export type FilterValueItemType = {
  label?: string;
  value?: string;
  options: FilterValueOperatorType[];
};

const getDisplayValue = (value: FilterType) => {
  if (!value.connector) return null;
  const displayValue = value.value?.[value.connector.dataType];
  if (typeof displayValue === 'string') return displayValue;
  if (Array.isArray(displayValue)) return displayValue.join(', ');
  if (value.connector.dataType === dataTypes.DATE_RANGE && typeof displayValue === 'object' && displayValue !== null) {
    return `${displayValue.start} - ${displayValue.end}`;
  }
  return null;
};

export const FilterPill = ({
  icon,
  filterPillData,
  setFilterPillData,
  variant = 'outline',
  cascaderDropdownData,
  onDelete
}: FilterPillProps) => {
  const onChange = ({
    selectedProperty,
    selectorValue
  } : {
    value: CascaderDropdownDataValueType | CascaderDropdownOperatorType,
    selectionPath: CascaderDropdownDataValueType[],
    selectedProperty: CascaderDropdownItemType | CascaderDropdownOperatorType | null,
    selectorValue?: CascaderDropdownValueSelectorType
  }) => {
    if (selectedProperty && 'type' in selectedProperty && selectedProperty.type === optionTypes.VALUE_SELECTOR) {
      const newFilterPillData = {
        ...filterPillData,
        value: selectorValue ?? initialFilterValueSelectorValue,
        connector: {
          dataType: selectedProperty.dataType,
          label: `${selectedProperty.label}`,
          value: `${selectedProperty.value}`,
          type: selectedProperty.type
        }
      };
      setFilterPillData(newFilterPillData);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <StyledFilterPill variant={variant}>
        <Flex alignItems="center" gap="$2" css={{ padding: '3px $2 3px $4' }}>
          {icon && (
            <Box
              css={{
                lineHeight: 0,
                flexShrink: 0,
                color: '$neutral800',
                '&, & svg': {
                  minWidth: '$4',
                  minHeight: '$4',
                  height: '$4',
                  width: '$4'
                }
              }}
            >
              {icon}
            </Box>
          )}
          <Text weight="medium" css={{ color: '$neutral900', maxWidth: '$25' }} truncate>{filterPillData.property.label}</Text>
        </Flex>
        <CascaderDropdown
          data={cascaderDropdownData}
          onChange={onChange}
        >
          <Flex>
            {!filterPillData.connector?.value && (
              <StyledValueButton>
                <Text
                  css={{
                    color: '$neutral700',
                    padding: '3px $4 3px $1',
                    ...(variant === 'error' && {
                      color: '$negative700',
                      fontWeight: '$5'
                    })
                  }}
                >
                  Choose Condition
                </Text>
              </StyledValueButton>
            )}
            {filterPillData.connector?.value && (
              <StyledValueButton>
                <Text css={{ color: '$neutral700', padding: '3px $1 3px $1' }}>{filterPillData.connector?.label}</Text>
              </StyledValueButton>
            )}
            {filterPillData.connector?.value && (
              <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
                <Text
                  css={{
                    color: '$neutral900',
                    padding: '3px $4 3px $2',
                    ...(variant === 'error' && {
                      color: '$negative700'
                    })
                  }}
                  weight="medium"
                >
                  {getDisplayValue(filterPillData) ?? 'Choose Value'}
                </Text>
              </StyledValueButton>
            )}
          </Flex>
        </CascaderDropdown>
        <Tooltip content="Remove">
          <StyledCloseButton className={prefixClassName('filter-pill__close-button')} onClick={() => onDelete()}>
            <CloseCircleFillIcon size={16} />
          </StyledCloseButton>
        </Tooltip>
      </StyledFilterPill>
    </TooltipProvider>
  );
};

type FilterPillWithoutOperatorProps = {
  icon?: React.ReactNode;
  filterPillData: FilterType;
  setFilterPillData: (value: FilterType) => void;
  variant?: 'filled' | 'outline' | 'error';
  data: CascaderDropdownOperatorType;
  onDelete: () => void;
};
export const FilterPillWithoutOperator = ({
  icon,
  filterPillData,
  setFilterPillData,
  variant = 'outline',
  data,
  onDelete
}: FilterPillWithoutOperatorProps) => {
  const onChange = (value: string) => {
    const newFilterPillData = {
      ...filterPillData,
      value: {
        ...filterPillData.value,
        [data.dataType]: value
      },
      connector: {
        dataType: data.dataType,
        label: `${data.label}`,
        value: `${data.value}`,
        type: data.type
      }
    };
    setFilterPillData(newFilterPillData);
  };

  return (
    <TooltipProvider delayDuration={0}>
      <StyledFilterPill variant={variant}>
        <Flex alignItems="center" gap="$2" css={{ padding: '3px $2 3px $4' }}>
          {icon && (
            <Box
              css={{
                lineHeight: 0,
                flexShrink: 0,
                color: '$neutral800',
                '&, & svg': {
                  minWidth: '$4',
                  minHeight: '$4',
                  height: '$4',
                  width: '$4'
                }
              }}
            >
              {icon}
            </Box>
          )}
          <Text
            weight="medium"
            css={{ color: '$neutral700', maxWidth: '$25' }}
            truncate
          >
            {filterPillData.property.label}
            :
          </Text>
        </Flex>
        <FilterPillValueSelector dataType={data.dataType} choices={data.choices} onApply={onChange}>
          <Flex>
            <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
              <Text
                css={{
                  color: '$neutral900',
                  padding: '3px $4 3px $2',
                  ...(variant === 'error' && {
                    color: '$negative700'
                  })
                }}
                weight="medium"
              >
                {getDisplayValue(filterPillData) ?? 'Choose Value'}
              </Text>
            </StyledValueButton>
          </Flex>
        </FilterPillValueSelector>
        <Tooltip content="Remove">
          <StyledCloseButton className={prefixClassName('filter-pill__close-button')} onClick={() => onDelete()}>
            <CloseCircleFillIcon size={16} />
          </StyledCloseButton>
        </Tooltip>
      </StyledFilterPill>
    </TooltipProvider>
  );
};

const StyledFilterPill = styled(Flex, {
  height: '$7',
  alignItems: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$black200',
  borderRadius: '$lg',
  transition: 'all $transitions$2',
  cursor: 'default',
  width: 'fit-content',
  position: 'relative',
  flexShrink: 0,
  '&:hover': {
    borderColor: '$black400'
  },
  [`&:hover .${prefixClassName('filter-pill__close-button')}`]: {
    opacity: 1
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'not-allowed'
      }
    },
    variant: {
      outline: {
        backgroundColor: 'transparent'
      },
      filled: {
        backgroundColor: '$secondary50'
      },
      error: {
        backgroundColorOpacity: ['$negative500', 0.05],
        borderStyle: 'dashed',
        borderColor: '$negative400',
        '&:hover': {
          borderColor: '$negative400'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'outline'
  }
});

const StyledValueButton = styled('button', {
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  cursor: 'pointer',
  height: '100%',
  transition: 'all $transitions$2',
  outlineWidth: '1px',
  outlineStyle: 'solid',
  outlineColor: 'transparent',
  flexShrink: 0,
  '&:focus, &:active': {
    outlineColor: 'transparent'
  },
  '&:focus-visible': {
    outline: '1px solid $primary400'
  }
});

const StyledCloseButton = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  color: '$neutral500',
  transition: 'all $transitions$2',
  lineHeight: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'translate(35%, -35%)',
  opacity: 0,
  background: 'radial-gradient($white900, $white900 50%, transparent 50%, transparent)',
  '&:hover, &:focus, &:active, &:focus-visible': {
    opacity: 1
  },
  '& path': {
    outlineWidth: '3px',
    outlineStyle: 'solid',
    outlineColor: '$white900',
    borderRadius: '$round'
  },
  '&:hover': {
    color: '$neutral800'
  },
  '&:hover path, &:focus path, &:active path, &:focus-visible path': {
    outlineColor: '#F2F5F8'
  }
});
