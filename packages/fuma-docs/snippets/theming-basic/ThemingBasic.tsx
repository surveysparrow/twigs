import React from "react";
import { Button, Flex, Text, Box, Avatar } from "@sparrowengg/twigs-react";

export default function ThemingBasic() {
  return (
    <Flex flexDirection="column" gap="$6" alignItems="center">
      <Button
        variant="outline"
        css={{
          color: "$warning600",
          backgroundColorOpacity: ["$warning500", 0.1],
          borderColor: "$warning300",
          borderRadius: "$xl",
          padding: "$6 $7",
          transition: "all 0.3s ease-in-out",
          "&:hover, &:focus": {
            backgroundColor: "$warning600 !important",
            color: "$white900 !important",
            borderColor: "$warning600 !important",
          },
        }}
      >
        Twigs - v2
      </Button>
      <Text
        css={{
          fontSize: "$2xl",
          lineHeight: "$lg",
          fontWeight: "$5",
          padding: "$5",
          color: "$primary500",
        }}
      >
        Explore Build Connect
      </Text>
      <Text
        css={{
          color: "$neutral700",
          textAlign: "center",
        }}
      >
        Beautiful and customizable React UI for your applications by
        SurveySparrow
      </Text>
      <Button
        css={{
          backgroundColor: "$white900",
          color: "$secondary500",
          borderRadius: "$md",
          borderColor: "$secondary300",
          padding: "$6 $10",
          cursor: "pointer",
          fontSize: "$md",
          fontWeight: "$5",
          boxShadow: "0px 2px 8px $colors$secondary200",
          transition: "all 0.3s ease-in-out",
          "&:hover, &:focus": {
            backgroundColor: "$secondary600 !important",
            color: "$white900 !important",
            borderColor: "$secondary600 !important",
          },
        }}
        variant="outline"
        size="xl"
      >
        Get Started with Theming
      </Button>
      <Flex
        flexDirection="column"
        gap="$4"
        css={{
          width: "65vw",
          margin: "$5",
          padding: "$5",
          borderRadius: "$lg",
          boxShadow: "0px 2px 8px $colors$secondary200",
        }}
      >
        <Text size="md" weight="medium">
          SurveySparrow
        </Text>
        <Text css={{ color: "$neutral700" }}>
          Twigs is the gold standard of &quot;just enough design system&quot;,
          where they have figured out the minimal viable token architecture and
          an infinitely flexible base component kit. I constantly look to them
          for inspiration.
        </Text>
        <Flex gap="$4" alignItems="center">
          <Avatar
            src="https://i.pravatar.cc/150?img=38"
            name="Hemant"
            size="md"
          />
          <Box>
            <Text css={{ color: "$neutral800" }}>Hemant</Text>
            <Text css={{ color: "$neutral700" }}>Developer, SurveySparrow</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
