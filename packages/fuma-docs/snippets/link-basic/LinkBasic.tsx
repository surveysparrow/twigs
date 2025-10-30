import React from "react";
import { Link, Button,Box, Flex, Text } from "@sparrowengg/twigs-react";

export default function LinkBasic() {
  return (  
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Flex gap="$4" alignItems="center">
        <Link href="https://github.com/surveysparrow/twigs" target="_blank" rel="noopener noreferrer">
          External Link
        </Link>
        <Link href="https://github.com/surveysparrow/twigs" target="_blank">
          <Button>
            Custom Link Button
          </Button>
        </Link>
        <Link href="https://github.com/surveysparrow/twigs" target="_blank">
          <Text css={{ color: "$secondary600", fontSize: "$lg", fontWeight: "$6" }}>
            Styled Text Link
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}