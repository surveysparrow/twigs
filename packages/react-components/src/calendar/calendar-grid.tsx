import { DateDuration, endOfMonth, getWeeksInMonth } from '@internationalized/date';
import { useId } from 'react';
import { useCalendarGrid, useLocale } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Box } from '../box';
import { CalendarCell } from './calendar-cell';
import { DaysContainer } from './calendar-day';
import { Week, WeekContainer } from './calendar-week';

type CalendarGridType = {
  state: RangeCalendarState | CalendarState,
  offset?: DateDuration
}

export const CalendarGrid = ({ state, offset = {} }: CalendarGridType) => {
  const { locale } = useLocale();
  const id = useId();
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
        {weekDays.map((day, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Week key={`twigs-calendar-grid-${day}-${startDate}-${id}-${index}`}>{day}</Week>
        ))}
      </WeekContainer>
      <Box>
        {[...new Array(weeksInMonth).keys()].map((weekIndex, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DaysContainer key={`weekIndex-${startDate}-${id}-${index}`}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date) => (date ? (
                <CalendarCell
                  key={`twigs-calendar-cell-${date}-${id}`}
                  state={state}
                  date={date}
                  currentMonth={startDate}
                />
              ) : null))}
          </DaysContainer>
        ))}
      </Box>
    </Box>
  );
};
