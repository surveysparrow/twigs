import { CloseCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { Flex } from '@src/flex';
import { Tooltip, TooltipProvider } from '@src/tooltip';
import { styled } from '@src/stitches.config';
import { Text } from '@src/text';
import { prefixClassName } from '@src/utils';
import React from 'react';
import { CascaderDropdown } from '@src/cascader-dropdown';
import { CascaderDropdownItemType, CascaderDropdownOperatorType } from '@src/cascader-dropdown/helpers/cascader-dropdown-constants';
import { dataTypes, FilterValueOperatorType } from './filter-value-dropdown/helpers/filter-value-dropdown-constants';
import FilterPillValueSelector from './filter-pill-value-selector';

export type FilterPillProps = {
  icon?: React.ReactNode;
  value: FilterPillValueType;
  setValue: (value: FilterPillValueType) => void;
  variant?: 'filled' | 'outline';
  cascaderDropdownData: CascaderDropdownItemType[];
};

export type FilterPillValueType = {
  operator: FilterValueOperatorType | null;
  label: string;
  value: Record<string, any> | null;
};

const getDisplayValue = (value: FilterPillValueType) => {
  if (!value.operator) return null;
  const displayValue = value.value?.[value.operator.dataType];
  if (typeof displayValue === 'string') return displayValue;
  if (Array.isArray(displayValue)) return displayValue.join(', ');
  if (value.operator.dataType === dataTypes.DATE_RANGE && typeof displayValue === 'object' && displayValue !== null) {
    return `${displayValue.start} - ${displayValue.end}`;
  }
  return null;
};

export const FilterPill = ({
  icon,
  value,
  setValue,
  variant = 'outline',
  cascaderDropdownData
}: FilterPillProps) => {
  const onChange = (operator: FilterValueOperatorType, newValue: Record<string, any>) => {
    setValue({ ...value, operator, value: newValue });
  };

  return (
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
        <Text weight="medium" css={{ color: '$neutral900', maxWidth: '$25' }} truncate>{value.label}</Text>
      </Flex>
      {/* {!isFilterValueDropdownEnabled && ( */}
      <CascaderDropdown
        data={cascaderDropdownData}
        onChange={console.log}
      >
        <Flex>
          {!value.operator?.value && (
            <StyledValueButton>
              <Text css={{ color: '$neutral700', padding: '3px $4 3px $1' }}>Choose Condition</Text>
            </StyledValueButton>
          )}
          {value.operator?.value && (
            <StyledValueButton>
              <Text css={{ color: '$neutral700', padding: '3px $1 3px $1' }}>{value.operator?.label}</Text>
            </StyledValueButton>
          )}
          {value.operator?.value && (
            <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
              <Text css={{ color: '$neutral900', padding: '3px $4 3px $2' }} weight="medium">{getDisplayValue(value) ?? 'Choose Value'}</Text>
            </StyledValueButton>
          )}
          {/* {hasOperator && !value.operator?.value && (
            <StyledValueButton>
              <Text css={{ color: '$neutral700', padding: '3px $4 3px $1' }}>Choose Condition</Text>
            </StyledValueButton>
          )}
          {hasOperator && value.operator?.value && (
            <StyledValueButton>
              <Text css={{ color: '$neutral700', padding: '3px $1 3px $1' }}>{value.operator?.label}</Text>
            </StyledValueButton>
          )}
          {(!hasOperator || (hasOperator && value.operator?.value)) && (
            <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
              <Text css={{ color: '$neutral900', padding: '3px $4 3px $2' }} weight="medium">{getDisplayValue(value) ?? 'Choose Value'}</Text>
            </StyledValueButton>
          )} */}
        </Flex>
      </CascaderDropdown>
      {/* {isFilterValueDropdownEnabled && (
        <FilterPillValueSelector dataType={value.operator?.dataType} choices={value.operator?.choices}>
          <Flex>
            {hasOperator && !value.operator?.value && (
              <StyledValueButton>
                <Text css={{ color: '$neutral700', padding: '3px $4 3px $1' }}>Choose Condition</Text>
              </StyledValueButton>
            )}
            {hasOperator && value.operator?.value && (
              <StyledValueButton>
                <Text css={{ color: '$neutral700', padding: '3px $1 3px $1' }}>{value.operator?.label}</Text>
              </StyledValueButton>
            )}
            {(!hasOperator || (hasOperator && value.operator?.value)) && (
              <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
                <Text css={{ color: '$neutral900', padding: '3px $4 3px $2' }} weight="medium">{getDisplayValue(value) ?? 'Choose Value'}</Text>
              </StyledValueButton>
            )}
          </Flex>
        </FilterPillValueSelector>
      )} */}
      <TooltipProvider>
        <Tooltip content="Remove">
          <StyledCloseButton className={prefixClassName('filter-pill__close-button')}>
            <CloseCircleFillIcon size={16} />
          </StyledCloseButton>
        </Tooltip>
      </TooltipProvider>
    </StyledFilterPill>
  );
};

type FilterPillWithoutOperatorProps = {
  icon?: React.ReactNode;
  value: FilterPillValueType;
  setValue: (value: FilterPillValueType) => void;
  variant?: 'filled' | 'outline';
  data: CascaderDropdownOperatorType;
};
export const FilterPillWithoutOperator = ({
  icon,
  value,
  setValue,
  variant = 'outline',
  data
}: FilterPillWithoutOperatorProps) => {
  const onChange = (operator: FilterValueOperatorType, newValue: Record<string, any>) => {
    setValue({ ...value, operator, value: newValue });
  };

  return (
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
        <Text weight="medium" css={{ color: '$neutral700', maxWidth: '$25' }} truncate>{value.label}</Text>
      </Flex>
      <FilterPillValueSelector dataType={data.dataType} choices={data.choices}>
        <Flex>
          <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
            <Text css={{ color: '$neutral900', padding: '3px $4 3px $2' }} weight="medium">{getDisplayValue(value) ?? 'Choose Value'}</Text>
          </StyledValueButton>
        </Flex>
      </FilterPillValueSelector>
      <TooltipProvider>
        <Tooltip content="Remove">
          <StyledCloseButton className={prefixClassName('filter-pill__close-button')}>
            <CloseCircleFillIcon size={16} />
          </StyledCloseButton>
        </Tooltip>
      </TooltipProvider>
    </StyledFilterPill>
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

// <FilterValueDropdown data={conditionData} onChange={onChange} hasOperator={hasOperator}>
//   <Flex>
//     {hasOperator && !value.operator?.value && (
//       <StyledValueButton>
//         <Text css={{ color: '$neutral700', padding: '3px $4 3px $1' }}>Choose Condition</Text>
//       </StyledValueButton>
//     )}
//     {hasOperator && value.operator?.value && (
//       <StyledValueButton>
//         <Text css={{ color: '$neutral700', padding: '3px $1 3px $1' }}>{value.operator?.label}</Text>
//       </StyledValueButton>
//     )}
//     {(!hasOperator || (hasOperator && value.operator?.value)) && (
//       <StyledValueButton css={{ borderTopRightRadius: '$lg', borderBottomRightRadius: '$lg' }}>
//         <Text css={{ color: '$neutral900', padding: '3px $4 3px $2' }} weight="medium">{getDisplayValue(value) ?? 'Choose Value'}</Text>
//       </StyledValueButton>
//     )}
//   </Flex>
// </FilterValueDropdown>
