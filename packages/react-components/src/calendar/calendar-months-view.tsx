import { CalendarDate } from '@internationalized/date';
import React, {
  useEffect, useId, useMemo, useRef
} from 'react';
import { useDateFormatter } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Box } from '../box';
import { Button } from '../button';
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

export const CalendarMonthsView = ({
  state,
  range,
  onMonthSelect,
  setCurrentCalendarView
}: {
  state: RangeCalendarState | CalendarState;
  range?: 'start' | 'end';
  setCurrentCalendarView: (view: keyof typeof CALENDAR_VIEW) => void;
  onMonthSelect?: (date: CalendarDate) => void;
}) => {
  const monthFormatter = useDateFormatter({
    month: 'short',
    timeZone: state.timeZone
  });

  const monthsContainerId = useId();

  const calendarContext = useCalendarContext();

  const dateValue = useMemo(() => {
    if (range && (state as RangeCalendarState).value?.[range]) {
      return (state as RangeCalendarState).value[range];
    }

    return (state as CalendarState).value;
  }, [state, range]);

  const months = useMemo(() => {
    const data: { date: CalendarDate; label: string }[] = [];
    const numMonths = state.focusedDate.calendar.getMonthsInYear(
      state.focusedDate
    );
    for (let i = 1; i <= numMonths; i++) {
      const date = state.focusedDate.set({ month: i });
      data.push({
        date,
        label: monthFormatter.format(date.toDate(state.timeZone))
      });
    }

    return data;
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!containerRef.current) return;

      const currentMonth = containerRef.current.querySelector(
        `button[data-month-id="${dateValue?.month}"]`
      ) as HTMLButtonElement;

      if (currentMonth) {
        currentMonth.focus();
      }
    }, 200);
  }, []);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();

      const nextMonth = months[index + 1];
      if (nextMonth && !state.isInvalid(nextMonth.date)) {
        const date = state.focusedDate.set({
          month: nextMonth.date.month
        });
        state.setFocusedDate(date);
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

      const prevMonth = months[index - 1];
      if (prevMonth && !state.isInvalid(prevMonth.date)) {
        const date = state.focusedDate.set({
          month: prevMonth.date.month
        });

        state.setFocusedDate(date);
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

  const getButtonTabIndex = (index: number, month: number) => {
    if (dateValue?.month) {
      return dateValue.month === month ? 0 : -1;
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
          borderBottom: '1px solid $neutral100',
          justifyContent: 'center'
        }}
      >
        <Text
          size={CALENDAR_SIZE_TO_FONT_SIZE[calendarContext.size]}
          weight="bold"
          css={{
            color: '$neutral800',
            padding: '0 $6'
          }}
        >
          Choose Month
        </Text>
      </CalendarHeader>
      <MonthYearGridContainer
        ref={containerRef}
        id={monthsContainerId}
        calendarSize={calendarContext.size}
      >
        {months.map((month, i) => (
          <Button
            key={month.label}
            color={dateValue?.month === month.date.month ? 'default' : 'bright'}
            data-month-id={month.date.month}
            tabIndex={getButtonTabIndex(i, month.date.month)}
            disabled={state.isInvalid(month.date)}
            css={{
              padding: '$6',
              height:
                CALENDAR_SIZE_TO_YEAR_MONTH_BTN_HEIGHT[calendarContext.size],
              ...(dateValue?.month === month.date.month && {
                color: '$secondary600'
              })
            }}
            onKeyDown={(e) => handleKeyDown(e, i)}
            size={calendarContext.size}
            onClick={() => {
              if (!range) {
                (state as CalendarState).selectDate(month.date);
              }
              state.setFocusedDate(month.date);
              if (onMonthSelect) {
                onMonthSelect(month.date);
              }
              setCurrentCalendarView(CALENDAR_VIEW.GRID);
            }}
          >
            {month.label}
          </Button>
        ))}
      </MonthYearGridContainer>
    </Box>
  );
};
