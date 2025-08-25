import { defaultTheme } from "@sparrowengg/twigs-react";
import { remToPix } from "@/lib/utils";
import { Box, Chip, Text, Flex } from "@sparrowengg/twigs-react";
import React from "react";

const { radii } = defaultTheme;

type RadiiKeys = keyof typeof radii;

export default function AllRadii() {
  return (
    <Box>
      <Flex gap="$16" wrap="wrap">
        {Object.keys(radii).map((rad) => {
          const pxVal = remToPix(radii[rad as RadiiKeys]);
          return (
            <div key={`rad-${rad}`}>
              <Chip color="primary">
                <Text size="sm">{rad}</Text>:
                <Text size="sm">{radii[rad as RadiiKeys]}</Text>
                {radii[rad as RadiiKeys].includes("rem") && (
                  <Text size="sm">{`(${pxVal}px)`}</Text>
                )}
              </Chip>
              <Box
                css={{
                  border: "1px solid $black400",
                  borderRadius: radii[rad as RadiiKeys],
                  margin: "10px 0 10px 0",
                  padding: "10px",
                  color: "black",
                  height: 100,
                  width: 100,
                }}
              />
            </div>
          );
        })}
      </Flex>
    </Box>
  );
}
