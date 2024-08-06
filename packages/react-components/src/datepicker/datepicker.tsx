import { CalendarIcon } from '@sparrowengg/twigs-react-icons';
import { ReactNode, useEffect, useRef } from 'react';
import {
  AriaDatePickerProps, AriaDialogProps, CalendarProps, DateValue, useDatePicker
} from 'react-aria';
import { CalendarState, DatePickerState, useDatePickerState } from 'react-stately';
import { CSS } from '@stitches/react';
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
  Popover, PopoverContent, PopoverPortal, PopoverTrigger
} from '../popover';
import { DateField } from './date-field';

export type DatePickerProps = AriaDatePickerProps<DateValue> & {
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
  enablePortal?:boolean;
  contentStyle?:CSS;
} & CalendarControlProps;

export type DatePickerContentProps = AriaDatePickerProps<DateValue> & {
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
  dialogProps:AriaDialogProps;
  calendarProps:CalendarProps<DateValue>;
  state:DatePickerState;
  contentStyle?:CSS;
} & CalendarControlProps;

const DatePickerContent = ({
  showFooter,
  showTimePicker,
  showTimezonePicker,
  renderFooter,
  footerAction,
  footerActionText,
  state,
  dialogProps, calendarProps, contentStyle, ...props
}:DatePickerContentProps) => {
  return (
    <PopoverContent
      {...dialogProps}
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
        showFooter={showFooter}
        showTimePicker={showTimePicker}
        showTimezonePicker={showTimezonePicker}
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
      />
    </PopoverContent>
  );
};

export const DatePicker = ({
  showFooter,
  showTimePicker,
  showTimezonePicker,
  renderFooter,
  footerAction,
  footerActionText,
  enablePortal = false,
  contentStyle,
  ...props
}: DatePickerProps) => {
  const state = useDatePickerState({
    shouldCloseOnSelect: false,
    ...props
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
        flexDirection: 'column'
      }}
    >
      {props.label && (
        <FormLabel {...labelProps} css={{ mb: '3px' }}>
          {props.label}
        </FormLabel>
      )}

      <Popover open={state.isOpen} onOpenChange={state.toggle}>
        <PopoverTrigger asChild>
          <Box
            {...groupProps}
            ref={ref}
            css={{
              display: 'inline-flex',
              width: 'auto',
              background: '$black50',
              border: 'none',
              padding: '$4 $6',
              borderRadius: '$lg'
            }}
          >
            <Box
              css={{
                position: 'relative',
                transition: 'all 200ms',
                display: 'flex',
                alignItems: 'center'
              }}
              ref={ref}
            >
              <DateField {...fieldProps} />
            </Box>
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
          </Box>
        </PopoverTrigger>
        {
          enablePortal ? (
            <PopoverPortal>
              <DatePickerContent
                dialogProps={dialogProps}
                calendarProps={calendarProps}
                state={state}
                showFooter={showFooter}
                showTimePicker={showTimePicker}
                showTimezonePicker={showTimezonePicker}
                renderFooter={renderFooter}
                footerAction={footerAction}
                footerActionText={footerActionText}
                contentStyle={contentStyle}
              />
            </PopoverPortal>
          ) : (
            <DatePickerContent
              dialogProps={dialogProps}
              calendarProps={calendarProps}
              state={state}
              showFooter={showFooter}
              showTimePicker={showTimePicker}
              showTimezonePicker={showTimezonePicker}
              renderFooter={renderFooter}
              footerAction={footerAction}
              footerActionText={footerActionText}
            />
          )
        }

      </Popover>
    </Box>
  );
};
