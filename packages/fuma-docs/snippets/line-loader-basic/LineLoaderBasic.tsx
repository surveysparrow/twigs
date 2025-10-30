import React from "react";
import { LineLoader, Box, Flex } from "@sparrowengg/twigs-react";

export default function LineLoaderBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Flex gap="$4" alignItems="center">
        <LineLoader size="sm" color="primary" />
        <LineLoader size="md" color="secondary" />
        <LineLoader size="lg" color="bright" />
        <LineLoader size="xl" color="negative" />
      </Flex>
    </Box>
  );
}