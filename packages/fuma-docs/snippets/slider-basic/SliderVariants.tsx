import React, { useState } from "react";
import { Slider, Box, Text } from "@sparrowengg/twigs-react";

export default function SliderVariants() {
  const [value, setValue] = useState([25]); 
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$4", width: "300px" }}>
    <Text css={{ fontSize: "$md", fontWeight: "$6" }}>All size variants</Text>
    <Text css={{ fontSize: "$sm" }}>Small size</Text>
    <Slider
      min={0}
      max={100}
      step={1}
      size="sm"
      value={value}
      onValueChange={setValue}
    />
    <Slider
      min={0}
      max={100}
      step={1}
      size="md"
      defaultValue={[25]}
      disabled
      labels={{
        left: "Medium size",
        right: "Disabled"
      }}
    />
    <Text css={{ fontSize: "$sm" }}>Large size</Text>
    <Slider
      min={0}
      max={100}
      step={1}
      size="lg"
      value={value}
      onValueChange={setValue}
    />
    <Text css={{ fontSize: "$sm", color: "$neutral700" }}>Current value: {value[0]}</Text>
  </Box>
  );
}
