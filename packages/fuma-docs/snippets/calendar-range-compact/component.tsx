import { Box, CalendarRange, Text } from "@sparrowengg/twigs-react";
import { CalendarDate, parseDate } from "@internationalized/date";
import React from "react";

export default function Component() {
  const [value, setValue] = React.useState({
    start: parseDate("2025-08-04"),
    end: parseDate("2025-08-15"),
  });

  return (
    <Box
      css={{ display: "flex", flexDirection: "row", gap: "$5", padding: "$5" }}
    >
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Compact Calendar Range
        </Text>
        <CalendarRange
          onChange={(value) =>
            setValue(value as { start: CalendarDate; end: CalendarDate })
          }
          value={value}
          size="sm"
          compact={true}
          footerActionText="Continue"
        />
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Compact Calendar Range without footer
        </Text>
        <CalendarRange
          onChange={(value) =>
            setValue(value as { start: CalendarDate; end: CalendarDate })
          }
          value={value}
          size="sm"
          compact={true}
          showFooter={false}
        />
      </Box>
    </Box>
  );
}
