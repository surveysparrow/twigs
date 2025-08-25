import { defaultTheme } from "@sparrowengg/twigs-react";
import { Box, Chip, Text } from "@sparrowengg/twigs-react";
import React from "react";
const defaultText = "The quick brown fox jumps over the lazy dog";

const { fontWeights } = defaultTheme;

type FontWeightKeys = keyof typeof fontWeights;

export default function AllFontWeights() {
  return (
    <Box>
      {Object.keys(fontWeights).map((fontWeight) => (
        <Box
          key={`fontWeight${fontWeight}`}
          css={{ borderBottom: "1px solid $black50", padding: "10px 0" }}
        >
          <Chip size="sm" color="primary">
            <Text>${fontWeight}</Text>/
            <Text>{fontWeights[fontWeight as unknown as FontWeightKeys]}</Text>
          </Chip>
          <Text
            size="lg"
            css={{
              fontWeight: fontWeights[fontWeight as unknown as FontWeightKeys],
              marginTop: "10px",
            }}
          >
            {defaultText}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
