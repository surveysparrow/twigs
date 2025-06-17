import {
  CalendarDate,
  DateDuration,
  endOfMonth,
  getWeeksInMonth
} from '@internationalized/date';
import { CSS } from '@stitches/react';
import { useId } from 'react';
import { useCalendarGrid, useLocale } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { prefixClassName } from '@src/utils';
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
  onDaySelect?: (date: CalendarDate) => void;
};

export const CalendarGrid = ({
  state,
  offset = {},
  containerCSS = {},
  onDaySelect
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
  const weeksInMonth = getWeeksInMonth(startDate, locale);

  return (
    <GridContainer
      calendarSize={calendarContext.size}
      {...gridProps}
      css={containerCSS}
      className={prefixClassName('calendar__container')}
    >
      <WeekContainer
        {...headerProps}
        calendarSize={calendarContext.size}
        className={prefixClassName('calendar__week-container')}
      >
        {weekDays.map((day, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Week key={`twigs-calendar-grid-${day}-${startDate}-${id}-${index}`} className={prefixClassName('calendar__week')}>
            {day.substring(0, 2)}
          </Week>
        ))}
      </WeekContainer>
      <Box
        css={{
          padding: '$8 0',
          ...(calendarContext.size === 'lg' && {
            paddingBottom: '$4'
          }),
          ...(calendarContext.size === 'sm' && {
            padding: '$4 0'
          })
        }}
        className={prefixClassName('calendar__days-container')}
      >
        {[...new Array(weeksInMonth).keys()].map((weekIndex, index) => (
          <DaysContainer
            // eslint-disable-next-line react/no-array-index-key
            key={`weekIndex-${startDate}-${id}-${index}`}
            className={prefixClassName('calendar__days-container--week')}
          >
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date) => (date ? (
                <CalendarCell
                  key={`twigs-calendar-cell-${date}-${id}`}
                  state={state}
                  date={date}
                  currentMonth={startDate}
                  onDaySelect={onDaySelect}
                />
              ) : null))}
          </DaysContainer>
        ))}
      </Box>
    </GridContainer>
  );
};
