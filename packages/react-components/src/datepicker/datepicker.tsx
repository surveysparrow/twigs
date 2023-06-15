import React, { useRef } from 'react';
import { useDatePickerState } from 'react-stately';
import { AriaDatePickerProps, DateValue, useDatePicker } from 'react-aria';
import { CalendarIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '../box';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Calendar } from '../calendar';
import { DateField } from './date-field';
import { FormLabel } from '../form-label';
import { IconButton } from '../button';

export type DatePickerProps = AriaDatePickerProps<DateValue> & {
  label?: string,
  closeOnSelect?: boolean,
}

export const DatePicker = (props: DatePickerProps) => {
  const state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: props.closeOnSelect
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

  return (
    <Box
      css={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column'
      }}
    >
      {
        props.label
        && <FormLabel {...labelProps} css={{ mb: '3px' }}>{props.label}</FormLabel>
      }

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
              icon={<CalendarIcon />}
            />
          </Box>
        </PopoverTrigger>
        <PopoverContent
          {...dialogProps}
          css={{
            width: 'auto',
            maxWidth: 340
          }}
        >
          <Calendar {...calendarProps} />
        </PopoverContent>
      </Popover>

    </Box>
  );
};
