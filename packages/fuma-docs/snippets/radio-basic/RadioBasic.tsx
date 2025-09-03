import React, { useState } from "react";
import { RadioGroup, Radio, Box, Text } from "@sparrowengg/twigs-react";

export default function RadioBasic() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", alignItems: "flex-start" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Choose your preference:</Text>
        <RadioGroup
          value={selectedValue}
          onChange={setSelectedValue}
        >
          <Radio value="option1" size="sm">
            Small radio option
          </Radio>
          <Radio value="option2" size="md">
            Medium radio option
          </Radio>
          <Radio value="option3" size="sm" disabled>
            Disabled radio option
          </Radio>
        </RadioGroup>
      </Box>

      <Box css={{ display: "flex", flexDirection: "column", gap: "$4", alignItems: "flex-start" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Default selection:</Text>
        <RadioGroup defaultValue="default">
          <Radio value="default" size="md">
            Default option
          </Radio>
          <Radio value="comfortable" size="md">
            Comfortable option
          </Radio>
          <Radio value="compact" size="md">
            Compact option
          </Radio>
        </RadioGroup>
      </Box>
    </Box>
  );
}