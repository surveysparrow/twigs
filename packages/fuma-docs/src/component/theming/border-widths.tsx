import { Box, Chip, Flex, Text } from "@sparrowengg/twigs-react";
import { defaultTheme } from "@sparrowengg/twigs-react";
import React from "react";

const { borderWidths } = defaultTheme;

type BorderWidthKeys = keyof typeof borderWidths;

export default function AllBorderWidths() {
  return (
    <Box>
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
