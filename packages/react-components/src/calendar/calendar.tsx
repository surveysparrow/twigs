import {
  CalendarDateTime,
  ZonedDateTime,
  createCalendar,
  getLocalTimeZone,
  today
} from '@internationalized/date';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@sparrowengg/twigs-react-icons';
import {
  useEffect, useMemo, useRef, useState
} from 'react';
import {
  AriaCalendarProps,
  DateValue,
  useCalendar,
  useDateFormatter,
  useLocale
} from 'react-aria';
import { useCalendarState } from 'react-stately';
import { prefixClassName } from '@src/utils';
import { Box } from '../box';
import { Button } from '../button';
import { Text } from '../text';
import {
  FooterContainer,
  TimeAndZonePickerContainer
} from './calendar-commons';
import { CalendarGrid } from './calendar-grid';
import {
  CalendarHeader,
  CalendarNavigationButton,
  CalendarTitle
} from './calendar-header';
import { CalendarMonthsView } from './calendar-months-view';
import { CalendarTimePicker } from './calendar-time-picker';
import { CalendarTimezonePicker } from './calendar-timezone-picker';
import {
  CALENDAR_SIZE_TO_BORDER_RADIUS,
  CalendarContext,
  CalendarControlProps
} from './calendar-utils';
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
  onDaySelect,
  onYearSelect,
  onMonthSelect,
  containerCSS,
  ...props
}: CalendarProps) => {
  const [currentCalendarView, setCurrentCalendarView] = useState<
    keyof typeof CALENDAR_VIEW
  >(CALENDAR_VIEW.GRID);
  const [localDateValue, setLocalDateValue] = useState<DateValue>(
    today(getLocalTimeZone())
  );
  const dateValue = props.value ?? localDateValue;

  const { locale } = useLocale();
  const state = useCalendarState({
    defaultValue: dateValue,
    ...props,
    locale,
    ...(props.value && {
      value: props.value
    }),
    createCalendar
  });

  const monthFormatter = useDateFormatter({
    month: 'short'
  });

  const handleChange = (value: DateValue) => {
    if (props.onChange) {
      setLocalDateValue(value);
      props.onChange(value);
    } else {
      setLocalDateValue(value);
    }
  };

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

  const contextValue = useMemo(
    () => ({
      size
    }),
    [size]
  );

  return (
    <CalendarContext.Provider value={contextValue}>
      <Box
        {...calendarProps}
        css={{
          borderRadius: CALENDAR_SIZE_TO_BORDER_RADIUS[size],
          border: '1px solid $black400',
          ...containerCSS
        }}
        ref={ref}
        className={prefixClassName('calendar')}
      >
        {currentCalendarView === CALENDAR_VIEW.GRID && (
          <>
            <CalendarHeader calendarSize={size} className={prefixClassName('calendar__header')}>
              <CalendarNavigationButton
                {...prevButtonProps}
                icon={<ChevronLeftIcon />}
                className={prefixClassName('calendar__header-nav-button--prev')}
              />
              <CalendarTitle
                value={state.focusedDate}
                timezone={state.timeZone}
                setCurrentCalendarView={setCurrentCalendarView}
              />
              <CalendarNavigationButton
                {...nextButtonProps}
                icon={<ChevronRightIcon />}
                className={prefixClassName('calendar__nav-button--next')}
              />
            </CalendarHeader>
            <CalendarGrid state={state} onDaySelect={onDaySelect} />
            {(props.showTimePicker || props.showTimezonePicker) && (
              <TimeAndZonePickerContainer calendarSize={size}>
                {props.showTimePicker && (
                  <CalendarTimePicker
                    value={dateValue}
                    onChange={handleChange}
                    size={size}
                    className={prefixClassName('calendar__time-picker')}
                  />
                )}
                {props.showTimezonePicker && (
                  <CalendarTimezonePicker
                    value={dateValue}
                    onChange={handleChange}
                    size={size}
                    className={prefixClassName('calendar__timezone-picker')}
                  />
                )}
              </TimeAndZonePickerContainer>
            )}
          </>
        )}
        {currentCalendarView === CALENDAR_VIEW.MONTH && (
          <CalendarMonthsView
            state={state}
            setCurrentCalendarView={setCurrentCalendarView}
            onMonthSelect={onMonthSelect}
          />
        )}
        {currentCalendarView === CALENDAR_VIEW.YEAR && (
          <CalendarYearsView
            state={state}
            setCurrentCalendarView={setCurrentCalendarView}
            onYearSelect={onYearSelect}
          />
        )}
        {showFooter && currentCalendarView === CALENDAR_VIEW.GRID && (
          <>
            {props.renderFooter ? (
              props.renderFooter(state)
            ) : (
              <FooterContainer calendarSize={size} className={prefixClassName('calendar__footer')}>
                <Text
                  weight="bold"
                  css={{
                    color: '$neutral700'
                  }}
                >
                  {state?.value && (
                    <>
                      {monthFormatter.format(
                        state.value.toDate(state.timeZone)
                      )}
                      {' '}
                      {state.value.day.toString().padStart(2, '0')}
                      ,
                      {' '}
                      {state.value.year.toString()}
                    </>
                  )}
                </Text>
                <Button
                  size={size}
                  color="primary"
                  onClick={() => {
                    if (footerAction) footerAction(state);
                  }}
                  className={prefixClassName('calendar__footer-button')}
                >
                  {footerActionText}
                </Button>
              </FooterContainer>
            )}
          </>
        )}
      </Box>
    </CalendarContext.Provider>
  );
};
