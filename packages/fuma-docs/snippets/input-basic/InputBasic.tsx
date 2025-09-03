import React from "react";
import { Input, Box } from "@sparrowengg/twigs-react";

export default function InputBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10",width: "100%" }}>
        <Input
          placeholder="Default input"
          size="sm"
          variant="default"
        />
        <Input
          placeholder="Medium input"
          size="md"
          variant="default"
        />
        <Input
          placeholder="Large input"
          size="lg"
          variant="default"
        />
        <Input
          placeholder="Extra large input"
          size="xl"
          variant="default"
        />
        <Input
          placeholder="Filled variant"
          size="md"
          variant="filled"
        />
        <Input
          placeholder="Disabled input"
          size="md"
          variant="default"
          disabled
        />
        <Input
          placeholder="Error border"
          size="md"
          variant="default"
          errorBorder
        />
    </Box>
  );
}