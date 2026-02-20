import React from "react";
import { FormLabel, Box } from "@sparrowengg/twigs-react";

export default function FormLabelBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      <FormLabel size="sm">Small Label</FormLabel>
      <FormLabel size="md">Medium Label</FormLabel>
      <FormLabel requiredIndicator={true}>Required Field</FormLabel>
      <FormLabel info="This is helpful information">Label with Info</FormLabel>
      <FormLabel rightAddon={<Box css={{ color: "$neutral500" }}>Optional</Box>}>
        Label with Right Addon
      </FormLabel>
    </Box>
  );
} 