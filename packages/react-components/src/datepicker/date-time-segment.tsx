import React, { useRef } from 'react';
import { useDateSegment } from 'react-aria';
import { DateFieldState, DateSegment } from 'react-stately';
import { Box } from '../box';
import { Text } from '../text';

type DateTimeSegmentProps = {
  segment: DateSegment;
  state: DateFieldState;
};

export const DateTimeSegment = ({ segment, state }: DateTimeSegmentProps) => {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <Box
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style
      }}
      css={{
        outline: 'none',
        textAlign: 'center',
        color: '$black900',
        borderRadius: '$xs',
        minWidth:
          segment.maxValue != null
            ? `${String(segment.maxValue).length}ch`
            : 'auto',
        '&:focus': {
          background: '$black100'
        }
      }}
    >
      <Text
        size="md"
        weight="medium"
        css={{
          color: '$neutral800'
        }}
      >
        {segment.text}
      </Text>
    </Box>
  );
};
