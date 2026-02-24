import React from "react";
import { Box } from "@sparrowengg/twigs-react";

export default function Divider() {
  return (
    <Box
      css={{
        padding: "2rem 0",
      }}
    >
      <Box
        css={{
          height: 1,
          background: "$black50",
        }}
      />
    </Box>
  );
}
