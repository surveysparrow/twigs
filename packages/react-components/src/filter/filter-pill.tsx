import { CloseCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import { Box, BoxProps } from '@src/box';
import { Flex } from '@src/flex';
import { Tooltip, TooltipProvider } from '@src/tooltip';
import { styled } from '@src/stitches.config';
import { Text, TextProps } from '@src/text';
import { prefixClassName } from '@src/utils';
import React from 'react';
import { CascaderDropdown, OnChangeReturnType } from '@src/cascader-dropdown';
import {
  CascaderDropdownItemType, CascaderDropdownOperatorType, CascaderDropdownValueSelectorType, dataTypes, initialFilterValueSelectorValue, optionTypes
} from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';
import { CSS } from '@stitches/react';
import FilterPillValueSelector from './filter-pill-value-selector';
import { FilterType } from './stories/filter.stories';

export type FilterPillProps = {
  icon?: React.ReactNode;
  filterPillData: FilterType;
  setFilterPillData: (value: FilterType) => void;
  variant?: 'filled' | 'outline';
  cascaderDropdownData: (CascaderDropdownItemType | CascaderDropdownOperatorType)[];
  onDelete: () => void;
  showError?: boolean;
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
  onDelete,
  showError = false
}: FilterPillProps) => {
  const onChange = ({
    selectedProperty,
    selectorValue
  }: OnChangeReturnType) => {
    if (selectedProperty && 'type' in selectedProperty && selectedProperty.type === optionTypes.VALUE_SELECTOR) {
      if (!('dataType' in selectedProperty)) return;
      const newFilterPillData = {
        ...filterPillData,
        value: selectorValue ?? initialFilterValueSelectorValue,
        connector: {
          dataType: selectedProperty.dataType as keyof typeof dataTypes,
          label: `${selectedProperty.label}`,
          value: `${selectedProperty.value}`,
          type: selectedProperty.type as 'VALUE_SELECTOR'
        }
      };
      setFilterPillData(newFilterPillData);
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <StyledFilterPill variant={showError ? 'error' : variant}>
        <FilterPillLabel icon={icon} label={filterPillData.property.label} labelProps={{ css: { color: '$neutral900' } }} />
        <Flex>
          {!filterPillData.connector?.value && (
            <CascaderDropdown
              data={cascaderDropdownData}
              selectorValue={filterPillData.value}
              onChange={onChange}
              dropdownContentProps={{ align: 'start' }}
            >
              <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
                <Text
                  css={{
                    color: '$neutral700',
                    padding: '3px $4 3px $1',
                    ...(showError && {
                      color: '$negative700',
                      fontWeight: '$5'
                    })
                  }}
                >
                  Choose Condition
                </Text>
              </StyledValueButton>
            </CascaderDropdown>
          )}
          {filterPillData.connector?.value && (
            <CascaderDropdown
              data={cascaderDropdownData}
              selectorValue={filterPillData.value}
              onChange={onChange}
              dropdownContentProps={{ align: 'start' }}
            >
              <StyledValueButton>
                <Text css={{ color: '$neutral700', padding: '3px $1 3px $1' }}>{filterPillData.connector?.label}</Text>
              </StyledValueButton>
            </CascaderDropdown>
          )}
          {filterPillData.connector?.value && (
            <CascaderDropdown
              data={cascaderDropdownData}
              selectorValue={filterPillData.value}
              value={filterPillData.connector}
              onChange={onChange}
              dropdownContentProps={{ align: 'start' }}
            >
              <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
                <Text
                  css={{
                    color: '$neutral900',
                    padding: '3px $4 3px $2',
                    ...(showError && {
                      color: '$negative700'
                    })
                  }}
                  weight="medium"
                >
                  {getDisplayValue(filterPillData) ?? 'Choose Value'}
                </Text>
              </StyledValueButton>
            </CascaderDropdown>
          )}
        </Flex>
        <Tooltip content="Remove">
          <StyledCloseButton className={prefixClassName('filter-pill__close-button')} onClick={() => onDelete()}>
            <CloseCircleFillIcon size={16} />
          </StyledCloseButton>
        </Tooltip>
      </StyledFilterPill>
    </TooltipProvider>
  );
};

const FilterPillLabel = ({
  icon, label, css, labelProps, iconProps
}: { icon?: React.ReactNode, label?: string, css?: CSS, labelProps?: TextProps, iconProps?: BoxProps }) => {
  return (
    <Flex alignItems="center" gap="$2" css={{ padding: '3px $2 3px $4', ...css }}>
      {icon && (
        <Box
          {...iconProps}
          css={{
            lineHeight: 0,
            flexShrink: 0,
            color: '$neutral800',
            '&, & svg': {
              minWidth: '$4',
              minHeight: '$4',
              height: '$4',
              width: '$4'
            },
            ...iconProps?.css
          }}
        >
          {icon}
        </Box>
      )}
      <Text
        weight="medium"
        truncate
        {...labelProps}
        css={{ color: '$neutral700', maxWidth: '$25', ...labelProps?.css }}
      >
        {label}
      </Text>
    </Flex>
  );
};

type FilterPillWithoutOperatorProps = {
  icon?: React.ReactNode;
  filterPillData: FilterType;
  setFilterPillData: (value: FilterType) => void;
  variant?: 'filled' | 'outline';
  data: CascaderDropdownOperatorType;
  onDelete: () => void;
  showError?: boolean;
};
export const FilterPillWithoutOperator = ({
  icon,
  filterPillData,
  setFilterPillData,
  variant = 'outline',
  data,
  onDelete,
  showError = false
}: FilterPillWithoutOperatorProps) => {
  const onChange = (value: CascaderDropdownValueSelectorType[keyof CascaderDropdownValueSelectorType]) => {
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
      <StyledFilterPill variant={showError ? 'error' : variant}>
        <FilterPillLabel icon={icon} label={`${filterPillData.property.label}:`} />
        <FilterPillValueSelector selectorValue={filterPillData.value} dataType={data.dataType} choices={data.choices} onApply={onChange}>
          <Flex>
            <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
              <Text
                css={{
                  color: '$neutral900',
                  padding: '3px $4 3px $2',
                  ...(showError && {
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
