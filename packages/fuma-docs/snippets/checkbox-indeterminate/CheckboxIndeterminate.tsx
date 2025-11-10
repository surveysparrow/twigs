import { useState } from "react";
import { Box, Checkbox, Button, Flex, Text } from "@sparrowengg/twigs-react";

export default function CheckboxIndeterminate() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>('indeterminate');

  const toggleIndeterminate = () => {
    setChecked((prev) => (prev === 'indeterminate' ? false : 'indeterminate'));
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Flex gap="$4" alignItems="center">
        <Checkbox
          checked={checked}
          onChange={(value: boolean | 'indeterminate') => setChecked(value)}
          id="indeterminate-checkbox"
        >
          Select all items
        </Checkbox>
        <Button size="sm" onClick={toggleIndeterminate}>
          Toggle Indeterminate
        </Button>
      </Flex>
      <Text css={{ fontSize: "$sm", color: "$neutral600" }}>
        Current state: {checked === 'indeterminate' ? 'indeterminate' : checked ? 'checked' : 'unchecked'}
      </Text>
    </Box>
  );
}

