import { Box, Chip, Flex, Text } from "@sparrowengg/twigs-react";
import { defaultTheme } from "@sparrowengg/twigs-react";
import React from "react";

const { borderWidths } = defaultTheme;

type BorderWidthKeys = keyof typeof borderWidths;

export function AllBorderWidths() {
  return (
    <Box className="max-h-[500px] overflow-y-auto border border-fd-border rounded-lg p-4 bg-fd-card">
      <Flex gap="$8" wrap="wrap">
        {Object.keys(borderWidths).map((borderWidth) => (
          <div key={`borderWidth${borderWidth}`}>
            <Chip size="sm" color="primary">
              <Text>$ {borderWidth}</Text>/
              <Text>{borderWidths[borderWidth as BorderWidthKeys]}</Text>
            </Chip>
            <Box
              css={{
                border: `${
                  borderWidths[borderWidth as BorderWidthKeys]
                } solid $black400`,
                marginTop: "10px",
                padding: "10px",
                color: "black",
              }}
            />
          </div>
        ))}
      </Flex>
    </Box>
  );
}
