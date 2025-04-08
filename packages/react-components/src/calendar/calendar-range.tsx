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
import { prefixClassName } from '@src/utils';
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
  CalenderNavigationContext,
  useCalendarContext,
  useCalenderNavigationContext,
  CALENDER_SECTION_NAMES,
  CalenderSectionNamesType
} from './calendar-utils';
import { CalendarYearsView } from './calendar-years-view';

export const CalendarRange = ({
  size = 'lg',
  showFooter = true,
  footerActionText = 'Select',
  containerCSS,
  footerAction,
  onDaySelect,
  onMonthSelect,
  onYearSelect,
  compact = false,
  ...props
}: AriaRangeCalendarProps<DateValue> &
  CalendarControlProps & {
    footerAction?: (state: RangeCalendarState) => void;
    renderFooter?: (state: RangeCalendarState) => ReactNode;
    onDaySelect?: (date: DateValue, range: CalenderSectionNamesType) => void;
    onMonthSelect?: (date: DateValue, range: CalenderSectionNamesType) => void;
    onYearSelect?: (date: DateValue, range: CalenderSectionNamesType) => void;
    compact?: boolean;
  }) => {
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: compact ? { months: 1 } : { months: 2 },
    pageBehavior: 'single',
    locale,
    createCalendar
  });
  const dateType = state.anchorDate ? CALENDER_SECTION_NAMES.start : CALENDER_SECTION_NAMES.end;

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

  const [calenderNavigationEnabled, setCalenderNavigationEnabled] = useState<{
    isEnabled: boolean;
    sectionName: CalenderSectionNamesType;
  } | null>(null);

  const handleCalenderNavigation = (values: {
    isEnabled: boolean;
    sectionName: CalenderSectionNamesType;
  } | null) => {
    setCalenderNavigationEnabled(values);
  };

  return (
    <CalendarContext.Provider value={contextProviderValue}>
      <CalenderNavigationContext.Provider value={{ calenderNavigationEnabled, handleCalenderNavigation }}>
        <Box
          css={{
            borderRadius: '$2xl',
            border: '1px solid',
            borderColor: '$neutral300',
            paddingTop: calenderNavigationEnabled?.isEnabled ? '0' : '$6',
            maxWidth: 'max-content',
            ...containerCSS
          }}
        >
          {compact ? (
            <Flex {...calendarProps} ref={ref} css={{ overflow: 'auto' }}>
              <CalendarSingleSection
                state={state}
                navigationButtonProps={{ prev: prevButtonProps, next: nextButtonProps }}
                sectionName={CALENDER_SECTION_NAMES.end}
                onDaySelect={(date) => onDaySelect?.(date, dateType)}
                onMonthSelect={(date) => onMonthSelect?.(date, dateType)}
                onYearSelect={(date) => onYearSelect?.(date, dateType)}
              />
            </Flex>
          ) : (
            <Flex {...calendarProps} gap="$8" ref={ref} css={{ overflow: 'auto' }}>
              <CalendarSingleSection
                state={state}
                navigationButtonProps={prevButtonProps}
                sectionName={CALENDER_SECTION_NAMES.start}
                onDaySelect={(date) => onDaySelect?.(date, dateType)}
                onMonthSelect={(date) => onMonthSelect?.(date, dateType)}
                onYearSelect={(date) => onYearSelect?.(date, dateType)}
              />
              <CalendarSingleSection
                state={state}
                calendarOffset={{ months: 1 }}
                sectionName={CALENDER_SECTION_NAMES.end}
                navigationButtonProps={nextButtonProps}
                onDaySelect={(date) => onDaySelect?.(date, dateType)}
                onMonthSelect={(date) => onMonthSelect?.(date, dateType)}
                onYearSelect={(date) => onYearSelect?.(date, dateType)}
              />
            </Flex>
          )}
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
                {state.value?.start
                    && state.value?.end && (
                    <Text
                      weight="medium"
                      css={{
                        color: '$neutral700'
                      }}
                    >
                      {formatter.formatRange(
                        state.value.start.toDate(state.timeZone),
                        state.value.end.toDate(state.timeZone)
                      )}
                    </Text>
                )}
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
      </CalenderNavigationContext.Provider>
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
  navigationButtonProps: AriaButtonProps<'button'> | { prev: AriaButtonProps<'button'>; next: AriaButtonProps<'button'> };
  calendarOffset?: DateDuration;
  sectionName: CalenderSectionNamesType;
  state: RangeCalendarState;
  onDaySelect?: (date: DateValue) => void;
  onMonthSelect?: (date: DateValue) => void;
  onYearSelect?: (date: DateValue) => void;
}) => {
  const [currentCalendarView, setCurrentCalendarView] = useState<
    keyof typeof CALENDAR_VIEW
  >(CALENDAR_VIEW.GRID);
  const calendarContext = useCalendarContext();
  const compact = 'prev' in navigationButtonProps && 'next' in navigationButtonProps;
  const { calenderNavigationEnabled } = useCalenderNavigationContext();
  if (calenderNavigationEnabled?.isEnabled && calenderNavigationEnabled?.sectionName !== sectionName) {
    return null;
  }

  return (
    <Box
      className={prefixClassName('calendar-range-section')}
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
            {compact ? (
              <>
                <CalendarNavigationButton
                  {...navigationButtonProps.prev}
                  icon={<ChevronLeftIcon />}
                />
                <RangeCalendarTitle
                  timezone={state.timeZone}
                  value={state.visibleRange[sectionName]}
                  sectionName={sectionName}
                  setCurrentCalendarView={setCurrentCalendarView}
                />
                <CalendarNavigationButton
                  {...navigationButtonProps.next}
                  icon={<ChevronRightIcon />}
                />
              </>
            ) : (
              <>
                {sectionName === CALENDER_SECTION_NAMES.end && <Box />}
                {sectionName === CALENDER_SECTION_NAMES.start && (
                  <CalendarNavigationButton
                    {...navigationButtonProps}
                    icon={<ChevronLeftIcon />}
                  />
                )}
                <RangeCalendarTitle
                  timezone={state.timeZone}
                  value={state.visibleRange[sectionName]}
                  sectionName={sectionName}
                  setCurrentCalendarView={setCurrentCalendarView}
                />
                {sectionName === CALENDER_SECTION_NAMES.end && (
                  <CalendarNavigationButton
                    {...navigationButtonProps}
                    icon={<ChevronRightIcon />}
                  />
                )}
                {sectionName === CALENDER_SECTION_NAMES.start && <Box />}
              </>
            )}
          </Flex>
          <CalendarGrid
            state={state}
            {...(calendarOffset && {
              offset: calendarOffset
            })}
            containerCSS={{
              maxWidth: `calc(7 * ${
                CALENDAR_SIZE_TO_DAY_BTN_SIZE[calendarContext.size]
              })`,
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
