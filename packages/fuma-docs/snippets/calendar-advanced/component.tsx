import { Box, Calendar, Text } from "@sparrowengg/twigs-react";
import { CalendarDate, DateValue, parseDate } from "@internationalized/date";
import React from "react";

export default function Component() {
  const [value, setValue] = React.useState(parseDate("2025-08-25"));
  const [selectedDate, setSelectedDate] = React.useState<CalendarDate | null>(
    null
  );

  const isDateUnavailable = (date: DateValue) => {
    const dayOfWeek = date.toDate("UTC").getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const handleFooterAction = (state: { value: CalendarDate | null }) => {
    if (state.value) {
      setSelectedDate(state.value);
    }
  };

  const handleDaySelect = (date: DateValue) => {
    console.log("Day selected:", date.toString());
  };

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "$5",
        padding: "$5",
      }}
    >
      <Box>
        <Text weight="bold" size="md" css={{ marginBottom: "$2" }}>
          Calendar with Unavailable Dates
        </Text>
        <Text size="sm" css={{ marginBottom: "$2" }}>
          Weekends are unavailable for selection
        </Text>
        <Calendar
          onChange={(value) => setValue(value as CalendarDate)}
          value={value}
          size="sm"
          isDateUnavailable={isDateUnavailable}
          footerActionText="Book Date"
          footerAction={handleFooterAction}
          onDaySelect={handleDaySelect}
        />
      </Box>

      {selectedDate && (
        <Box
          css={{
            display: "flex",
            padding: "$3",
            gap: "$2",
            backgroundColor: "$secondary50",
            borderRadius: "$2",
            color: "$secondary900",
          }}
        >
          <Text weight="medium">Booked Date:</Text>
          <Text>{selectedDate.toString()}</Text>
        </Box>
      )}
    </Box>
  );
}
