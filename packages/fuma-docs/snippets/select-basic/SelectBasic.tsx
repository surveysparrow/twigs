import React from "react";
import { Select, Box } from "@sparrowengg/twigs-react";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default function SelectBasic() { 
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$10",
        width: "100%",
      }}
    >
      <Select
        placeholder="Default Variant"
        options={options}
        size="sm"
        variant="default"
        label="Small size"
      />
      <Select
        placeholder="Filled Variant"
        options={options}
        size="md"
        variant="filled"
        label="Medium size"
      />
      <Select
        placeholder="Default Variant"
        options={options}
        size="lg"
        variant="default"
        label="Large size"
      />
      <Select
        placeholder="Filled Variant"
        options={options}
        size="xl"
        variant="filled"
        label="Extra large size"
      />
    </Box>
  );
}
