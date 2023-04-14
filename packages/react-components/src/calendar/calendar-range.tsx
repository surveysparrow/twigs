import React, { useRef } from 'react';
import { useRangeCalendarState } from 'react-stately';
import {
  useRangeCalendar, useLocale, AriaRangeCalendarProps, DateValue
} from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '../box';
import { CalendarButton, CalendarMonthYear, Header } from './calendar-header';
import { Flex } from '../flex';
import { CalendarGrid } from './calendar-grid';

export const CalendarRange = (props: AriaRangeCalendarProps<DateValue>) => {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar
  });

  const ref = useRef(null);
  const {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title
  } = useRangeCalendar(props, state, ref);

  return (
    <Box
      {...calendarProps}
      css={{
        maxWidth: 600
      }}
      ref={ref}
    >
      <Header>
        <CalendarButton {...prevButtonProps} icon={<ChevronLeftIcon />} />
        <CalendarMonthYear>
          {' '}
          {title}
          {' '}
        </CalendarMonthYear>
        <CalendarButton {...nextButtonProps} icon={<ChevronRightIcon />} />
      </Header>
      <Flex css={{
        gap: '48px'
      }}
      >
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </Flex>
    </Box>
  );
};
