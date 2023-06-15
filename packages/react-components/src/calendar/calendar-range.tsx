import React, { useRef } from 'react';
import { useRangeCalendarState } from 'react-stately';
import {
  useRangeCalendar, useLocale, AriaRangeCalendarProps, DateValue
} from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '../box';
import { CalendarNavigationButton, CalendarMonth } from './calendar-header';
import { Flex } from '../flex';
import { CalendarGrid } from './calendar-grid';

function getMonthName(monthIndex: number, timeZone: string): string {
  const date = new Date();
  date.setMonth(monthIndex - 1);
  return date.toLocaleString('default', { month: 'long', timeZone });
}

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
    nextButtonProps
  } = useRangeCalendar(props, state, ref);
  const startMonth = getMonthName(state.visibleRange.start.month, state.timeZone);
  const endMonth = getMonthName(state.visibleRange.end.month, state.timeZone);
  return (
    <Flex
      {...calendarProps}
      gap="$26"
      ref={ref}
    >
      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          css={{
            marginBottom: '$12'
          }}
        >
          <CalendarNavigationButton {...prevButtonProps} icon={<ChevronLeftIcon />} />
          <CalendarMonth>{`${startMonth} ${state.visibleRange.start.year}`}</CalendarMonth>
          <Box />
        </Flex>
        <CalendarGrid state={state} />
      </Box>

      <Box>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          css={{
            marginBottom: '$12'
          }}
        >
          <Box />
          <CalendarMonth>{`${endMonth} ${state.visibleRange.end.year}`}</CalendarMonth>
          <CalendarNavigationButton {...nextButtonProps} icon={<ChevronRightIcon />} />
        </Flex>
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </Box>
    </Flex>
  );
};
