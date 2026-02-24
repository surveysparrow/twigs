import { Box, CalendarRange } from "@sparrowengg/twigs-react";
import { CalendarDate, parseDate } from "@internationalized/date";
import React from "react";

export default function CalendarRangeBasic() {
  const [value, setValue] = React.useState({
    start: parseDate("2025-08-04"),
    end: parseDate("2025-08-15"),
  });

  return (
    <Box css={{ display: "flex", justifyContent: "center", padding: "$5" }}>
      <CalendarRange
        onChange={(value) =>
          setValue(value as { start: CalendarDate; end: CalendarDate })
        }
        value={value}
        minValue={parseDate("2025-08-03")}
        size="sm"
      />
    </Box>
  );
}
