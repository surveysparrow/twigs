import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  Box,
  Flex,
  Switch,
  Text,
} from "@sparrowengg/twigs-react";

export default function CookieCard() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Flex
      flexDirection="column"
      gap="$6"
      css={{
        padding: "$7",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Flex alignItems="center" gap="$4">
        <Box
          css={{
            backgroundColor: "$primary50",
            border: "1px solid $primary100 !important",
            borderRadius: "$round",
            padding: "$3 $3",
          }}
        >
          🍪
        </Box>
        <Text size="md" weight="medium">
          Cookie Settings
        </Text>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" gap="$2">
        <Flex flexDirection="column" gap="$2">
          <Text size="md" weight="medium">
            Strictly Necessary
          </Text>
          <Text size="sm" css={{ color: "$neutral700" }}>
            These cookies are essential for the website.
          </Text>
          <Alert
            status="warning"
            size="sm"
            css={{
              width: "fit-content",
              border: "1px solid $warning200 !important",
            }}
          >
            <AlertDescription>Turn on for better experience.</AlertDescription>
          </Alert>
        </Flex>
        <Box>
          <Switch
            size="sm"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
        </Box>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" gap="$2">
        <Box>
          <Text size="md" weight="medium">
            Performance
          </Text>
          <Text size="sm" css={{ color: "$neutral700" }}>
            These cookies allow us to count traffic.
          </Text>
        </Box>
        <Box>
          <Switch
            size="sm"
            checked={checked2}
            onChange={() => {
              setChecked2(!checked2);
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
