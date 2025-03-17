import { Box } from '@src/box';
import { Input } from '@src/input';
import { Button } from '@src/button';
import React, { useState, useRef, useEffect } from 'react';
import { Textarea } from '@src/textarea';
import { Flex } from '@src/flex';
import { Text } from '@src/text';
import { Checkbox } from '@src/checkbox';
import { Calendar, CalendarRange } from '@src/calendar';
import { DateValue, parseDate } from '@internationalized/date';
import { prefixClassName } from '@src/utils';
import { dataTypes } from './helpers/cascader-dropdown-constants';
import { useCascaderDropdownContext } from './use-value';
import { StyledItem } from './styled/StyledItem';

const CascaderDropdownValueSelector = () => {
  const { selectedNode } = useCascaderDropdownContext();

  if (selectedNode?.options?.dataType === dataTypes.SINGLE_LINE_TEXT || selectedNode?.options?.dataType === dataTypes.NUMBER) {
    return <SingleLineTextInput />;
  }

  if (selectedNode?.options?.dataType === dataTypes.MULTI_LINE_TEXT) {
    return <MultiLineTextInput />;
  }

  if (selectedNode?.options?.dataType === dataTypes.SINGLE_SELECT || selectedNode?.options?.dataType === dataTypes.MULTI_SELECT) {
    return <SingleSelectInput />;
  }

  if (selectedNode?.options?.dataType === dataTypes.DATE || selectedNode?.options?.dataType === dataTypes.DATE_TIME_TIMEZONE) {
    return <DateInput />;
  }

  if (selectedNode?.options?.dataType === dataTypes.DATE_RANGE) {
    return <DateRangeInput />;
  }

  return (
    <Box />
  );
};

export default CascaderDropdownValueSelector;

const DateRangeInput = () => {
  // const { selectedNode } = useCascaderDropdownContext();

  const [localValue, setLocalValue] = React.useState<{ start: DateValue, end: DateValue }>({
    start: parseDate('2023-07-12'),
    end: parseDate('2023-07-20')
  });

  return (
    <Box>
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
      >
        Apply Range
      </Button>
    </Box>
  );
};

const DateInput = () => {
  const { selectedNode } = useCascaderDropdownContext();

  const [localValue, setLocalValue] = useState<DateValue | null>(null);

  const onChange = (newDate: DateValue) => {
    setLocalValue(newDate);
  };

  const isDateTimeTimezone = selectedNode?.options?.dataType === dataTypes.DATE_TIME_TIMEZONE;

  return (
    <Box>
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
      >
        Apply
      </Button>
    </Box>
  );
};

const SingleLineTextInput = () => {
  const { selectedNode } = useCascaderDropdownContext();

  const [value, setValue] = useState('');

  return (
    <Box>
      <Box css={{ padding: '$4' }}>
        <Input
          size="lg"
          placeholder={`${selectedNode?.label}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={selectedNode?.options?.dataType === dataTypes.NUMBER ? 'number' : 'text'}
          autoFocus
        />
      </Box>
      <InputFooter disabled={!value.trim()} />
    </Box>
  );
};

const InputFooter = ({ disabled }: { disabled: boolean }) => {
  return (
    <Flex justifyContent="space-between" css={{ padding: '$4', borderTop: '1px solid $neutral100' }}>
      <Button size="md" variant="ghost" color="default">Cancel</Button>
      <Button size="md" variant="ghost" disabled={disabled}>Apply</Button>
    </Flex>
  );
};

const MultiLineTextInput = () => {
  const { selectedNode } = useCascaderDropdownContext();

  const [value, setValue] = useState('');

  return (
    <Box>
      <Box css={{ padding: '$4' }}>
        <Textarea
          size="lg"
          placeholder={`${selectedNode?.label}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={4}
          resize="none"
        />
      </Box>
      <InputFooter disabled={!value.trim()} />
    </Box>
  );
};

const SearchableList = ({
  choices,
  isMultiSelect,
  onClick,
  checkedSet = new Set()
}: {
  choices: { label: string; value: string }[];
  isMultiSelect: boolean;
  onClick: (value: string) => void;
  checkedSet?: Set<string>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChoices = choices.filter((choice) => choice.label.toLowerCase().includes(searchQuery.toLowerCase()));

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
        onClick(filteredChoices[focusedIndex].value);
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
              onClick={() => onClick(choice.value)}
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
            </StyledItem>
          );
        })}
      </Box>
    </Box>
  );
};

const SingleSelectInput = () => {
  const { selectedNode } = useCascaderDropdownContext();

  // const inputRef = useRef<HTMLInputElement>(null);

  // const [focusedIndex, setFocusedIndex] = useState<number>(0);
  // const [searchQuery, setSearchQuery] = useState('');
  const [checkedSet, setCheckedSet] = useState<Set<string>>(new Set());

  const choices = selectedNode?.options?.choices ?? [];

  // const filteredChoices = choices.filter((choice) => choice.label.toLowerCase().includes(searchQuery.toLowerCase()));

  const isMultiSelect = selectedNode?.options?.dataType === dataTypes.MULTI_SELECT;

  // const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'ArrowDown') {
  //     if (focusedIndex < filteredChoices.length - 1) {
  //       setFocusedIndex(focusedIndex + 1);
  //     } else {
  //       setFocusedIndex(filteredChoices.length - 1);
  //     }
  //     e.preventDefault();
  //   }

  //   if (e.key === 'ArrowUp') {
  //     if (focusedIndex > 0) {
  //       setFocusedIndex(focusedIndex - 1);
  //     } else {
  //       setFocusedIndex(0);
  //     }
  //     e.preventDefault();
  //   }

  //   if (e.key === 'Enter') {
  //     if (isMultiSelect) {
  //       onClick(filteredChoices[focusedIndex].value);
  //     }
  //     e.preventDefault();
  //   }
  // };

  // const onMouseEnter = (index: number) => {
  //   setFocusedIndex(index);
  // };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  // Reset focused index when search query changes
  // useEffect(() => {
  //   setFocusedIndex(0);
  // }, [searchQuery]);

  const onClick = (value: string) => {
    if (isMultiSelect) {
      setCheckedSet((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(value)) newSet.delete(value);
        else newSet.add(value);

        return newSet;
      });
    }
  };

  return (
    <SearchableList
      choices={choices}
      isMultiSelect={isMultiSelect}
      onClick={onClick}
      checkedSet={checkedSet}
    />
  );

  // return (
  //   <Box>
  //     <Input
  //       onChange={(e) => {
  //         setSearchQuery(e.target.value);
  //       }}
  //       value={searchQuery}
  //       ref={inputRef}
  //       autoFocus
  //       css={{
  //         '&[data-testid="input"], &[data-testid="input"]:hover, &[data-testid="input"]:focus': {
  //           borderTopWidth: '0',
  //           borderLeftWidth: '0',
  //           borderRightWidth: '0',
  //           borderBottomWidth: '1px',
  //           borderBottomColor: '$neutral100',
  //           boxShadow: 'none',
  //           '&::placeholder': {
  //             color: '$neutral700'
  //           },
  //           '&::-ms-input-placeholder': {
  //             color: '$neutral700'
  //           }
  //         },
  //         borderRadius: '$xl $xl 0 0'
  //       }}
  //       placeholder="Search"
  //       size="lg"
  //       onKeyDown={onKeyDown}
  //     />
  //     <Box
  //       as="ul"
  //       css={{ paddingTop: '$4', paddingBottom: '$4' }}
  //       tabIndex={-1}
  //     >
  //       {filteredChoices.map((choice, index) => {
  //         return (
  //           <StyledItem
  //             key={choice.value}
  //             hovered={focusedIndex === index}
  //             selected={checkedSet.has(choice.value)}
  //             onMouseEnter={() => onMouseEnter(index)}
  //             css={{
  //               justifyContent: 'space-between'
  //             }}
  //             onClick={() => onClick(choice.value)}
  //           >
  //             <Flex alignItems="center" css={{ overflow: 'hidden' }} gap="$4">
  //               {isMultiSelect && <Checkbox checked={checkedSet.has(choice.value)} />}
  //               <Text
  //                 css={{ color: '$neutral900' }}
  //                 truncate
  //               >
  //                 {choice.label}
  //               </Text>
  //             </Flex>
  //           </StyledItem>
  //         );
  //       })}
  //     </Box>
  //   </Box>
  // );
};
