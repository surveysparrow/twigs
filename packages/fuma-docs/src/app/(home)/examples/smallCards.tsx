import React from "react";
import { Box, Flex, Text } from "@sparrowengg/twigs-react";
import { ClapIcon } from "@sparrowengg/twigs-react-icons";

export default function SmallCards() {
  return (
    <Flex gap="$8" flexDirection="row">
      <Flex
        flexDirection="column"
        justifyContent="between"
        gap="$10"
        css={{
          width: "50%",
          height: "100%",
          padding: "$6",
          borderRadius: "$2xl",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          backgroundColor: "white",
        }}
      >
        <Flex
          flexDirection="row"
          gap="$4"
          justifyContent="between"
          alignItems="center"
        >
          <Text size="md" weight="medium">
            Calories Burnt
          </Text>
          <Box
            css={{
              backgroundColor: "$primary50",
              borderRadius: "$round",
              padding: "$3 $3",
              border: "1px solid $primary100 !important",
            }}
          >
            🔥
          </Box>
        </Flex>
        <Flex flexDirection="column" gap="$6">
          <Text size="sm" css={{ color: "$neutral700" }}>
            Processed: 12:00 PM
          </Text>
          <Box>
            <Text size="sm" css={{ color: "$neutral700" }}>
              {" "}
              <span style={{ color: "var(--twigs-colors-primary500)" }}>
                1.4K
              </span>{" "}
              Calories
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="between"
        gap="$7"
        css={{
          width: "50%",
          height: "100%",
          padding: "$6",
          borderRadius: "$2xl",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          backgroundColor: "white",
        }}
      >
        <Flex
          flexDirection="row"
          gap="$4"
          justifyContent="between"
          alignItems="center"
        >
          <Text size="md" weight="medium">
            Distance Travelled
          </Text>
          <Box
            css={{
              backgroundColor: "$primary50",
              borderRadius: "$round",
              padding: "$3 $3",
              border: "1px solid $primary100 !important",
            }}
          >
            🏃
          </Box>
        </Flex>
        <Flex flexDirection="row" gap="$4" alignItems="center">
          <ClapIcon size={20} />
          <Text size="sm" css={{ color: "$neutral700" }}>
            Hurray!
          </Text>
        </Flex>
        <Flex>
          <Text size="sm" css={{ color: "$neutral700" }}>
            {" "}
            <span style={{ color: "var(--twigs-colors-primary500)" }}>
              20
            </span>{" "}
            Kilometers
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
