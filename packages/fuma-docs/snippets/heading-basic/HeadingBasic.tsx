import React from "react";
import { Heading, Box } from "@sparrowengg/twigs-react";

export default function HeadingBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
      <Heading size="h1" weight="bold">Heading 1 - Bold</Heading>
      <Heading size="h2" weight="semibold">Heading 2 - Semibold</Heading>
      <Heading size="h3" weight="medium">Heading 3 - Medium</Heading>
      <Heading size="h4" weight="regular">Heading 4 - Regular</Heading>
      <Heading size="h5" as="h1">Heading 5 as H1</Heading>
      <Heading size="h6" as="h2">Heading 6 as H2</Heading>
    </Box>
  );
} 