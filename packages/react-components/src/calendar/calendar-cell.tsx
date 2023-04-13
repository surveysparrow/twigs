import React, { isSameDay, isSameMonth } from "@internationalized/date";
import { useRef } from "react";
import { useCalendarCell } from "react-aria";
import { Day, DayContainer } from "./day";

export const CalendarCell = ({ state, date, currentMonth }) => {
  let ref = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isInvalid,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const isFirstDayInRange = state?.value?.start && isSameDay(date, state.value.start);
  const isLastDayInRange = state?.value?.end && isSameDay(date, state.value.end);
  return (
    <DayContainer {...cellProps}
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
}
