import React, { useRef } from 'react';
import { createCalendar } from '@internationalized/date';
import {
  AriaCalendarProps, DateValue, useCalendar, useLocale
} from 'react-aria';
import { useCalendarState } from 'react-stately';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '../box';
import {
  CalendarMonthYear, Header
} from './calendar-header';
import { CalendarGrid } from './calendar-grid';
import { CalendarButton } from './calendar-button';

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
      css={{
        maxWidth: 340
      }}
    >
      <Header>
        <CalendarButton
          {...prevButtonProps}
          icon={<ChevronLeftIcon />}
        />
        <CalendarMonthYear>
          {' '}
          {title}
          {' '}
        </CalendarMonthYear>
        <CalendarButton
          {...nextButtonProps}
          icon={<ChevronRightIcon />}
        />
      </Header>
      <CalendarGrid state={state} />
    </Box>
  );
};
