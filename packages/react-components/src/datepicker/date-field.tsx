import React, { forwardRef, useRef } from "react";
import { useDateFieldState, useTimeFieldState } from "react-stately";
import {
  useDateField,
  useDateSegment,
  useTimeField,
  useLocale
} from "react-aria";
import { createCalendar } from "@internationalized/date";
import { Box } from "../box";
import { Flex } from "../flex";
import { FormLabel } from "../form-label";


function DateSegment({ segment, state }) {
  let ref = useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);

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
        minWidth: segment.maxValue != null ? String(segment.maxValue).length + "ch" : 'auto',
        '&:focus': {
          background: '$black100'
        }
      }}
    >
      {segment.text}
    </Box>
  );
}

export function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  let ref = useRef(null);
  let { fieldProps } = useDateField(props, state, ref);

  return (
    <Flex {...fieldProps} ref={ref}>
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </Flex>
  );
}


export const StyledField = forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <Box
      {...otherProps}
      css={{
        transition: "all 200ms",
        display: "flex",
        alignItems: "center",
        p: 0
      }}
      ref={ref}
    >
      {children}
    </Box>
  );
});

export function TimeField(props) {
  let { locale } = useLocale();
  let state = useTimeFieldState({
    ...props,
    locale,
    createCalendar
  });

  let ref = useRef(null);
  let { labelProps, fieldProps } = useTimeField(props, state, ref);

  return (
    <Flex>
      <FormLabel {...labelProps}>{props.label}</FormLabel>
      <StyledField {...fieldProps} ref={ref}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </StyledField>
    </Flex>
  );
}
