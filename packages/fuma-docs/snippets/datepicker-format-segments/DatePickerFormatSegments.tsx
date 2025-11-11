import React from "react";
import { Box, DatePicker } from "@sparrowengg/twigs-react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { DateSegment } from "react-stately";

export default function DatePickerFormatSegments() {
  const [value, setValue] = React.useState(parseDate("2025-08-29"));

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formatSegments = (segments: DateSegment[]) => {
    return segments.map((segment: DateSegment) => {
      if (segment.type === "month") {
        return { ...segment, text: months[(segment.value || 1) - 1] };
      }
      if (segment.type === "literal") {
        return { ...segment, text: "-" };
      }
      return segment;
    });
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "$4" }}>
      <DatePicker
        value={value}
        size="sm"
        onChange={(value) => setValue(value as CalendarDate)}
        formatSegments={formatSegments}
        footerAction={(_, setPopoverOpen) => setPopoverOpen(false)}
      />
      {value && (
        <Box css={{ fontSize: "$sm", color: "$neutral600" }}>
          Selected date: {value.day}/{value.month}/{value.year}
        </Box>
      )}
    </Box>
  );
} 