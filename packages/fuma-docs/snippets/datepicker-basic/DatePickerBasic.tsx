import React from "react";
import { Box, DatePicker } from "@sparrowengg/twigs-react";
import { CalendarDate } from "@internationalized/date";

export default function DatePickerBasic() {
  const [value, setValue] = React.useState<CalendarDate | undefined>(undefined);

  return (
    <Box css={{ display: "flex", justifyContent: "center", }}>
      <DatePicker
        value={value}
        size="sm"
        onChange={(value) => setValue(value as CalendarDate)}
      />
    </Box>
  );
} 