import {
  CalendarDate,
  isSameDay,
  isSameMonth,
  today
} from '@internationalized/date';
import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { prefixClassName } from '@src/utils';
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
  const isToday = isSameDay(date, today(state.timeZone));

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
      data-selection-start={isSelectionStart && !isOutsideMonth}
      data-selection-end={isSelectionEnd && !isOutsideMonth}
      data-in-range={isRangeCalendar && isSelected}
      className={prefixClassName('calendar__day-container--day')}
    >
      <Day
        {...buttonProps}
        ref={ref}
        isHidden={isOutsideMonth}
        isSelected={isSelected}
        isToday={!isSelected && !isOutsideMonth && isToday}
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
