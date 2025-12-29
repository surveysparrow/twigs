import React, { useState } from "react";
import {
  Box,
  Flex,
  Switch,
  Text,
} from "@sparrowengg/twigs-react";

export default function CookieCard() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <Flex
      flexDirection="column"
      gap="$7"
      css={{
        padding: "$7",
        paddingBottom: "$14",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Flex alignItems="center" gap="$4">
        <Box>
          🍪
        </Box>
        <Text size="md" weight="medium">
          Cookie Settings
        </Text>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" gap="$2" css={{ "@media (max-width: 768px)": { gap: "0" } }}>
        <Box>
          <Text size="md" weight="medium">
          Strictly necessary
          </Text>
          <Text size="xs" css={{ color: "$neutral500", "@media (max-width: 768px)": { width: "90%" } }}>
          These cookies are required for the website to function properly, enabling core features.
          </Text>
        </Box>
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
      <Flex flexDirection="row" justifyContent="space-between" gap="$2" css={{ "@media (max-width: 768px)": { gap: "0" } }}>
        <Box>
          <Text size="md" weight="medium">
            Performance
          </Text>
          <Text size="xs" css={{ color: "$neutral500", "@media (max-width: 768px)": { width: "90%" } }}>
          These cookies help us measure and analyze how users interact with the site, allowing us to improve speed.
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
      <Flex flexDirection="row" justifyContent="space-between" gap="$2" css={{ "@media (max-width: 768px)": { gap: "0" } }}>
        <Box>
          <Text size="md" weight="medium">
            Functional
          </Text>
          <Text size="xs" css={{ color: "$neutral500", "@media (max-width: 768px)": { width: "90%" } }}>
          These cookies enable enhanced features like remembering your preferences, saved settings.
          </Text>
        </Box>
        <Box>
          <Switch
            size="sm"
            checked={checked3}
            onChange={() => {
              setChecked3(!checked3);
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
