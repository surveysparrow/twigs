import { endOfMonth, getWeeksInMonth } from "@internationalized/date";
import { useCalendarGrid, useLocale } from "react-aria";
import { Box } from "../box";
import { CalendarCell } from "./calendar-cell";
import { DaysContainer } from "./day";
import { Week, WeekContainer } from "./week";

export const CalendarGrid = ({ state, offset = {} }) => {
  let { locale } = useLocale();
  let startDate = state.visibleRange.start.add(offset);
  let endDate = endOfMonth(startDate);
  let { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <Box {...gridProps}>
      <WeekContainer {...headerProps}>
        {weekDays.map((day, index) => (
          <Week key={index}>{day}</Week>
        ))}
      </WeekContainer>
      <Box>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <DaysContainer key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <Box key={i} />
                )
              )}
          </DaysContainer>
        ))}
      </Box>
    </Box>
  );
}