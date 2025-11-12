import React, { useState } from "react";
import { RadioGroup, Radio, Box, Text } from "@sparrowengg/twigs-react";

export default function RadioBasic() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <Box css={{ display: "flex", gap: "$20", alignItems: "center" }}>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$8",
          alignItems: "flex-start",
        }}
      >
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>
          Choose your preference:
        </Text>
        <RadioGroup
          value={selectedValue}
          onChange={setSelectedValue}
          css={{
            display: "flex",
            gap: "$6",
          }}
        >
          <Radio value="option1" size="sm">
            <Text size="sm">Small Radio option</Text>
          </Radio>
          <Radio value="option3" size="sm" disabled>
            <Text css={{ color: "$neutral300" }}>Disabled radio option</Text>
          </Radio>
          <Radio value="option2" size="md">
            <Text size="md">Medium radio option</Text>
          </Radio>
        </RadioGroup>
      </Box>

      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$8",
          alignItems: "flex-start",
        }}
      >
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Payment Method:</Text>
        <RadioGroup
          defaultValue="default"
          css={{
            display: "flex",
            gap: "$6",
          }}
        >
          <Radio value="default" size="md">
            <Text size="md">Credit card</Text>
          </Radio>
          <Radio value="comfortable" size="md">
            <Text size="md">Gpay</Text>
          </Radio>
          <Radio value="compact" size="md">
            <Text size="md">Cash</Text>
          </Radio>
        </RadioGroup>
      </Box>
    </Box>
  );
}
