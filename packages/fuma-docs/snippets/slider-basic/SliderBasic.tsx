import React, { useState } from "react";
import { Slider, Box, Text } from "@sparrowengg/twigs-react";

export default function SliderBasic() {
  const [value, setValue] = useState([50]);

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4", width: "300px" }}>
    <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Basic Slider</Text>
    <Slider
      value={value}
      onValueChange={setValue}
      min={0}
      max={100}
      step={1}
      size="sm"
      labels={{
        left: "0",
        right: "100"
      }}
    />
    <Text css={{ fontSize: "$sm", color: "$neutral700" }}>
      Current value: {value[0]}
    </Text>
  </Box>
  );
}
