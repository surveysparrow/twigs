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
  SearchIcon, 
  BellIcon,
} from "@sparrowengg/twigs-react-icons";

export default function StackWraps() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10" }}>

      {/* Wrap Variants */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Wrap Variants</Text>
        
        <VStack gap="$4">
          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>No Wrap (nowrap)</Text>
            <Stack direction="row" gap="$3" wrap="nowrap" css={{ maxWidth: "300px" }}>
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
              <Button size="sm" leftIcon={<SearchIcon />}>Search</Button>
              <Button size="sm" leftIcon={<BellIcon />}>Notifications</Button>
            </Stack>
          </Box>

          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Wrap</Text>
            <Stack direction="row" gap="$3" wrap="wrap" css={{ maxWidth: "300px" }}>
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
              <Button size="sm" leftIcon={<SearchIcon />}>Search</Button>
              <Button size="sm" leftIcon={<BellIcon />}>Notifications</Button>
            </Stack>
          </Box>

          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Wrap Reverse</Text>
            <Stack direction="row" gap="$3" wrap="wrap-reverse" css={{ maxWidth: "300px" }}>
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
              <Button size="sm" leftIcon={<SearchIcon />}>Search</Button>
              <Button size="sm" leftIcon={<BellIcon />}>Notifications</Button>
            </Stack>
          </Box>
        </VStack>
      </Box>

    </Box>
  );
} 