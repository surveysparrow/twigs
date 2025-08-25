import React from "react";
import { defaultTheme } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Chip, Text } from "@sparrowengg/twigs-react";

const defaultText = "The quick brown fox jumps over the lazy dog";

const { fontSizes } = defaultTheme;

type FontSizeKeys = keyof typeof fontSizes;

export default function AllFontSizes() {
  return (
    <Box>
      {Object.keys(fontSizes).map((fontSize) => {
        const pxVal = remToPix(fontSizes[fontSize as FontSizeKeys]);
        return (
          <Box
            key={`fontSize-${fontSize}`}
            css={{ borderBottom: "1px solid $black50", padding: "10px 0" }}
          >
            <Chip size="sm" color="primary">
              <Text>${fontSize}</Text>:
              <Text>{fontSizes[fontSize as FontSizeKeys]}</Text>(
              <Text>
                {pxVal}
                px
              </Text>
              )
            </Chip>
            <Text
              size="sm"
              css={{
                fontSize: fontSizes[fontSize as FontSizeKeys],
                marginTop: "10px",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
            >
              {defaultText}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
