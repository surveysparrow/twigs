import { useState } from "react";
import { Box, Checkbox,FormLabel } from "@sparrowengg/twigs-react";

export default function CheckboxBasic() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);

  return (
    <Box css={{ display: "flex", alignItems: "center", gap: "$4" }}>
      <Checkbox
        checked={checked}
        onChange={(value: boolean | 'indeterminate') => setChecked(value)}
        id="terms"
      />
      <FormLabel htmlFor="terms" css={{ cursor: "pointer" }}>
        Accept terms and conditions
      </FormLabel>
    </Box>
  );
}