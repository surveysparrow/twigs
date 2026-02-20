import React from "react";
import { Text, Box, Stack } from "@sparrowengg/twigs-react";

export default function TextBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Size Variants */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Size Variants</Text>
        
        <Stack gap="$3">
          <Text size="xxs">Extra Extra Small Text (xxs)</Text>
          <Text size="xs">Extra Small Text (xs)</Text>
          <Text size="sm">Small Text (sm) - Default</Text>
          <Text size="md">Medium Text (md)</Text>
          <Text size="lg">Large Text (lg)</Text>
        </Stack>
      </Box>

      {/* Weight Variants */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6", marginBottom: "$2" }}>Weight Variants</Text>
        
        <Stack gap="$3">
          <Text weight="regular">Regular Weight Text</Text>
          <Text weight="medium">Medium Weight Text</Text>
          <Text weight="bold">Bold Weight Text</Text>
        </Stack>
      </Box>
    </Box>
  );
} 