import React from "react";
import { Separator, Box, Text, Flex } from "@sparrowengg/twigs-react";

export default function SeparatorBasic() {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$6",
        alignItems: "center",
      }}
    >
      {/* Horizontal Separator */}
      <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
        Horizontal Separator
      </Text>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$2",
          width: "300px",
          border: "1px solid $neutral100",
          borderRadius: "$md",
        }}
      >
        <Text css={{ fontSize: "$sm", color: "$neutral700", padding: "$3" }}>
          Content above the separator
        </Text>
        <Separator orientation="horizontal" />
        <Text css={{ fontSize: "$sm", color: "$neutral700", padding: "$3" }}>
          Content below the separator
        </Text>
      </Box>

      {/* Vertical Separator */}
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$4",
          alignItems: "center",
        }}
      >
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
          Vertical Separator
        </Text>
        <Flex
          css={{
            alignItems: "center",
            height: "40px",
            gap: "$2",
            border: "1px solid $neutral100",
            borderRadius: "$md",
          }}
        >
          <Text css={{ fontSize: "$sm", padding: "$3", color: "$neutral700" }}>
            Home
          </Text>
          <Separator orientation="vertical" />
          <Text css={{ fontSize: "$sm", padding: "$3", color: "$neutral700" }}>
            About
          </Text>
          <Separator orientation="vertical" />
          <Text css={{ fontSize: "$sm", padding: "$3", color: "$neutral700" }}>
            Contact
          </Text>
        </Flex>
      </Box>

      {/* Decorative Separator */}
      <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
        Decorative Separator
      </Text>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$2",
          width: "300px",
          border: "1px solid $neutral100",
          borderRadius: "$md",
        }}
      >
        <Text css={{ fontSize: "$sm", color: "$neutral700", padding: "$3" }}>
          Visual separation only
        </Text>
        <Separator orientation="horizontal" decorative />
        <Text css={{ fontSize: "$sm", color: "$neutral700", padding: "$3" }}>
          Not announced to screen readers
        </Text>
      </Box>
    </Box>
  );
}
