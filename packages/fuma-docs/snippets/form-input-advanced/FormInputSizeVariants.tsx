import React from "react";
import { FormInput, Box } from "@sparrowengg/twigs-react";

export default function FormInputSizeVariants() {

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10" }}>
      {/* Basic with different sizes */}
      <FormInput
        label="Small Input"
        size="sm"
        placeholder="Small size input"
        helperText="This is a small input field"
      />
      
      <FormInput
        label="Medium Input"
        size="md"
        placeholder="Medium size input"
        helperText="This is a medium input field"
      />
      
      <FormInput
        label="Large Input"
        size="lg"
        placeholder="Large size input"
        helperText="This is a large input field"
      />
      
      <FormInput
        label="Extra Large Input"
        size="xl"
        placeholder="Extra large size input"
        helperText="This is an extra large input field"
      />

      {/* Variants */}
      <FormInput
        label="Default Variant"
        variant="default"
        placeholder="Default variant input"
        helperText="This is the default variant"
      />
      
      <FormInput
        label="Filled Variant"
        variant="filled"
        placeholder="Filled variant input"
        helperText="This is the filled variant"
      /> 
    </Box>
  );
} 