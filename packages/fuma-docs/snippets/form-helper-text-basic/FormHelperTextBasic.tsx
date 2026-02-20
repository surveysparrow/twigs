import React from "react";
import { FormHelperText, Box, Input } from "@sparrowengg/twigs-react";

export default function FormHelperTextBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
      <FormHelperText color="info">This is a helpful message for the user</FormHelperText>
      <FormHelperText color="error">This is an error message</FormHelperText>
      <Input placeholder="password" type="password" />
      <FormHelperText>Password should have a minimum length of 6.</FormHelperText>
    </Box>
  );
}
