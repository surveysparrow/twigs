import React from "react";
import { 
  Stack, 
  VStack, 
  Box, 
  Text, 
  Button, 
  Separator 
} from "@sparrowengg/twigs-react";
import { 
  UserIcon, 
  SettingsIcon, 
  HomeIcon, 
  DownloadIcon,
  UploadIcon
} from "@sparrowengg/twigs-react-icons";

export default function StackDividers() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$10" }}>

      {/* Dividers */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Stack with Dividers</Text>
        
        <VStack gap="$4" alignX="left">
    
          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Vertical Stack with Dividers</Text>
            <Stack 
              direction="column" 
              gap="$3"
              divider={<Separator orientation="horizontal" />}
            >
              <Button size="sm" leftIcon={<HomeIcon />}>Home</Button>
              <Button size="sm" leftIcon={<UserIcon />}>Profile</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
            </Stack>
          </Box>

          <Box css={{ display: "flex", flexDirection: "column", gap: "$3" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$5" }}>Custom Divider</Text>
            <Stack 
              direction="row" 
              gap="$3"
              divider={
                <Box 
                  css={{ 
                    width: "2px", 
                    height: "20px", 
                    backgroundColor: "$primary300", 
                    borderRadius: "$full" 
                  }} 
                />
              }
            >
              <Button size="sm" leftIcon={<DownloadIcon />}>Download</Button>
              <Button size="sm" leftIcon={<UploadIcon />}>Upload</Button>
              <Button size="sm" leftIcon={<SettingsIcon />}>Settings</Button>
            </Stack>
          </Box>
        </VStack>
      </Box>

    </Box>
  );
} 