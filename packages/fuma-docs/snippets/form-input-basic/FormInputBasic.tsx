import React from "react";
import { FormInput, Box } from "@sparrowengg/twigs-react";

export default function FormInputBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
      <FormInput
        label="Email Address"
        placeholder="Enter your email"
        helperText="We'll never share your email with anyone else."
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        error="Password must be at least 8 characters long"
      />
    </Box>
  );
} 