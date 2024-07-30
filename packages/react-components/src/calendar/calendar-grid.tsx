import {
  DateDuration,
  endOfMonth,
  getWeeksInMonth
} from '@internationalized/date';
import { CSS } from '@stitches/react';
import { useId } from 'react';
import { useCalendarGrid, useLocale } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Box } from '../box';
import { config } from '../stitches.config';
import { CalendarCell } from './calendar-cell';
import { DaysContainer } from './calendar-day';
import { Week, WeekContainer } from './calendar-week';
import { GridContainer } from './calendar-commons';
import { useCalendarContext } from './calendar-utils';

type CalendarGridType = {
  state: RangeCalendarState | CalendarState;
  offset?: DateDuration;
  containerCSS?: CSS<typeof config>;
};

export const CalendarGrid = ({
  state,
  offset = {},
  containerCSS = {}
}: CalendarGridType) => {
  const { locale } = useLocale();
  const id = useId();
  const calendarContext = useCalendarContext();

  const startDate = state.visibleRange.start.add(offset);
  const endDate = endOfMonth(startDate);
  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate,
      weekdayStyle: 'short'
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <GridContainer
      calendarSize={calendarContext.size}
      {...gridProps}
      css={containerCSS}
    >
      <WeekContainer {...headerProps} calendarSize={calendarContext.size}>
        {weekDays.map((day, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Week key={`twigs-calendar-grid-${day}-${startDate}-${id}-${index}`}>
            {day.substring(0, 2)}
          </Week>
        ))}
      </WeekContainer>
      <Box css={{
        padding: '$8 0',
        ...(calendarContext.size === 'lg' && {
          paddingBottom: '$4'
        })
      }}
      >
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
    </GridContainer>
  );
};
