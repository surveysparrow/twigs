import { CloseCircleFillIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { Flex } from '@src/flex';
import { Tooltip, TooltipProvider } from '@src/tooltip';
import { styled } from '@src/stitches.config';
import { Text } from '@src/text';
import { prefixClassName } from '@src/utils';
import React from 'react';
import { dataTypes, FilterValueItemType, FilterValueOperatorType } from './filter-value-dropdown/helpers/filter-value-dropdown-constants';
import { FilterValueDropdown } from './filter-value-dropdown/filter-value-dropdown';

export type FilterPillProps = {
  icon?: React.ReactNode;
  value: FilterPillValueType;
  setValue: (value: FilterPillValueType) => void;
  hasOperator?: boolean;
  variant?: 'filled' | 'outline';
  conditionData: FilterValueItemType;
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
  hasOperator = true,
  variant = 'outline',
  conditionData
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
        <Text weight="medium" css={{ color: hasOperator ? '$neutral900' : '$neutral700', maxWidth: '$25' }} truncate>{value.label}</Text>
      </Flex>

      <FilterValueDropdown data={conditionData} onChange={onChange} hasOperator={hasOperator}>
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
      </FilterValueDropdown>
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
