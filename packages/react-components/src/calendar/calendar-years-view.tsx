import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@sparrowengg/twigs-react-icons';
import React, { useId, useMemo, useState } from 'react';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { Button, IconButton } from '../button';
import { Flex } from '../flex';
import { Text } from '../text';
import { CALENDAR_VIEW } from './calendar';
import { CalendarHeader } from './calendar-header';
import {
  CALENDAR_SIZE_TO_FONT_SIZE,
  CALENDAR_SIZE_TO_YEAR_MONTH_BTN_HEIGHT,
  useCalendarContext
} from './calendar-utils';

export const CalendarYearsView = ({
  state,
  range,
  setCurrentCalendarView
}: {
  state: RangeCalendarState | CalendarState;
  range?: 'start' | 'end';
  setCurrentCalendarView: (view: keyof typeof CALENDAR_VIEW) => void;
}) => {
  const numYears = 12;
  const [currentYearInView, setCurrentYearInView] = useState(
    state.focusedDate.year
  );

  const dateValue = useMemo(() => {
    if (range && (state as RangeCalendarState).value?.[range]) {
      return (state as RangeCalendarState).value[range];
    }

    return (state as CalendarState).value;
  }, [state, range]);

  const yearsContainerId = useId();

  const calendarContext = useCalendarContext();

  const generateYears = (selectedYear: number) => {
    const baseYear = selectedYear - (selectedYear % numYears) - 1;

    return Array.from({ length: numYears }).map((_, index) => {
      const year = baseYear + index;
      const date = state.focusedDate.set({ year });
      return date;
    });
  };

  const years = useMemo(
    () => generateYears(currentYearInView),
    [currentYearInView]
  );

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();

      const nextYear = years[index + 1];
      if (nextYear && !state.isInvalid(nextYear)) {
        const focusedDate = state.focusedDate.set({
          month: nextYear.year
        });
        state.setFocusedDate(focusedDate);
        const nextButton = e.currentTarget
          .nextElementSibling as HTMLButtonElement;
        if (nextButton) {
          nextButton.setAttribute('tabindex', '0');
          nextButton.focus();
          e.currentTarget.setAttribute('tabindex', '-1');
        }
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      e.stopPropagation();

      const prevYear = years[index - 1];
      if (prevYear && !state.isInvalid(prevYear)) {
        const focusedDate = state.focusedDate.set({
          month: prevYear.year
        });

        state.setFocusedDate(focusedDate);
        const prevButton = e.currentTarget
          .previousElementSibling as HTMLButtonElement;

        if (prevButton) {
          prevButton.setAttribute('tabindex', '0');
          prevButton.focus();
          e.currentTarget.setAttribute('tabindex', '-1');
        }
      }
    }
  };

  return (
    <>
      <CalendarHeader
        css={{
          borderBottom: '1px solid $neutral100'
        }}
      >
        <Flex
          css={{
            width: '100%'
          }}
          alignItems="center"
        >
          <IconButton
            icon={<ChevronLeftIcon />}
            color="bright"
            size="lg"
            disabled={state.isInvalid(
              state.focusedDate.set({ year: currentYearInView - numYears })
            )}
            onClick={() => {
              setCurrentYearInView((prev) => prev - numYears);
            }}
          />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            css={{
              flex: 1
            }}
          >
            <Text
              size={CALENDAR_SIZE_TO_FONT_SIZE[calendarContext.size]}
              weight="bold"
              css={{
                color: '$neutral800'
              }}
            >
              Choose Year
            </Text>
            <Text
              size={CALENDAR_SIZE_TO_FONT_SIZE[calendarContext.size]}
              weight="bold"
              css={{
                color: '$neutral900',
                padding: '0 $6'
              }}
            >
              {years[0].year}
              {' '}
              -
              {years.at(-1)!.year}
            </Text>
          </Flex>
          <IconButton
            icon={<ChevronRightIcon />}
            color="bright"
            size="lg"
            disabled={state.isInvalid(
              state.focusedDate.set({ year: currentYearInView + numYears })
            )}
            onClick={() => {
              setCurrentYearInView((prev) => prev + numYears);
            }}
          />
        </Flex>
      </CalendarHeader>
      <Flex
        wrap="wrap"
        justifyContent="center"
        gap={calendarContext.size === 'lg' ? '$4' : '$6'}
        css={{
          padding: '$8'
        }}
        id={yearsContainerId}
      >
        {years.map((date, i) => (
          <Button
            key={date.year}
            color={dateValue.year === date.year ? 'secondary' : 'bright'}
            data-yearId={date.year}
            tabIndex={dateValue.year === date.year ? 0 : -1}
            disabled={state.isInvalid(date)}
            css={{
              flexBasis: calendarContext.size === 'lg' ? 'calc(33.333% - $2)' : 'calc(33.333% - $3)',
              padding: '$6',
              height:
                CALENDAR_SIZE_TO_YEAR_MONTH_BTN_HEIGHT[calendarContext.size]
            }}
            onKeyDown={(e) => handleKeyDown(e, i)}
            size={calendarContext.size}
            onClick={() => {
              setCurrentCalendarView(CALENDAR_VIEW.GRID);
              if (!range) {
                (state as CalendarState).selectDate(date);
              }
              state.setFocusedDate(date);
            }}
          >
            {date.year}
          </Button>
        ))}
      </Flex>
    </>
  );
};
