import React from "react";
import { TimePicker, Box, Text } from "@sparrowengg/twigs-react";

export default function Component() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
      <Box css={{ display: "flex", gap: "$15" }}>
        <Box>
          <Text weight="bold">Basic TimePicker</Text>
          <TimePicker label="Select time" />
        </Box>
        <Box>
          <Text weight="bold">12 Hour Format</Text>
          <TimePicker label="12 Hour Time" hourCycle={12} />
        </Box>
        <Box>
          <Text weight="bold">24 Hour Format</Text>
          <TimePicker label="24 Hour Time" hourCycle={24} />
        </Box>
      </Box>
      <Box css={{ display: "flex", gap: "$15" }}>
        <Box>
          <Text weight="bold">Hour Granularity</Text>

          <TimePicker label="Hour Only" granularity="hour" />
        </Box>

        <Box>
          <Text weight="bold">Minute Granularity</Text>

          <TimePicker label="Hour and Minute" granularity="minute" />
        </Box>

        <Box>
          <Text weight="bold">Second Granularity</Text>

          <TimePicker label="Full Time with Seconds" granularity="second" />
        </Box>
      </Box>
    </Box>
  );
}
