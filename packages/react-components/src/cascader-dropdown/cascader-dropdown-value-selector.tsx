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
  DateValue, getLocalTimeZone, now, today, parseDate
} from '@internationalized/date';
import { prefixClassName } from '@src/utils';
import { ChevronRightIcon, QuestionCircleIcon } from '@sparrowengg/twigs-react-icons';
import { CascaderDropdownValueSelectorType, dataTypes } from './helpers/cascader-dropdown-constants';
import { StyledItem } from './styled/StyledItem';
import { CascaderDropdownBreadcrumb } from './cascader-dropdown-breadcrumb';
import { CascaderDropdownNode } from './cascader-dropdown-node';

type CascaderDropdownValueSelectorProps = {
  onApply: (value: CascaderDropdownValueSelectorType[keyof CascaderDropdownValueSelectorType]) => void,
  onCancel: () => void,
  hasOperator: boolean,
  selectedNode: CascaderDropdownNode,
  selectorValue?: CascaderDropdownValueSelectorType
}

const CascaderDropdownValueSelector = ({
  onApply, onCancel, hasOperator, selectedNode, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  if (selectedNode?.options?.dataType === dataTypes.SINGLE_LINE_TEXT || selectedNode?.options?.dataType === dataTypes.NUMBER) {
    return <SingleLineTextInput selectedNode={selectedNode} onApply={onApply} onCancel={onCancel} hasOperator={hasOperator} selectorValue={selectorValue} />;
  }

  if (selectedNode?.options?.dataType === dataTypes.MULTI_LINE_TEXT) {
    return <MultiLineTextInput selectedNode={selectedNode} onApply={onApply} onCancel={onCancel} hasOperator={hasOperator} selectorValue={selectorValue} />;
  }

  if (selectedNode?.options?.dataType === dataTypes.SINGLE_SELECT) {
    return <SingleSelectInput selectedNode={selectedNode} onCancel={onCancel} onApply={onApply} hasOperator={hasOperator} selectorValue={selectorValue} />;
  }

  if (selectedNode?.options?.dataType === dataTypes.MULTI_SELECT) {
    return <MultiSelectInput selectedNode={selectedNode} onCancel={onCancel} onApply={onApply} hasOperator={hasOperator} selectorValue={selectorValue} />;
  }

  if (selectedNode?.options?.dataType === dataTypes.DATE || selectedNode?.options?.dataType === dataTypes.DATE_TIME_TIMEZONE) {
    return <DateInput selectedNode={selectedNode} onApply={onApply} onCancel={onCancel} hasOperator={hasOperator} selectorValue={selectorValue} />;
  }

  if (selectedNode?.options?.dataType === dataTypes.DATE_RANGE) {
    return <DateRangeInput selectedNode={selectedNode} onApply={onApply} onCancel={onCancel} hasOperator={hasOperator} selectorValue={selectorValue} />;
  }

  return (
    <Box />
  );
};

export default CascaderDropdownValueSelector;

export const DateRangeInput = ({
  selectedNode, onApply, onCancel, hasOperator, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  const [localValue, setLocalValue] = React.useState<{ start: DateValue, end: DateValue } | null>(
    selectorValue?.DATE_RANGE?.start && selectorValue?.DATE_RANGE?.end
      ? { start: parseDate(selectorValue.DATE_RANGE.start), end: parseDate(selectorValue.DATE_RANGE.end) }
      : null
  );

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
          foldersSelectionPath={[{ value: `${selectedNode?.value}`, label: `${selectedNode?.label}` }]}
        />
      )}
      <CalendarRange
        onChange={(newDateRange) => setLocalValue({ start: newDateRange.start, end: newDateRange.end })}
        value={localValue}
        compact
        size="sm"
        containerCSS={{
          border: 'none'
        }}
        renderFooter={() => {
          return (
            <Button
              size="xl"
              variant="ghost"
              css={{
                width: '100%',
                borderRadius: '0 0 $xl $xl',
                fontSize: '$sm',
                lineHeight: '$sm',
                borderTop: '1px solid $neutral200'
              }}
              onClick={onApplyRange}
              disabled={!localValue?.start || !localValue?.end}
            >
              Apply Range
            </Button>
          );
        }}
      />
    </Box>
  );
};

const DateInput = ({
  selectedNode, onApply, onCancel, hasOperator, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  const [localValue, setLocalValue] = useState<DateValue>(() => {
    if (selectorValue?.DATE) {
      return parseDate(selectorValue.DATE);
    }
    return selectedNode.options.dataType === dataTypes.DATE_TIME_TIMEZONE
      ? now(getLocalTimeZone())
      : today(getLocalTimeZone());
  });

  const onChange = (newDate: DateValue) => {
    setLocalValue(newDate);
  };

  const isDateTimeTimezone = selectedNode.options.dataType === dataTypes.DATE_TIME_TIMEZONE;

  const onApplyDate = () => {
    onApply(localValue.toString());
  };

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: `${selectedNode?.value}`, label: `${selectedNode?.label}` }]}
        />
      )}
      <Calendar
        onChange={onChange}
        value={localValue}
        showTimePicker={isDateTimeTimezone ?? false}
        showTimezonePicker={isDateTimeTimezone ?? false}
        size="sm"
        containerCSS={{
          border: 'none'
        }}
        renderFooter={() => {
          return (
            <Button
              size="xl"
              variant="ghost"
              css={{
                width: '100%',
                borderRadius: '0 0 $xl $xl',
                fontSize: '$sm',
                lineHeight: '$sm',
                borderTop: '1px solid $neutral200'
              }}
              onClick={onApplyDate}
            >
              Apply
            </Button>
          );
        }}
      />
    </Box>
  );
};

const SingleLineTextInput = ({
  selectedNode, onApply, onCancel, hasOperator, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  const [value, setValue] = useState(selectorValue?.SINGLE_LINE_TEXT ?? '');

  const regex = selectedNode.options.regex ? new RegExp(selectedNode.options.regex) : null;
  const isRegexValid = regex ? regex.test(value) : true;

  const handleSubmit = () => {
    if (value.length === 0) return;
    if (selectedNode.options.dataType === dataTypes.NUMBER) {
      if (Number.isNaN(Number(value))) return;
    }
    if (regex && !isRegexValid) return;
    onApply(value);
  };

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: `${selectedNode?.value}`, label: `${selectedNode?.label}` }]}
        />
      )}
      <Box css={{ padding: '$4' }}>
        <Input
          size="lg"
          placeholder={`${selectedNode?.label ?? ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={selectedNode.options.dataType === dataTypes.NUMBER ? 'number' : 'text'}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
      </Box>
      <InputFooter disabled={!value.trim() || !isRegexValid} onCancel={onCancel} onApply={handleSubmit} />
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

const MultiLineTextInput = ({
  selectedNode, onApply, onCancel, hasOperator, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  const [value, setValue] = useState(selectorValue?.MULTI_LINE_TEXT ?? '');

  const regex = selectedNode.options.regex ? new RegExp(selectedNode.options.regex) : null;
  const isRegexValid = regex ? regex.test(value) : true;

  const handleSubmit = () => {
    if (value.length === 0) return;
    if (regex && !isRegexValid) return;
    onApply(value);
  };

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: `${selectedNode?.value}`, label: `${selectedNode?.label}` }]}
        />
      )}
      <Box css={{ padding: '$4' }}>
        <Textarea
          size="lg"
          placeholder={`${selectedNode?.label ?? ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
          resize="none"
          autoFocus
        />
      </Box>
      <InputFooter disabled={!value.trim() || !isRegexValid} onCancel={onCancel} onApply={handleSubmit} />
    </Box>
  );
};

const SingleSelectInput = ({
  selectedNode, onCancel, onApply, hasOperator, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  const choices = selectedNode.options.choices ?? [];

  const onClick = (value: string) => {
    onApply(value);
  };

  const checkedSet = new Set(selectorValue?.SINGLE_SELECT ? [selectorValue.SINGLE_SELECT] : []);

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: `${selectedNode?.value}`, label: `${selectedNode?.label}` }]}
        />
      )}
      <SearchableList
        choices={choices}
        isMultiSelect={false}
        onClick={onClick}
        checkedSet={checkedSet}
      />
    </Box>
  );
};

const MultiSelectInput = ({
  selectedNode, onCancel, hasOperator, onApply, selectorValue
}: CascaderDropdownValueSelectorProps) => {
  const [checkedSet, setCheckedSet] = useState<Set<string>>(new Set(selectorValue?.MULTI_SELECT ?? []));

  const choices = selectedNode.options.choices ?? [];

  const onClick = (value: string) => {
    setCheckedSet((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) newSet.delete(value);
      else newSet.add(value);

      return newSet;
    });
  };

  return (
    <Box>
      {hasOperator && (
        <CascaderDropdownBreadcrumb
          focusNthColumn={onCancel}
          showBackButton={false}
          foldersSelectionPath={[{ value: `${selectedNode?.value}`, label: `${selectedNode?.label}` }]}
        />
      )}
      <SearchableList
        choices={choices}
        isMultiSelect
        onClick={onClick}
        checkedSet={checkedSet}
      />
      <InputFooter disabled={!checkedSet.size} onCancel={onCancel} onApply={() => onApply(Array.from(checkedSet))} />
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
      onClick(filteredChoices[focusedIndex].value, filteredChoices[focusedIndex]);
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
      {filteredChoices.length === 0 && (
        <Flex css={{ height: '112px', color: '$neutral600' }} alignItems="center" justifyContent="center" flexDirection="column" gap="$4">
          <QuestionCircleIcon size={20} />
          <Text css={{ color: '$neutral800', marginBottom: '0' }}>No results found!</Text>
        </Flex>
      )}
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
