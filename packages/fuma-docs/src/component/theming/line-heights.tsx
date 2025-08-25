import { defaultTheme } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Chip, Text } from "@sparrowengg/twigs-react";
import React from "react";
const defaultText =
  "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";

const { lineHeights } = defaultTheme;

type LineHeightKeys = keyof typeof lineHeights;

export default function AllLineHeights() {
  return (
    <Box>
      {Object.keys(lineHeights).map((_lineHeight) => {
        const lineHeight = _lineHeight as LineHeightKeys;
        const pxVal = remToPix(lineHeights[lineHeight]);
        return (
          <Box
            key={`lineHeight${lineHeight}`}
            css={{ borderBottom: "1px solid $black50", padding: "10px 0" }}
          >
            <Chip size="sm" color="primary">
              <Text>${lineHeight}</Text>/<Text>{lineHeights[lineHeight]}</Text>
              {lineHeights[lineHeight].includes("rem") && (
                <Text>{`(${pxVal}px)`}</Text>
              )}
            </Chip>
            <Text
              size="sm"
              css={{
                lineHeight: lineHeights[lineHeight],
                marginTop: "10px",
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
