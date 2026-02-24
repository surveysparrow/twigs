import React, { useState } from "react";
import { Select, Box, Text } from "@sparrowengg/twigs-react";
import { SearchIcon } from "@sparrowengg/twigs-react-icons";

const basicOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const multiOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
];

const groupedOptions = [
  {
    label: "Frontend",
    options: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue" },
      { value: "angular", label: "Angular" },
    ],
  },
  {
    label: "Backend",
    options: [
      { value: "node", label: "Node.js" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
    ],
  },
];

export default function SelectComprehensive() {
  const [singleValue, setSingleValue] = useState(null);
  const [multiValue, setMultiValue] = useState([]);
  const [groupedValue, setGroupedValue] = useState(null);
  const [asyncValue, setAsyncValue] = useState(null);

  const loadAsyncOptions = (inputValue: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = basicOptions.filter(option =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        resolve(filtered);
      }, 1000);
    });
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8", alignItems: "center" }}>
      <Box css={{ display: "flex", flexDirection: "column", gap: "$15", width: "100%"}}>
        
        {/* Basic Select with Label */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Basic Select</Text>
          <Select
            label="Choose a framework"
            placeholder="Select framework..."
            options={basicOptions}
            value={singleValue}
            onChange={setSingleValue}
            size="md"
            variant="default"
            isClearable
            isSearchable
          />
        </Box>

        {/* Multi Select */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Multi Select</Text>
          <Select
            label="Select languages"
            placeholder="Choose multiple languages..."
            options={multiOptions}
            value={multiValue}
            onChange={setMultiValue}
            isMulti
            isClearable
            size="md"
            variant="default"
          />
        </Box>

        {/* Grouped Options */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Grouped Options</Text>
          <Select
            label="Select technology"
            placeholder="Choose technology..."
            options={groupedOptions}
            value={groupedValue}
            onChange={setGroupedValue}
            size="md"
            variant="default"
            isClearable
          />
        </Box>

        {/* Async Select */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Async Select</Text>
          <Select
            label="Search frameworks"
            placeholder="Type to search..."
            value={asyncValue}
            onChange={setAsyncValue}
            loadOptions={loadAsyncOptions}
            isAsync
            isClearable
            size="md"
            variant="default"
          />
        </Box>

        {/* Custom Dropdown Icon and error message*/}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Custom Dropdown Icon</Text>
          <Select
            label="With custom icon"
            placeholder="Custom dropdown icon..."
            options={basicOptions}
            size="md"
            variant="default"
            dropdownIndicatorIcon={<SearchIcon />}
            dropdownIndicatorPosition="right"
            isClearable
            error="This field is required"
          />
        </Box>

        {/* Disabled State */}
        <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
          <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Disabled State</Text>
          <Select
            label="Disabled select"
            placeholder="This is disabled"
            options={basicOptions}
            size="md"
            variant="default"
            isDisabled
          />
        </Box>

      </Box>
    </Box>
  );
}