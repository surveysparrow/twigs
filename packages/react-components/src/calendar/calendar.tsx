import React, { useRef } from 'react';
import { createCalendar } from '@internationalized/date';
import {
  AriaCalendarProps, DateValue, useCalendar, useLocale
} from 'react-aria';
import { useCalendarState } from 'react-stately';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '../box';
import {
  CalendarMonth, CalendarHeader, CalendarNavigationButton
} from './calendar-header';
import { CalendarGrid } from './calendar-grid';

export const Calendar = (props: AriaCalendarProps<DateValue>) => {
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  const ref = useRef(null);
  const {
    calendarProps, prevButtonProps, nextButtonProps, title
  } = useCalendar(
    props,
    state
  );

  return (
    <Box
      {...calendarProps}
      ref={ref}
    >
      <CalendarHeader>
        <CalendarNavigationButton
          {...prevButtonProps}
          icon={<ChevronLeftIcon />}
        />
        <CalendarMonth>{title}</CalendarMonth>
        <CalendarNavigationButton
          {...nextButtonProps}
          icon={<ChevronRightIcon />}
        />
      </CalendarHeader>
      <CalendarGrid state={state} />
    </Box>
  );
};
