import React, { useState } from "react";
import { FormInput, Box } from "@sparrowengg/twigs-react";

export default function FormInputAdvanced() {
  const [value, setValue] = useState("");
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10" }}>
      {/* With character count */}
      <FormInput
        label="Character Count"
        placeholder="Type something here"
        maxLength={50}
        showCount={true}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        helperText="This input shows character count"
      />

      {/* With required indicator */}
      <FormInput
        label="Required Field"
        placeholder="This field is required"
        requiredIndicator={true}
        helperText="Required fields are marked with an asterisk"
      />

      {/* With error */}
      <FormInput
        label="Error State"
        placeholder="This input has an error"
        error="This field contains an error message"
        errorBorder={true}
      />

      {/* Disabled state */}
      <FormInput
        label="Disabled Input"
        placeholder="This input is disabled"
        disabled={true}
        helperText="This input field is disabled"
      />

      {/* With info tooltip */}
      <FormInput
        label="Input with Info"
        placeholder="Hover over the info icon"
        info="This is additional information about the input field"
        helperText="Info icon provides additional context"
      />
    </Box>
  );
} 