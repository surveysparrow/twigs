import { Box, Calendar } from "@sparrowengg/twigs-react";
import { CalendarDate, parseDate } from "@internationalized/date";
import React from "react";

export default function Component() {
  const [value, setValue] = React.useState(parseDate("2025-08-24"));

  return (
    <Box css={{ display: "flex", justifyContent: "center", padding: "$5" }}>
      <Calendar
        onChange={(value) => setValue(value as CalendarDate)}
        value={value}
        minValue={parseDate("2025-08-20")}
        maxValue={parseDate("2025-09-15")}
        size="md"
      />
    </Box>
  );
}
