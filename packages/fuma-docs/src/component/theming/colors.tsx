import { defaultTheme, styled } from "@sparrowengg/twigs-react";
import React from "react";
import { Box, Flex, Text, Heading } from "@sparrowengg/twigs-react";

export default function AllColors() {
  return (
    <Flex flexDirection="column" gap={"12px"}>
      <ColorDisplay selectedColor={"primary"} />
      <ColorDisplay selectedColor={"secondary"} />
      <ColorDisplay selectedColor={"accent"} />
      <ColorDisplay selectedColor={"highlight"} />
      <ColorDisplay selectedColor={"positive"} />
      <ColorDisplay selectedColor={"negative"} />
      <ColorDisplay selectedColor={"neutral"} />
      <ColorDisplay selectedColor={"black"} />
      <ColorDisplay selectedColor={"white"} />
    </Flex>
  );
}

const StyledHeading = styled(Heading, {
  color: "$black600",
});

type ColorKeys = keyof typeof defaultTheme.colors;

function ColorDisplay({ selectedColor }: { selectedColor: string }) {
  return (
    <Box css={{ marginBottom: 36 }}>
      <StyledHeading size="h6">
        {" "}
        {selectedColor
          .charAt(0)
          .toUpperCase()
          .concat(selectedColor.slice(1))}{" "}
      </StyledHeading>
      <Flex gap={"12px"} wrap="wrap">
        {Object.keys(defaultTheme.colors as object)
          .filter((color) => color.includes(selectedColor))
          .map((color) => (
            <div key={`color-${color}`}>
              <Box
                css={{
                  backgroundColor: defaultTheme.colors[color as ColorKeys],
                  border: "1px solid $neutral50",
                  color: "white",
                  height: "30px",
                  width: "100px",
                  borderRadius: "3px",
                }}
              />
              <Text
                size="xs"
                weight="medium"
                css={{
                  marginBottom: "0",
                  color: "$black800",
                }}
              >
                ${color}
              </Text>
              <Text
                size="xs"
                css={{
                  marginBottom: "0",
                  color: "$black700",
                }}
              >
                {defaultTheme.colors[color as ColorKeys]}
              </Text>
            </div>
          ))}
      </Flex>
    </Box>
  );
}
