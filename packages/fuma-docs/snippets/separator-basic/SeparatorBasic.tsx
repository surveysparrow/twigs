import React from "react";
import { Separator, Box, Text, Flex } from "@sparrowengg/twigs-react";

export default function SeparatorBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      {/* Horizontal Separator */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", width: "300px" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Horizontal Separator</Text>
        <Text css={{ fontSize: "$sm", color: "$neutral700" }}>Content above the separator</Text>
        <Separator orientation="horizontal" />
        <Text css={{ fontSize: "$sm", color: "$neutral700" }}>Content below the separator</Text>
      </Box>

      {/* Vertical Separator */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", alignItems: "center" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Vertical Separator</Text>
        <Flex css={{ alignItems: "center", height: "40px", gap: "$4" }}>
          <Text css={{ fontSize: "$sm" }}>Home</Text>
          <Separator orientation="vertical" />
          <Text css={{ fontSize: "$sm" }}>About</Text>
          <Separator orientation="vertical" />
          <Text css={{ fontSize: "$sm" }}>Contact</Text>
        </Flex>
      </Box>

      {/* Decorative Separator */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", width: "300px" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Decorative Separator</Text>
        <Text css={{ fontSize: "$sm", color: "$neutral700" }}>Visual separation only</Text>
        <Separator orientation="horizontal" decorative />
        <Text css={{ fontSize: "$sm", color: "$neutral700" }}>Not announced to screen readers</Text>
      </Box>
    </Box>
  );
}