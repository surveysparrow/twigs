import React from "react";
import { Flex, Box } from "@sparrowengg/twigs-react";

export default function FlexBasic() {
  return (
    <Flex gap="$4" alignItems="center" justifyContent="space-between">
      <Box css={{ padding: "$4", background: "$primary200", borderRadius: "$md" }}>
        Item 1
      </Box>
      <Box css={{ padding: "$4", background: "$secondary200", borderRadius: "$md" }}>
        Item 2
      </Box>
      <Box css={{ padding: "$4", background: "$accent200", borderRadius: "$md" }}>
        Item 3
      </Box>
    </Flex>
  );
} 