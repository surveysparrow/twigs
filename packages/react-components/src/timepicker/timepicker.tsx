import React, { useRef } from 'react';
import {
  AriaTimeFieldProps, TimeValue, useLocale, useTimeField
} from 'react-aria';
import { DateSegment, useTimeFieldState } from 'react-stately';
import { Box } from '../box';
import { DateTimeSegment } from '../datepicker/date-time-segment';
import { Flex } from '../flex';
import { FormLabel } from '../form-label';

export const TimePicker = (props: AriaTimeFieldProps<TimeValue>) => {
  const { locale } = useLocale();
  const state = useTimeFieldState({
    ...props,
    locale
  });
  const ref = useRef(null);
  const { labelProps, fieldProps } = useTimeField(props, state, ref);

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
      <Flex
        {...fieldProps}
        className="field"
        css={{
          display: 'inline-flex',
          width: 'auto',
          background: '$black50',
          border: 'none',
          padding: '$4 $6',
          borderRadius: '$lg'
        }}
      >
        {state.segments.map((segment: DateSegment, index: number) => (
          <DateTimeSegment
            // eslint-disable-next-line  react/no-array-index-key
            key={`twigs-datetime-segment-${index}`}
            segment={segment}
            state={state}
          />
        ))}
      </Flex>
    </Box>
  );
};
