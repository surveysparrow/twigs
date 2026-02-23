import { CalendarIcon } from '@sparrowengg/twigs-react-icons';
import { prefixClassName } from '@src/utils';
import { CSS } from '@stitches/react';
import {
  ComponentProps, ReactNode, useEffect, useRef
} from 'react';
import { AriaDatePickerProps, DateValue, useDatePicker } from 'react-aria';
import { CalendarState, DateSegment, useDatePickerState } from 'react-stately';
import { Box } from '../box';
import { IconButton } from '../button';
import { Calendar } from '../calendar';
import {
  CALENDAR_SIZE_TO_BORDER_RADIUS,
  CALENDAR_SIZE_TO_WIDTH,
  CalendarControlProps
} from '../calendar/calendar-utils';
import { FormLabel } from '../form-label';
import { usePrevious } from '../hooks/use-previous';
import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger
} from '../popover';
import { DateField } from './date-field';

export type DatePickerProps = AriaDatePickerProps<DateValue> &
  Omit<CalendarControlProps, 'footerAction' | 'renderFooter'> & {
    label?: string;
    closeOnSelect?: boolean;
    footerAction?: (
      state: CalendarState,
      setPopoverOpen: (isOpen: boolean) => void
    ) => void;
    renderFooter?: (
      state: CalendarState,
      setPopoverOpen: (isOpen: boolean) => void
    ) => ReactNode;
    enablePortal?: boolean;
    contentStyle?: CSS;
    portalTarget?: Element | null | undefined;
    calendarContainerCSS?: CalendarControlProps['containerCSS'];
    popoverContentProps?: ComponentProps<typeof PopoverContent>;
    formatSegments?: (segments: DateSegment[]) => DateSegment[];
  };

export const DatePicker = ({
  showFooter,
  showTimePicker,
  showTimezonePicker,
  hourCycle,
  renderFooter,
  footerAction,
  footerActionText,
  enablePortal = false,
  contentStyle,
  portalTarget,
  containerCSS,
  popoverContentProps,
  calendarContainerCSS,
  onDaySelect,
  onMonthSelect,
  onYearSelect,
  formatSegments,
  ...props
}: DatePickerProps) => {
  const dateValue = props.value;
  const state = useDatePickerState({
    shouldCloseOnSelect: false,
    ...props,
    value: dateValue
  });

  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps
  } = useDatePicker(props, state, ref);

  const previousDay = usePrevious(state.value?.day);

  useEffect(() => {
    if (props.closeOnSelect && state.value?.day !== previousDay) {
      state.close();
    }
  }, [state.value?.day, props.closeOnSelect]);

  return (
    <Box
      css={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        ...containerCSS
      }}
    >
      {props.label && (
        <FormLabel {...labelProps} css={{ mb: '3px' }}>
          {props.label}
        </FormLabel>
      )}

      <Popover open={state.isOpen} onOpenChange={state.toggle}>
        <Box
          {...groupProps}
          className={prefixClassName('datepicker__field-container')}
          ref={ref}
          css={{
            display: 'inline-flex',
            width: 'auto',
            background: '$black50',
            border: 'none',
            padding: '$4 $6',
            borderRadius: '$lg',
            justifyContent: 'space-between'
          }}
        >
          <Box
            css={{
              position: 'relative',
              transition: 'all 200ms',
              display: 'flex',
              alignItems: 'center'
            }}
            className={prefixClassName('datepicker__field')}
            ref={ref}
          >
            <DateField {...fieldProps} formatSegments={formatSegments} />
          </Box>
          <PopoverTrigger asChild>
            <IconButton
              {...buttonProps}
              onClick={state.open}
              color="bright"
              size="md"
              css={{
                background: 'none',
                color: '$black900'
              }}
              type="button"
              icon={<CalendarIcon />}
            />
          </PopoverTrigger>
        </Box>
        <PopoverWrapper enablePortal={enablePortal} portalTarget={portalTarget}>
          <PopoverContent
            {...dialogProps}
            align="end"
            sideOffset={10}
            alignOffset={-12}
            {...popoverContentProps}
            css={{
              width: 'auto',
              padding: '0',
              maxWidth: CALENDAR_SIZE_TO_WIDTH[props.size || 'lg'],
              borderRadius: CALENDAR_SIZE_TO_BORDER_RADIUS[props.size || 'lg'],
              ...contentStyle
            }}
          >
            <Calendar
              {...calendarProps}
              value={props.value}
              showFooter={showFooter}
              showTimePicker={showTimePicker}
              showTimezonePicker={showTimezonePicker}
              hourCycle={hourCycle}
              renderFooter={
                renderFooter
                  ? (calendarState) => renderFooter(calendarState, state.setOpen)
                  : undefined
              }
              footerAction={
                footerAction
                  ? (calendarState) => footerAction(calendarState, state.setOpen)
                  : undefined
              }
              footerActionText={footerActionText}
              size={props.size}
              onDaySelect={onDaySelect}
              onMonthSelect={onMonthSelect}
              onYearSelect={onYearSelect}
              containerCSS={calendarContainerCSS}
              onChange={props.onChange}
            />
          </PopoverContent>
        </PopoverWrapper>
      </Popover>
    </Box>
  );
};

const PopoverWrapper = ({
  enablePortal,
  portalTarget,
  children
}: {
  enablePortal: boolean;
  portalTarget: Element | null | undefined;
  children: ReactNode;
}) => {
  if (enablePortal) {
    return (
      <PopoverPortal {...(portalTarget && { container: portalTarget })}>
        {children}
      </PopoverPortal>
    );
  }
  return children;
};
