import React from "react";
import { 
  Stack, 
  VStack, 
  Box, 
  Text, 
  Button, 
} from "@sparrowengg/twigs-react";
import { 
  UserIcon, 
  SettingsIcon, 
  HomeIcon, 
} from "@sparrowengg/twigs-react-icons";

export default function StackDirections() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10" }}>
      
      {/* All Direction Variants */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>All Direction Variants</Text>
        
        <VStack gap="$4">
          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Row Direction</Text>
            <Stack direction="row" gap="$3">
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
            </Stack>
          </Box>

          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Column Direction</Text>
            <Stack direction="column" gap="$3">
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
            </Stack>
          </Box>

          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Row Reverse Direction</Text>
            <Stack direction="row-reverse" gap="$3">
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
            </Stack>
          </Box>

          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Column Reverse Direction</Text>
            <Stack direction="column-reverse" gap="$3">
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
            </Stack>
          </Box>
        </VStack>
      </Box>

    </Box>
  );
} 