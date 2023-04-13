import React, { useRef } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { createCalendar } from "@internationalized/date";
import { styled } from '../../stitches.config';
import { Box } from '../box';
import {
  CalendarMonthYear, Header
} from './calendar-header';
import { useCalendar, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';
import { CalendarGrid } from './calendar-grid';
import { ChevronLeftIcon, ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { CalendarButton } from './calendar-button';

dayjs.extend(isBetween);

export const Calendar = (props) => {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  let ref = useRef(null);
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <Box {...calendarProps} ref={ref} css={{
      maxWidth: 340
    }}>
      <Header>
        <CalendarButton
          {...prevButtonProps}
          icon={<ChevronLeftIcon />}
        />
        <CalendarMonthYear> {title} </CalendarMonthYear>
        <CalendarButton
          {...nextButtonProps}
          icon={<ChevronRightIcon />}
        />
      </Header>
      <CalendarGrid state={state} />
    </Box>
  );
};
