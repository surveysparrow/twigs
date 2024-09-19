import { CalendarDate } from '@internationalized/date';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@sparrowengg/twigs-react-icons';
import React, { useId, useMemo, useState } from 'react';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Box } from '../box';
import { Button, IconButton } from '../button';
import { Flex } from '../flex';
import { Text } from '../text';
import { CALENDAR_VIEW } from './calendar';
import { MonthYearGridContainer } from './calendar-commons';
import { CalendarHeader } from './calendar-header';
import {
  CALENDAR_SIZE_TO_FONT_SIZE,
  CALENDAR_SIZE_TO_WIDTH,
  CALENDAR_SIZE_TO_YEAR_MONTH_BTN_HEIGHT,
  useCalendarContext
} from './calendar-utils';

export const CalendarYearsView = ({
  state,
  range,
  onYearSelect,
  setCurrentCalendarView
}: {
  state: RangeCalendarState | CalendarState;
  range?: 'start' | 'end';
  setCurrentCalendarView: (view: keyof typeof CALENDAR_VIEW) => void;
  onYearSelect?: (date: CalendarDate) => void;
}) => {
  const numYears = 12;
  const [currentYearInView, setCurrentYearInView] = useState(
    state.focusedDate.year
  );

  const dateValue = useMemo(() => {
    if (range && (state as RangeCalendarState).value?.[range]) {
      return (state as RangeCalendarState).value[range];
    }

    return (state as CalendarState).value;
  }, [state, range]);

  const yearsContainerId = useId();

  const calendarContext = useCalendarContext();

  const generateYears = (selectedYear: number) => {
    const baseYear = selectedYear - (selectedYear % numYears) - 1;

    return Array.from({ length: numYears }).map((_, index) => {
      const year = baseYear + index;
      const date = state.focusedDate.set({ year });
      return date;
    });
  };

  const years = useMemo(
    () => generateYears(currentYearInView),
    [currentYearInView]
  );

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();

      const nextYear = years[index + 1];
      if (nextYear && !state.isInvalid(nextYear)) {
        const focusedDate = state.focusedDate.set({
          year: nextYear.year
        });
        state.setFocusedDate(focusedDate);
        const nextButton = e.currentTarget
          .nextElementSibling as HTMLButtonElement;
        if (nextButton) {
          nextButton.setAttribute('tabindex', '0');
          nextButton.focus();
          e.currentTarget.setAttribute('tabindex', '-1');
        }
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();

      const prevYear = years[index - 1];
      if (prevYear && !state.isInvalid(prevYear)) {
        const focusedDate = state.focusedDate.set({
          year: prevYear.year
        });

        state.setFocusedDate(focusedDate);
        const prevButton = e.currentTarget
          .previousElementSibling as HTMLButtonElement;

        if (prevButton) {
          prevButton.setAttribute('tabindex', '0');
          prevButton.focus();
          e.currentTarget.setAttribute('tabindex', '-1');
        }
      }
    }
  };

  const getButtonTabIndex = (index: number, year: number) => {
    if (dateValue?.year) {
      return dateValue.year === year ? 0 : -1;
    }
    return index === 0 ? 0 : -1;
  };

  return (
    <Box
      css={{
        minWidth: CALENDAR_SIZE_TO_WIDTH[calendarContext.size]
      }}
    >
      <CalendarHeader
        calendarSize={calendarContext.size}
        css={{
          borderBottom: '1px solid $neutral100'
        }}
      >
        <Flex
          css={{
            width: '100%'
          }}
          alignItems="center"
        >
          <IconButton
            icon={<ChevronLeftIcon />}
            color="bright"
            size="lg"
            disabled={state.isInvalid(
              state.focusedDate.set({ year: currentYearInView - numYears })
            )}
            onClick={() => {
              setCurrentYearInView((prev) => prev - numYears);
            }}
          />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            css={{
              flex: 1
            }}
          >
            <Text
              size={CALENDAR_SIZE_TO_FONT_SIZE[calendarContext.size]}
              weight="bold"
              css={{
                color: '$neutral800'
              }}
            >
              Choose Year
            </Text>
            <Text
              size={CALENDAR_SIZE_TO_FONT_SIZE[calendarContext.size]}
              weight="bold"
              css={{
                color: '$neutral900',
                padding: '0 $6'
              }}
            >
              {years[0].year}
              {' '}
              -
              {years.at(-1)!.year}
            </Text>
          </Flex>
          <IconButton
            icon={<ChevronRightIcon />}
            color="bright"
            size="lg"
            disabled={state.isInvalid(
              state.focusedDate.set({ year: currentYearInView + numYears })
            )}
            onClick={() => {
              setCurrentYearInView((prev) => prev + numYears);
            }}
          />
        </Flex>
      </CalendarHeader>
      <MonthYearGridContainer
        calendarSize={calendarContext.size}
        id={yearsContainerId}
      >
        {years.map((date, i) => (
          <Button
            key={date.year}
            color={dateValue?.year === date.year ? 'default' : 'bright'}
            data-yearId={date.year}
            tabIndex={getButtonTabIndex(i, date.year)}
            disabled={state.isInvalid(date)}
            css={{
              padding: '$6',
              height:
                CALENDAR_SIZE_TO_YEAR_MONTH_BTN_HEIGHT[calendarContext.size],
              ...(dateValue?.year === date.year && {
                color: '$secondary600'
              })
            }}
            onKeyDown={(e) => handleKeyDown(e, i)}
            size={calendarContext.size}
            onClick={() => {
              setCurrentCalendarView(CALENDAR_VIEW.GRID);
              if (!range) {
                (state as CalendarState).selectDate(date);
              }
              state.setFocusedDate(date);
              if (onYearSelect) {
                onYearSelect(date);
              }
            }}
          >
            {date.year}
          </Button>
        ))}
      </MonthYearGridContainer>
    </Box>
  );
};
