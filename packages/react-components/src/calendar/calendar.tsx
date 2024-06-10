import {
  CalendarDateTime,
  ZonedDateTime,
  createCalendar
} from '@internationalized/date';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@sparrowengg/twigs-react-icons';
import {
  ReactNode, useEffect, useRef, useState
} from 'react';
import {
  AriaCalendarProps,
  DateValue,
  useCalendar,
  useLocale
} from 'react-aria';
import { CalendarState, useCalendarState } from 'react-stately';
import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import { CalendarGrid } from './calendar-grid';
import {
  CalendarHeader,
  CalendarNavigationButton,
  CalendarTitle
} from './calendar-header';
import { CalendarMonthsView } from './calendar-months-view';
import { CalendarTimePicker } from './calendar-time-picker';
import { CalendarTimezonePicker } from './calendar-timezone-picker';
import { CalendarContext, CalendarControlProps } from './calendar-utils';
import { CalendarYearsView } from './calendar-years-view';

export const CALENDAR_VIEW = {
  GRID: 'GRID',
  MONTH: 'MONTH',
  YEAR: 'YEAR'
} as const;

export type CalendarProps = AriaCalendarProps<DateValue> & CalendarControlProps;

export const Calendar = ({
  size = 'lg',
  showFooter = true,
  footerAction,
  footerActionText = 'Select',
  ...props
}: CalendarProps & {
  footerAction?: (state: CalendarState) => void;
  renderFooter?: (state: CalendarState) => ReactNode;
}) => {
  const [currentCalendarView, setCurrentCalendarView] = useState<
    keyof typeof CALENDAR_VIEW
  >(CALENDAR_VIEW.GRID);
  const { locale } = useLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar
  });

  useEffect(() => {
    if (
      props.showTimePicker
      && !(
        props.value instanceof ZonedDateTime
        || props.value instanceof CalendarDateTime
      )
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        // eslint-disable-next-line max-len
        'The value prop must be an instance of ZonedDateTime or CalendarDateTime when showTimePicker is true. Use parseDateTime or parseZonedDateTime from @internationalized/date. The value type will be changed to CalendarDateTime'
      );
    }
    if (props.showTimezonePicker && !(props.value instanceof ZonedDateTime)) {
      // eslint-disable-next-line no-console
      console.warn(
        'The value prop must be an instance of ZonedDateTime when showTimezonePicker is true. The value type will be changed to ZonedDateTime'
      );
    }
  }, [props.showTimePicker]);

  const ref = useRef(null);
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  );

  return (
    <CalendarContext.Provider
      value={{
        size
      }}
    >
      <Box
        {...calendarProps}
        css={{
          borderRadius: '$md',
          border: '1px solid $black400',
          paddingBottom: '$8'
        }}
        ref={ref}
      >
        {currentCalendarView === CALENDAR_VIEW.GRID && (
          <>
            <CalendarHeader>
              <CalendarNavigationButton
                {...prevButtonProps}
                icon={<ChevronLeftIcon />}
              />
              <CalendarTitle
                value={state.focusedDate}
                timezone={state.timeZone}
                setCurrentCalendarView={setCurrentCalendarView}
              />
              <CalendarNavigationButton
                {...nextButtonProps}
                icon={<ChevronRightIcon />}
              />
            </CalendarHeader>
            <CalendarGrid state={state} />
            {(props.showTimePicker || props.showTimezonePicker) && (
              <Flex
                alignItems="center"
                justifyContent="center"
                gap="$2"
                css={{
                  padding: '$8 0'
                }}
              >
                {props.showTimePicker && (
                  <CalendarTimePicker
                    value={props.value}
                    onChange={props.onChange}
                    calendarState={state}
                  />
                )}
                {props.showTimezonePicker && (
                  <CalendarTimezonePicker
                    value={props.value}
                    onChange={props.onChange}
                    calendarState={state}
                  />
                )}
              </Flex>
            )}
          </>
        )}
        {currentCalendarView === CALENDAR_VIEW.MONTH && (
          <CalendarMonthsView
            state={state}
            setCurrentCalendarView={setCurrentCalendarView}
          />
        )}
        {currentCalendarView === CALENDAR_VIEW.YEAR && (
          <CalendarYearsView
            state={state}
            setCurrentCalendarView={setCurrentCalendarView}
          />
        )}
        {showFooter && (
          <>
            {props.renderFooter ? (
              props.renderFooter(state)
            ) : (
              <Flex
                alignItems="center"
                justifyContent="flex-end"
                css={{
                  borderTop: '1px solid',
                  borderColor: '$neutral200',
                  padding: '$6 $8',
                  paddingBottom: '0'
                }}
              >
                <Button
                  size={size}
                  color="primary"
                  onClick={() => {
                    if (footerAction) footerAction(state);
                  }}
                >
                  {footerActionText}
                </Button>
              </Flex>
            )}
          </>
        )}
      </Box>
    </CalendarContext.Provider>
  );
};
