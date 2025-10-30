import { useState } from "react";
import { Box, Checkbox } from "@sparrowengg/twigs-react";

export default function CheckboxBasic() {
  const [checked, setChecked] = useState(false);

  return (
    <Box css={{ display: "flex", alignItems: "center", gap: "$4" }}>
      <Checkbox
        checked={checked}
        onChange={setChecked}
        id="terms"
      />
      <label htmlFor="terms" style={{ cursor: "pointer" }}>
        Accept terms and conditions
      </label>
    </Box>
  );
}