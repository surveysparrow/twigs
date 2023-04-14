import React, { CalendarDate, isSameDay, isSameMonth } from '@internationalized/date';
import { useRef } from 'react';
import { useCalendarCell } from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Day, DayContainer } from './day';

type CalendarCellType = {
  state: RangeCalendarState | CalendarState,
  date: CalendarDate,
  currentMonth: CalendarDate
}

export const CalendarCell = ({ state, date, currentMonth }: CalendarCellType) => {
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const isFirstDayInRange = state?.value?.start && isSameDay(date, state.value.start);
  const isLastDayInRange = state?.value?.end && isSameDay(date, state.value.end);
  return (
    <DayContainer
      {...cellProps}
      data-is-start={isFirstDayInRange}
      data-is-end={isLastDayInRange}
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
