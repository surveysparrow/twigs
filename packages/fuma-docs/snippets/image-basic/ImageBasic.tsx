import React from "react";
import { Image, Box, Flex } from "@sparrowengg/twigs-react";

export default function ImageBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Flex gap="$4" alignItems="center">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop&crop=center"
          alt="Mountain landscape"
          css={{
            width: 200,
            height: 200,
            borderRadius: "$md"
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=150&h=150&fit=crop&crop=center"
          alt="Forest path"
          css={{
            width: 150,
            height: 150,
            borderRadius: "$lg"
          }}
        />
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop&crop=center"
          alt="Ocean view"
          css={{
            width: 100,
            height: 100,
            borderRadius: "$round"
          }}
        />
      </Flex>
    </Box>
  );
}