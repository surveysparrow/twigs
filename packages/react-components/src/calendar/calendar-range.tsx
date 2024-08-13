import {
  CalendarDateTime,
  DateDuration,
  ZonedDateTime,
  createCalendar
} from '@internationalized/date';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@sparrowengg/twigs-react-icons';
import {
  ReactNode, useEffect, useMemo, useRef, useState
} from 'react';
import {
  AriaButtonProps,
  AriaRangeCalendarProps,
  DateValue,
  useDateFormatter,
  useLocale,
  useRangeCalendar
} from 'react-aria';
import { RangeCalendarState, useRangeCalendarState } from 'react-stately';
import { Box } from '../box';
import { Button } from '../button';
import { Flex } from '../flex';
import { Text } from '../text';
import { CALENDAR_VIEW } from './calendar';
import { CalendarGrid } from './calendar-grid';
import {
  CalendarNavigationButton,
  RangeCalendarTitle
} from './calendar-header';
import { CalendarMonthsView } from './calendar-months-view';
import {
  CALENDAR_SIZE_TO_DAY_BTN_SIZE,
  CALENDAR_SIZE_TO_WIDTH,
  CalendarContext,
  CalendarControlProps,
  useCalendarContext
} from './calendar-utils';
import { CalendarYearsView } from './calendar-years-view';

export const CalendarRange = ({
  size = 'lg',
  showFooter = true,
  footerActionText = 'Apply',
  footerAction,
  onDaySelect,
  onMonthSelect,
  onYearSelect,
  ...props
}: AriaRangeCalendarProps<DateValue> &
  CalendarControlProps & {
    footerAction?: (state: RangeCalendarState) => void;
    renderFooter?: (state: RangeCalendarState) => ReactNode;
    onDaySelect?: (date: DateValue, range: 'start' | 'end') => void;
    onMonthSelect?: (date: DateValue, range: 'start' | 'end') => void;
    onYearSelect?: (date: DateValue, range: 'start' | 'end') => void;
  }) => {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
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
  const { calendarProps, prevButtonProps, nextButtonProps } = useRangeCalendar(
    props,
    state,
    ref
  );

  const contextProviderValue = useMemo(() => {
    return {
      size
    };
  }, [size]);

  const formatter = useDateFormatter({
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <CalendarContext.Provider value={contextProviderValue}>
      <Box
        css={{
          borderRadius: '$2xl',
          border: '1px solid',
          borderColor: '$neutral300',
          paddingTop: '$6',
          maxWidth: 'max-content'
        }}
      >
        <Flex
          {...calendarProps}
          gap="$8"
          ref={ref}
          css={{
            overflow: 'auto'
          }}
        >
          <CalendarSingleSection
            state={state}
            navigationButtonProps={prevButtonProps}
            sectionName="start"
            onDaySelect={(date) => onDaySelect?.(date, 'start')}
            onMonthSelect={(date) => onMonthSelect?.(date, 'start')}
            onYearSelect={(date) => onYearSelect?.(date, 'start')}
          />
          <CalendarSingleSection
            state={state}
            calendarOffset={{
              months: 1
            }}
            sectionName="end"
            navigationButtonProps={nextButtonProps}
            onDaySelect={(date) => onDaySelect?.(date, 'end')}
            onMonthSelect={(date) => onMonthSelect?.(date, 'end')}
            onYearSelect={(date) => onYearSelect?.(date, 'end')}
          />
        </Flex>
        {showFooter && (
          <>
            {props.renderFooter ? (
              props.renderFooter(state)
            ) : (
              <Flex
                alignItems="center"
                justifyContent="space-between"
                css={{
                  borderTop: '1px solid',
                  borderColor: '$neutral200',
                  padding: '$6 $8'
                }}
              >
                <Text
                  weight="bold"
                  css={{
                    color: '$neutral700'
                  }}
                >
                  {state.value?.start
                    && state.value?.end
                    && formatter.formatRange(
                      state.value.start.toDate(state.timeZone),
                      state.value.end.toDate(state.timeZone)
                    )}
                </Text>
                <Button
                  size="lg"
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

const CalendarSingleSection = ({
  navigationButtonProps,
  calendarOffset,
  sectionName,
  state,
  onDaySelect,
  onYearSelect,
  onMonthSelect
}: {
  navigationButtonProps: AriaButtonProps<'button'>;
  calendarOffset?: DateDuration;
  sectionName: 'start' | 'end';
  state: RangeCalendarState;
  onDaySelect?: (date: DateValue) => void;
  onMonthSelect?: (date: DateValue) => void;
  onYearSelect?: (date: DateValue) => void;
}) => {
  const [currentCalendarView, setCurrentCalendarView] = useState<
    keyof typeof CALENDAR_VIEW
  >(CALENDAR_VIEW.GRID);
  const calendarContext = useCalendarContext();

  return (
    <Box
      css={{
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: 0,
        maxWidth: CALENDAR_SIZE_TO_WIDTH[calendarContext.size]
      }}
    >
      {currentCalendarView === CALENDAR_VIEW.GRID && (
        <Flex
          flexDirection="column"
          alignItems="center"
          css={{
            maxWidth: 'max-content'
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            css={{
              marginBottom: '$12',
              padding: '0 $8',
              width: '100%'
            }}
          >
            {sectionName === 'end' && <Box />}
            {sectionName === 'start' && (
              <CalendarNavigationButton
                {...navigationButtonProps}
                icon={<ChevronLeftIcon />}
              />
            )}
            <RangeCalendarTitle
              timezone={state.timeZone}
              value={state.visibleRange[sectionName]}
              setCurrentCalendarView={setCurrentCalendarView}
            />
            {sectionName === 'end' && (
              <CalendarNavigationButton
                {...navigationButtonProps}
                icon={<ChevronRightIcon />}
              />
            )}
            {sectionName === 'start' && <Box />}
          </Flex>
          <CalendarGrid
            state={state}
            {...(calendarOffset && {
              offset: calendarOffset
            })}
            containerCSS={{
              maxWidth: `calc(7 * ${CALENDAR_SIZE_TO_DAY_BTN_SIZE[calendarContext.size]})`,
              boxSizing: 'content-box',
              padding: '0 $8 0 $8'
            }}
            onDaySelect={onDaySelect}
          />
        </Flex>
      )}
      {currentCalendarView === CALENDAR_VIEW.MONTH && (
        <CalendarMonthsView
          state={state}
          range={sectionName}
          setCurrentCalendarView={setCurrentCalendarView}
          onMonthSelect={onMonthSelect}
        />
      )}
      {currentCalendarView === CALENDAR_VIEW.YEAR && (
        <CalendarYearsView
          state={state}
          range={sectionName}
          setCurrentCalendarView={setCurrentCalendarView}
          onYearSelect={onYearSelect}
        />
      )}
    </Box>
  );
};
