import { Box } from '@src/box';
import { Input } from '@src/input';
import { Button } from '@src/button';
import React, {
  useState, useRef, useEffect, useMemo
} from 'react';
import { Textarea } from '@src/textarea';
import { Flex } from '@src/flex';
import { Text } from '@src/text';
import { Checkbox } from '@src/checkbox';
import { Calendar, CalendarRange } from '@src/calendar';
import {
  DateValue, getLocalTimeZone, now, today
} from '@internationalized/date';
import { prefixClassName } from '@src/utils';
import { StyledItem } from '@src/cascader-dropdown/styled/StyledItem';
import { ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { CascaderDropdownBreadcrumb } from '@src/cascader-dropdown/cascader-dropdown-breadcrumb';
import { dataTypes } from './helpers/filter-value-dropdown-constants';
import { useFilterValueDropdownContext } from './use-value';

const FilterValueDropdownValueSelector = () => {
  const { selectedOperator } = useFilterValueDropdownContext();

  if (selectedOperator?.dataType === dataTypes.SINGLE_LINE_TEXT || selectedOperator?.dataType === dataTypes.NUMBER) {
    return <SingleLineTextInput />;
  }

  if (selectedOperator?.dataType === dataTypes.MULTI_LINE_TEXT) {
    return <MultiLineTextInput />;
  }

  if (selectedOperator?.dataType === dataTypes.SINGLE_SELECT || selectedOperator?.dataType === dataTypes.MULTI_SELECT) {
    return <SingleSelectInput />;
  }

  if (selectedOperator?.dataType === dataTypes.DATE || selectedOperator?.dataType === dataTypes.DATE_TIME_TIMEZONE) {
    return <DateInput />;
  }

  if (selectedOperator?.dataType === dataTypes.DATE_RANGE) {
    return <DateRangeInput />;
  }

  return (
    <Box />
  );
};

export default FilterValueDropdownValueSelector;

const DateRangeInput = () => {
  const {
    onApply, onCancel, selectedOperator, hasOperator
  } = useFilterValueDropdownContext();

  const [localValue, setLocalValue] = React.useState<{ start: DateValue, end: DateValue } | null>(null);

  const onApplyRange = () => {
    if (!localValue?.start || !localValue?.end) return;
    const start = localValue.start.toString();
    const end = localValue.end.toString();
    onApply({ start, end });
  };

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: selectedOperator?.value ?? '', label: selectedOperator?.label ?? '' }]}
        />
      )}
      <CalendarRange
        onChange={(newDateRange) => setLocalValue({ start: newDateRange.start, end: newDateRange.end })}
        value={localValue}
        compact
        showFooter={false}
        containerCSS={{
          border: 'none',
          borderRadius: 'none',
          margin: 'auto',
          [`.${prefixClassName('calendar__container')}`]: {
            paddingLeft: '$6',
            paddingRight: '$6'
          },
          [`.${prefixClassName('calendar__week-container')}`]: {
            borderBottom: 'none',
            height: '$8'
          },
          [`.${prefixClassName('calendar__week-container')} span`]: {
            width: '$8'
          },
          [`.${prefixClassName('calendar__days-container')}`]: {
            paddingTop: '0'
          },
          [`.${prefixClassName('calendar__day-container--day')} button`]: {
            height: '$8',
            width: '$8',
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__title')} button`]: {
            padding: '$1 $4',
            fontSize: '$sm',
            lineHeight: '$sm',
            height: 'auto'
          },
          [`.${prefixClassName('calendar__header')} > button, .${prefixClassName('calendar__years-view-nav-button--prev')}, .${prefixClassName('calendar__years-view-nav-button--next')}`]: {
            height: '$6',
            width: '$6',
            borderRadius: '$sm',
            [`.${prefixClassName('button__icon-box')}`]: {
              height: '$5',
              width: '$5'
            }
          },
          [`.${prefixClassName('calendar__header')}`]: {
            height: 'auto',
            paddingLeft: '$6',
            paddingRight: '$6'
          },
          [`.${prefixClassName('calendar__footer')}`]: {
            display: 'none'
          },
          [`.${prefixClassName('calendar__months-view-grid')}`]: {
            padding: '$6'
          },
          [`.${prefixClassName('calendar__months-view-button')}`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__years-view-grid')}`]: {
            padding: '$6'
          },
          [`.${prefixClassName('calendar__years-view-button')}`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__months-view-header')}`]: {
            height: 'auto',
            paddingTop: '0'
          },
          [`.${prefixClassName('calendar__years-view-header')}`]: {
            height: 'auto',
            paddingTop: '0'
          },
          [`.${prefixClassName('calendar__months-view-header')} p`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__years-view-header')} p`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__months-view')}`]: {
            minWidth: 'auto'
          },
          [`.${prefixClassName('calendar__years-view')}`]: {
            minWidth: 'auto'
          },
          [`.${prefixClassName('calendar__months-view-button')}`]: {
            height: '$14'
          },
          [`.${prefixClassName('calendar__years-view-button')}`]: {
            height: '$14'
          }
        }}
      />
      <Box css={{ height: '1px', width: '100%', backgroundColor: '$neutral200' }} />
      <Button
        size="xl"
        variant="ghost"
        css={{
          width: '100%', borderRadius: '0 0 $xl $xl', fontSize: '$sm', lineHeight: '$sm'
        }}
        onClick={onApplyRange}
        disabled={!localValue?.start || !localValue?.end}
      >
        Apply Range
      </Button>
    </Box>
  );
};

const DateInput = () => {
  const {
    selectedOperator, onApply, onCancel, hasOperator
  } = useFilterValueDropdownContext();

  const [localValue, setLocalValue] = useState<DateValue>(selectedOperator?.dataType === dataTypes.DATE_TIME_TIMEZONE ? now(getLocalTimeZone()) : today(getLocalTimeZone()));

  const onChange = (newDate: DateValue) => {
    setLocalValue(newDate);
  };

  const isDateTimeTimezone = selectedOperator?.dataType === dataTypes.DATE_TIME_TIMEZONE;

  const onApplyDate = () => {
    onApply(localValue.toString());
  };

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: selectedOperator?.value ?? '', label: selectedOperator?.label ?? '' }]}
        />
      )}
      <Calendar
        onChange={onChange}
        value={localValue}
        showTimePicker={isDateTimeTimezone ?? false}
        showTimezonePicker={isDateTimeTimezone ?? false}
        containerCSS={{
          border: 'none',
          borderRadius: 'none',
          [`.${prefixClassName('calendar__container')}`]: {
            paddingLeft: '$6',
            paddingRight: '$6'
          },
          [`.${prefixClassName('calendar__week-container')}`]: {
            borderBottom: 'none',
            height: '$8'
          },
          [`.${prefixClassName('calendar__days-container')}`]: {
            paddingTop: '0'
          },
          [`.${prefixClassName('calendar__day-container--day')} button`]: {
            height: '$8',
            width: '$8'
          },
          [`.${prefixClassName('calendar__title')} button`]: {
            padding: '$1 $4',
            fontSize: '$sm',
            lineHeight: '$sm',
            height: 'auto'
          },
          [`.${prefixClassName('calendar__header')} > button, .${prefixClassName('calendar__years-view-nav-button--prev')}, .${prefixClassName('calendar__years-view-nav-button--next')}`]: {
            height: '$6',
            width: '$6',
            borderRadius: '$sm',
            [`.${prefixClassName('button__icon-box')}`]: {
              height: '$5',
              width: '$5'
            }
          },
          [`.${prefixClassName('calendar__header')}`]: {
            height: 'auto',
            paddingLeft: '$6',
            paddingRight: '$6'
          },
          [`.${prefixClassName('calendar__footer')}`]: {
            display: 'none'
          },
          [`.${prefixClassName('calendar__months-view-grid')}`]: {
            padding: '$6'
          },
          [`.${prefixClassName('calendar__months-view-button')}`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__years-view-grid')}`]: {
            padding: '$6'
          },
          [`.${prefixClassName('calendar__years-view-button')}`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__months-view-header')}`]: {
            height: 'auto'
          },
          [`.${prefixClassName('calendar__years-view-header')}`]: {
            height: 'auto'
          },
          [`.${prefixClassName('calendar__months-view-header')} p`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__years-view-header')} p`]: {
            fontSize: '$sm',
            lineHeight: '$sm'
          },
          [`.${prefixClassName('calendar__months-view')}`]: {
            minWidth: 'auto'
          },
          [`.${prefixClassName('calendar__years-view')}`]: {
            minWidth: 'auto'
          },
          [`.${prefixClassName('calendar__months-view-button')}`]: {
            height: '$14'
          },
          [`.${prefixClassName('calendar__years-view-button')}`]: {
            height: '$14'
          }
        }}
      />
      <Box css={{ height: '1px', width: '100%', backgroundColor: '$neutral200' }} />
      <Button
        size="xl"
        variant="ghost"
        css={{
          width: '100%', borderRadius: '0 0 $xl $xl', fontSize: '$sm', lineHeight: '$sm'
        }}
        onClick={onApplyDate}
      >
        Apply
      </Button>
    </Box>
  );
};

const SingleLineTextInput = () => {
  const { selectedOperator, onCancel, onApply } = useFilterValueDropdownContext();

  const [value, setValue] = useState('');

  return (
    <Box>
      <Box css={{ padding: '$4' }}>
        <Input
          size="lg"
          placeholder={`${selectedOperator?.label ?? ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={selectedOperator?.dataType === dataTypes.NUMBER ? 'number' : 'text'}
          autoFocus
        />
      </Box>
      <InputFooter disabled={!value.trim()} onCancel={onCancel} onApply={() => onApply(value)} />
    </Box>
  );
};

const InputFooter = ({ disabled, onCancel, onApply }: { disabled: boolean, onCancel: () => void, onApply: () => void }) => {
  return (
    <Flex justifyContent="space-between" css={{ padding: '$4', borderTop: '1px solid $neutral100' }}>
      <Button size="md" variant="ghost" color="default" onClick={onCancel}>Cancel</Button>
      <Button size="md" variant="ghost" disabled={disabled} onClick={onApply}>Apply</Button>
    </Flex>
  );
};

const MultiLineTextInput = () => {
  const { selectedOperator, onCancel, onApply } = useFilterValueDropdownContext();

  const [value, setValue] = useState('');

  return (
    <Box>
      <Box css={{ padding: '$4' }}>
        <Textarea
          size="lg"
          placeholder={`${selectedOperator?.label ?? ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
          resize="none"
        />
      </Box>
      <InputFooter disabled={!value.trim()} onCancel={onCancel} onApply={() => onApply(value)} />
    </Box>
  );
};
const SingleSelectInput = () => {
  const {
    selectedOperator, data, onCancel, onApply, hasOperator
  } = useFilterValueDropdownContext();

  const [checkedSet, setCheckedSet] = useState<Set<string>>(new Set());

  const choices = (data.values && selectedOperator?.valuesKey) ? data.values[selectedOperator?.valuesKey] : [];

  const isMultiSelect = selectedOperator?.dataType === dataTypes.MULTI_SELECT;

  const onClick = (value: string) => {
    if (isMultiSelect) {
      setCheckedSet((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(value)) newSet.delete(value);
        else newSet.add(value);

        return newSet;
      });
    } else {
      onApply(value);
    }
  };

  return (
    <Box>
      {!isMultiSelect && hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: selectedOperator?.value ?? '', label: selectedOperator?.label ?? '' }]}
        />
      )}
      <SearchableList
        choices={choices}
        isMultiSelect={isMultiSelect}
        onClick={onClick}
        checkedSet={checkedSet}
      />
      {isMultiSelect && <InputFooter disabled={!checkedSet.size} onCancel={onCancel} onApply={() => onApply(Array.from(checkedSet))} />}
    </Box>
  );
};

export const SearchableList = ({
  choices,
  isMultiSelect,
  onClick,
  checkedSet = new Set(),
  hasArrow = false
}: {
  choices: { label: string; value: string }[];
  isMultiSelect: boolean;
  onClick: (value: string, choice: { label: string; value: string }) => void;
  checkedSet?: Set<string>;
  hasArrow?: boolean;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChoices = useMemo(() => choices.filter((choice) => choice.label?.toLowerCase().includes(searchQuery.toLowerCase())), [choices, searchQuery]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      if (focusedIndex < filteredChoices.length - 1) {
        setFocusedIndex(focusedIndex + 1);
      } else {
        setFocusedIndex(filteredChoices.length - 1);
      }
      e.preventDefault();
    }

    if (e.key === 'ArrowUp') {
      if (focusedIndex > 0) {
        setFocusedIndex(focusedIndex - 1);
      } else {
        setFocusedIndex(0);
      }
      e.preventDefault();
    }

    if (e.key === 'Enter') {
      if (isMultiSelect) {
        onClick(filteredChoices[focusedIndex].value, filteredChoices[focusedIndex]);
      }
      e.preventDefault();
    }
  };

  const onMouseEnter = (index: number) => {
    setFocusedIndex(index);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0 && focusedIndex >= filteredChoices.length) {
      setFocusedIndex(filteredChoices.length - 1);
    }
  }, [filteredChoices, searchQuery]);

  return (
    <Box>
      <Input
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        value={searchQuery}
        ref={inputRef}
        autoFocus
        css={{
          '&[data-testid="input"], &[data-testid="input"]:hover, &[data-testid="input"]:focus': {
            borderTopWidth: '0',
            borderLeftWidth: '0',
            borderRightWidth: '0',
            borderBottomWidth: '1px',
            borderBottomColor: '$neutral100',
            boxShadow: 'none',
            '&::placeholder': {
              color: '$neutral700'
            },
            '&::-ms-input-placeholder': {
              color: '$neutral700'
            }
          },
          borderRadius: '$xl $xl 0 0'
        }}
        placeholder="Search"
        size="lg"
        onKeyDown={onKeyDown}
      />
      <Box
        as="ul"
        css={{ paddingTop: '$4', paddingBottom: '$4' }}
        tabIndex={-1}
      >
        {filteredChoices.map((choice, index) => {
          return (
            <StyledItem
              key={choice.value}
              hovered={focusedIndex === index}
              selected={checkedSet.has(choice.value)}
              onMouseEnter={() => onMouseEnter(index)}
              css={{
                justifyContent: 'space-between'
              }}
              onClick={() => onClick(choice.value, choice)}
            >
              <Flex alignItems="center" css={{ overflow: 'hidden' }} gap="$4">
                {isMultiSelect && <Checkbox checked={checkedSet.has(choice.value)} />}
                <Text
                  css={{ color: '$neutral900' }}
                  truncate
                >
                  {choice.label}
                </Text>
              </Flex>
              {hasArrow && (
                <Box
                  css={{
                    lineHeight: '0', color: '$neutral600', minWidth: '$5'
                  }}
                  className={prefixClassName('cascader-dropdown__item-icon')}
                >
                  <ChevronRightIcon size={20} />
                </Box>
              )}
            </StyledItem>
          );
        })}
      </Box>
    </Box>
  );
};
