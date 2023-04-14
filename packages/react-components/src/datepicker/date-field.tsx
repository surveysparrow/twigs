import React, { forwardRef, useRef } from "react";
import { useDateFieldState } from "react-stately";
import {
  useDateField,
  useLocale
} from "react-aria";
import { createCalendar } from "@internationalized/date";
import { Box } from "../box";
import { Flex } from "../flex";
import { DateTimeSegment } from "./date-time-segment";

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
        // eslint-disable-next-line  react/no-array-index-key
        <DateTimeSegment key={`twigs-datefield-${i}`} segment={segment} state={state} />
      ))}
    </Flex>
  );
}

type StyledFieldT = {
  children: React.ReactElement
}

export const StyledField = forwardRef(({ children, ...otherProps }: StyledFieldT, ref) => {
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
