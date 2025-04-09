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
  const currentDate = new Date(date.toDate(state.timeZone)).toDateString() === new Date().toDateString();
  const dataInRange = isRangeCalendar && isSelected;
  return (
    <DayContainer
      {...cellProps}
      data-selection-start={isSelectionStart && !isOutsideMonth}
      data-selection-end={isSelectionEnd && !isOutsideMonth}
      data-in-range={dataInRange}
    >
      <Day
        {...buttonProps}
        ref={ref}
        isHidden={isOutsideMonth}
        isSelected={isSelected}
        size={calendarContext.size}
        css={{
          ...(currentDate && { backgroundColor: '$white900', border: '1px solid rgba(100, 116, 139, 0.4)', borderRadius: '50% !important' }),
          ...(dataInRange && { border: 'none !important', borderRadius: '0% !important' }),
          // Added z-index to ensure hover state doesn't overlap with selected state
          '&:focus': {
            zIndex: 2,
            position: 'relative'
          }
        }}
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
