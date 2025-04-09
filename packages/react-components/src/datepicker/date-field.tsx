import React, { useRef } from 'react';
import { DateSegment, useDateFieldState } from 'react-stately';
import {
  AriaDatePickerProps,
  DateValue,
  useDateField,
  useLocale
} from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { Box } from '../box';
import { Flex } from '../flex';
import { DateTimeSegment } from './date-time-segment';

interface DateFieldProps extends AriaDatePickerProps<DateValue> {
  formatSegments?: (segments: DateSegment[]) => DateSegment[];
}

export const DateField = ({ formatSegments, ...props }: DateFieldProps) => {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  const segments = formatSegments
    ? formatSegments(state.segments)
    : state.segments;

  const ref = useRef(null);
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <Flex {...fieldProps} ref={ref}>
      {segments.map((segment, i) => (
        <DateTimeSegment
          // eslint-disable-next-line  react/no-array-index-key
          key={`twigs-datefield-${i}`}
          segment={segment}
          state={state}
        />
      ))}
    </Flex>
  );
};

type StyledFieldT = {
  children: React.ReactElement;
};

export const StyledField = ({ children, ...otherProps }: StyledFieldT) => {
  return (
    <Box
      {...otherProps}
      css={{
        transition: 'all 200ms',
        display: 'flex',
        alignItems: 'center',
        p: 0
      }}
    >
      {children}
    </Box>
  );
};
