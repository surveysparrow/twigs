import React from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent, Box,Button, Text, Flex } from "@sparrowengg/twigs-react";

export default function HoverCardBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <HoverCard openDelay={700} closeDelay={300}>
        <HoverCardTrigger asChild>
          <Button>
            Hover over me
          </Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" align="center" sideOffset={8}>
          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontWeight: "$6", fontSize: "$md" }}>Hover Card Title</Text>
            <Text css={{ fontSize: "$sm", color: "$neutral600", lineHeight: "$md" }}>
              This is a detailed description that appears when you hover over the trigger element.
            </Text>
            <Flex gap="$2" css={{ marginTop: "$2" }}>
              <Button color={"default"} >
                Feature 1
              </Button>
              <Button color={"default"}>
                Feature 2
              </Button>
            </Flex>
          </Box>
        </HoverCardContent>
      </HoverCard>
    </Box>
  );
} 