import React from "react";
import {
  Stack,
  VStack,
  HStack,
  Box,
  Text,
  Separator,
} from "@sparrowengg/twigs-react";

export default function StackBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Basic VStack */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
          Basic VStack with dividers
        </Text>
        <VStack
          gap="$3"
          alignY="left"
          divider={<Separator orientation="horizontal" />}
          css={{ width: "60px" }}
        >
          <Box
            css={{
              width: "100%",
              height: "30px",
              backgroundColor: "$primary200",
              borderRadius: "$sm",
            }}
          />
          <Box
            css={{
              width: "100%",
              height: "30px",
              backgroundColor: "$secondary200",
              borderRadius: "$sm",
            }}
          />
          <Box
            css={{
              width: "100%",
              height: "30px",
              backgroundColor: "$accent200",
              borderRadius: "$sm",
            }}
          />
        </VStack>
      </Box>

      {/* Basic HStack */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Basic HStack</Text>
        <HStack gap="$3" alignX="left">
          <Box
            css={{
              width: "60px",
              height: "30px",
              backgroundColor: "$primary200",
              borderRadius: "$sm",
            }}
          />
          <Box
            css={{
              width: "60px",
              height: "30px",
              backgroundColor: "$secondary200",
              borderRadius: "$sm",
            }}
          />
          <Box
            css={{
              width: "60px",
              height: "30px",
              backgroundColor: "$accent200",
              borderRadius: "$sm",
            }}
          />
        </HStack>
      </Box>

      {/* Different alignments */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
          Different Alignments
        </Text>
        <VStack gap="$2" alignY="left">
          <Text css={{ fontSize: "$sm", fontWeight: "$5" }}>Left Aligned</Text>
          <HStack gap="$2" alignY="center">
            <Box
              css={{
                width: "40px",
                height: "20px",
                backgroundColor: "$primary200",
                borderRadius: "$sm",
              }}
            />
            <Box
              css={{
                width: "60px",
                height: "20px",
                backgroundColor: "$secondary200",
                borderRadius: "$sm",
              }}
            />
          </HStack>
        </VStack>

        <VStack gap="$2" alignY="center">
          <Text css={{ fontSize: "$sm", fontWeight: "$5" }}>
            Center Aligned
          </Text>
          <HStack gap="$2" alignY="center">
            <Box
              css={{
                width: "40px",
                height: "20px",
                backgroundColor: "$primary200",
                borderRadius: "$sm",
              }}
            />
            <Box
              css={{
                width: "60px",
                height: "20px",
                backgroundColor: "$secondary200",
                borderRadius: "$sm",
              }}
            />
          </HStack>
        </VStack>

        <VStack gap="$2" alignY="right">
          <Text css={{ fontSize: "$sm", fontWeight: "$5" }}>Right Aligned</Text>
          <HStack gap="$2" alignY="center">
            <Box
              css={{
                width: "40px",
                height: "20px",
                backgroundColor: "$primary200",
                borderRadius: "$sm",
              }}
            />
            <Box
              css={{
                width: "60px",
                height: "20px",
                backgroundColor: "$secondary200",
                borderRadius: "$sm",
              }}
            />
          </HStack>
        </VStack>
      </Box>

      {/* Stack with different directions */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
          Stack with Direction
        </Text>
        <Stack direction="row" gap="$3" alignY="left">
          <Box
            css={{
              width: "60px",
              height: "30px",
              backgroundColor: "$primary200",
              borderRadius: "$sm",
            }}
          />
          <Box
            css={{
              width: "60px",
              height: "30px",
              backgroundColor: "$secondary200",
              borderRadius: "$sm",
            }}
          />
          <Box
            css={{
              width: "60px",
              height: "30px",
              backgroundColor: "$accent200",
              borderRadius: "$sm",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}
