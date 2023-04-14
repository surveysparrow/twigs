import { DateDuration, endOfMonth, getWeeksInMonth } from '@internationalized/date';
import React from 'react';
import { useCalendarGrid, useLocale } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Box } from '../box';
import { CalendarCell } from './calendar-cell';
import { DaysContainer } from './day';
import { Week, WeekContainer } from './week';

type CalendarGridType = {
  state: RangeCalendarState | CalendarState,
  offset?: DateDuration
}

export const CalendarGrid = ({ state, offset = {} }: CalendarGridType) => {
  const { locale } = useLocale();
  const startDate = state.visibleRange.start.add(offset);
  const endDate = endOfMonth(startDate);
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <Box {...gridProps}>
      <WeekContainer {...headerProps}>
        {weekDays.map((day) => (
          <Week key={`twigs-caledar-grid-${day}`}>{day}</Week>
        ))}
      </WeekContainer>
      <Box>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <DaysContainer key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date) => (date ? (
                <CalendarCell
                  key={`twigs-calendar-cell-${date}`}
                  state={state}
                  date={date}
                  currentMonth={startDate}
                />
              ) : (
                <Box key="twigs-calendar-cell-box" />
              )))}
          </DaysContainer>
        ))}
      </Box>
    </Box>
  );
};
