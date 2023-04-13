import React, { useRef } from "react";
import { useRangeCalendarState } from "react-stately";
import { useRangeCalendar, useLocale } from "react-aria";
import { createCalendar } from "@internationalized/date";
import { Box } from "../box";
import { CalendarButton, CalendarMonthYear, Header } from "./calendar-header";
import { ChevronLeftIcon, ChevronRightIcon } from "@sparrowengg/twigs-react-icons";
import { Flex } from "../flex";
import { CalendarGrid } from "./calendar-grid";

export function CalendarRange(props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar
  });

  let ref = useRef(null);
  let {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title
  } = useRangeCalendar(props, state, ref);

  return (
    <Box {...calendarProps} ref={ref} css={{
      maxWidth: 600
    }}>
      <Header>
        <CalendarButton {...prevButtonProps} icon={<ChevronLeftIcon />} />
        <CalendarMonthYear> {title} </CalendarMonthYear>
        <CalendarButton {...nextButtonProps} icon={<ChevronRightIcon />} />
      </Header>
      <Flex css={{
        gap: '48px'
      }}>
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </Flex>
    </Box>
  );
}
