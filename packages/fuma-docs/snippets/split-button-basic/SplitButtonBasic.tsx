import React from "react";
import { SplitButton, Button, IconButton, Box, Text } from "@sparrowengg/twigs-react";
import { ChevronDownIcon, PencilIcon } from "@sparrowengg/twigs-react-icons";

export default function SplitButtonBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
      <Box css={{ display: "flex", flexDirection: "row", gap: "$4", alignItems: "center" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Basic Split Button</Text>
        
        <SplitButton size="md" color="primary">
          <Button leftIcon={<PencilIcon />}>Edit</Button>
          <IconButton icon={<ChevronDownIcon />} />
        </SplitButton>
      </Box>

      <Box css={{ display: "flex", gap: "$4", alignItems: "center" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Variants</Text>
        
        <Box css={{ display: "flex", gap: "$3", alignItems: "center"}}>
          <SplitButton size="sm" color="default">
            <Button leftIcon={<PencilIcon />}>Small</Button>
            <IconButton icon={<ChevronDownIcon />} />
          </SplitButton>
          
          <SplitButton size="md" color="secondary">
            <Button leftIcon={<PencilIcon />}>Medium</Button>
            <IconButton icon={<ChevronDownIcon />} />
          </SplitButton>
          <SplitButton size="xl" color="error">
            <Button leftIcon={<PencilIcon />}>Large</Button>
            <IconButton icon={<ChevronDownIcon />} />
          </SplitButton>
          <Box css={{ backgroundColor: "$black900", padding: "$2", borderRadius: "$sm" }}>
          <SplitButton size="lg" color="light">
            <Button leftIcon={<PencilIcon />}>Light clr btn</Button>
            <IconButton icon={<ChevronDownIcon />} />
          </SplitButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 