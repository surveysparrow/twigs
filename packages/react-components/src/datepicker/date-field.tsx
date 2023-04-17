import React, { useRef } from 'react';
import { useDateFieldState } from 'react-stately';
import {
  useDateField,
  useLocale
} from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { Box } from '../box';
import { Flex } from '../flex';
import { DateTimeSegment } from './date-time-segment';

export const DateField = (props) => {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  const ref = useRef(null);
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <Flex {...fieldProps} ref={ref}>
      {state.segments.map((segment, i) => (
        // eslint-disable-next-line  react/no-array-index-key
        <DateTimeSegment key={`twigs-datefield-${i}`} segment={segment} state={state} />
      ))}
    </Flex>
  );
};

type StyledFieldT = {
  children: React.ReactElement
}

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
