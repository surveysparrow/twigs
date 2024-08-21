import { CalendarDate, isSameDay, isSameMonth } from '@internationalized/date';
import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Day, DayContainer } from './calendar-day';
import { useCalendarContext } from './calendar-utils';

type CalendarCellProps = {
  state: RangeCalendarState | CalendarState;
  date: CalendarDate;
  currentMonth: CalendarDate;
  onDaySelect?: (date: CalendarDate) => void;
};

export const CalendarCell = ({
  state,
  date,
  currentMonth,
  onDaySelect
}: CalendarCellProps) => {
  const ref = useRef(null);
  const {
    cellProps, buttonProps, isSelected, formattedDate
  } = useCalendarCell(
    { date },
    state,
    ref
  );

  const calendarContext = useCalendarContext();

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
        size={calendarContext.size}
        onClick={(e) => {
          buttonProps?.onClick?.(e);
          if (onDaySelect) {
            onDaySelect(date);
          }
        }}
      >
        {formattedDate}
      </Day>
    </DayContainer>
  );
};
