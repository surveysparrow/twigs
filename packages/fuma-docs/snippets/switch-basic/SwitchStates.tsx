import React from "react";
import { Switch, Box, Text, Flex, Stack } from "@sparrowengg/twigs-react";

export default function SwitchStates() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Switch States */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Switch States</Text>
        
        <Stack gap="$4" direction="row">
          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={true}
              size="md"
            />
            <Text css={{ fontSize: "$md" }}>Enabled (checked)</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={false}
              size="md"
            />
            <Text css={{ fontSize: "$md" }}>Enabled (unchecked)</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={true}
              disabled
              size="md"
            />
            <Text css={{ fontSize: "$md", color: "$neutral500" }}>Disabled (checked)</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={false}
              disabled
              size="md"
            />
            <Text css={{ fontSize: "$md", color: "$neutral500" }}>Disabled (unchecked)</Text>
          </Flex>
        </Stack>
      </Box>   
    </Box>
  );
} 