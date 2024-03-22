import React, { useRef } from 'react';
import { createCalendar } from '@internationalized/date';
import { AriaCalendarProps, DateValue, useCalendar, useDateFormatter, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '../box';
import { CalendarMonth, CalendarHeader, CalendarNavigationButton } from './calendar-header';
import { CalendarGrid } from './calendar-grid';
import { Select } from '../select';

function validateDate(minDate, maxDate, value) {
  const tempMin = new Date(minDate);
  const tempMax = new Date(maxDate);
  const tempValue = new Date(value);
  if (minDate && maxDate) {
    return tempValue < tempMin || tempValue > tempMax;
  }

  if (minDate) {
    return tempValue < tempMin;
  }
  if (maxDate) {
    return tempValue > tempMax;
  }
  return false;
}

const MonthDropdown = ({ state }) => {
  const months: any = [];
  const formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone
  });

  // Format the name of each month in the year according to the
  // current locale and calendar system. Note that in some calendar
  // systems, such as the Hebrew, the number of months may differ
  // between years.
  const numMonths = state.focusedDate.calendar.getMonthsInYear(state.focusedDate);
  for (let i = 1; i <= numMonths; i += 1) {
    const date = state.focusedDate.set({ month: i });
    months.push({
      label: formatter.format(date.toDate(state.timeZone)),
      value: date.month
    });
  }
  const onChange = (e) => {
    const value = Number(e.value);
    const date = state.focusedDate.set({ month: value });
    state.setFocusedDate(date);
  };

  function getSelectValue(value: number) {
    return months.find((month) => month.value === value);
  }

  return <Select aria-label="Month" onChange={onChange} value={getSelectValue(state.focusedDate.month)} options={months} />;
};

const YearDropdown = ({ state }) => {
  const years: {
    label: string;
    value: any;
    disabled: boolean;
  }[] = [];
  console.log(state.minValue);
  console.log(state.minValue.toString());
  console.log(state);
  validateDate(state.minValue.toString(), state.maxValue?.toString(), state.focusedDate?.toString());
  const formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone
  });

  // Format 20 years on each side of the current year according
  // to the current locale and calendar system.
  for (let i = -20; i <= 20; i += 1) {
    const date = state.focusedDate.add({ years: i });
    years.push({
      value: date,
      label: formatter.format(date.toDate(state.timeZone)),
      disabled: validateDate(state.minValue.toString(), state.maxValue?.toString(), date.toString())
    });
  }

  console.log(years);
  const onChange = (e) => {
    console.log(e);
    state.setFocusedDate(e.value);
  };
  function getSelectValue(value: number) {
    return years.find((month) => month.value.year === value);
  }

  return <Select aria-label="Month" isOptionDisabled={(option: any) => option.disabled} onChange={onChange} value={getSelectValue(state.focusedDate.year)} options={years} />;
};

export const Calendar = (props: AriaCalendarProps<DateValue>) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(props, state);
  return (
    <Box {...calendarProps} ref={ref}>
      <CalendarHeader>
        <CalendarNavigationButton {...prevButtonProps} icon={<ChevronLeftIcon />} />

        <CalendarMonth>
          <MonthDropdown state={state} />
          <YearDropdown state={state} />
        </CalendarMonth>
        <CalendarNavigationButton {...nextButtonProps} icon={<ChevronRightIcon />} />
      </CalendarHeader>
      <CalendarGrid state={state} />
    </Box>
  );
};
