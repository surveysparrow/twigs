import { CalendarDate, isSameDay, isSameMonth } from '@internationalized/date';
import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Day, DayContainer } from './calendar-day';

type CalendarCellProps = {
  state: RangeCalendarState | CalendarState,
  date: CalendarDate,
  currentMonth: CalendarDate
}

export const CalendarCell = ({ state, date, currentMonth }: CalendarCellProps) => {
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);

  let isSelectionStart = false;
  let isSelectionEnd = false;
  let isRangeCalendar = false;
  if ('highlightedRange' in state && state.highlightedRange) {
    isSelectionStart = isSameDay(date, state.highlightedRange.start);
    isSelectionEnd = isSameDay(date, state.highlightedRange.end);
    isRangeCalendar = true;
  }

  return (
    <DayContainer
      {...cellProps}
      data-selection-start={isSelectionStart}
      data-selection-end={isSelectionEnd}
      data-in-range={isRangeCalendar && isSelected}
    >
      <Day
        {...buttonProps}
        ref={ref}
        isHidden={isOutsideMonth}
        isSelected={isSelected}
      >
        {formattedDate}
      </Day>
    </DayContainer>
  );
};
