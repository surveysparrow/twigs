import React from "react";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose, PopoverArrow, Button, Box, Text, Flex } from "@sparrowengg/twigs-react";
import { SettingsIcon } from "@sparrowengg/twigs-react-icons";

export default function PopoverBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6", alignItems: "center" }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="md" leftIcon={<SettingsIcon />} color="primary">
            Settings
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="start" sideOffset={8}>
          <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
            <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Settings</Text>
            <Flex css={{ flexDirection: "column", gap: "$3" }}>
              <Text css={{ fontSize: "$sm" }}>Configure your preferences</Text>
              <Text css={{ fontSize: "$sm" }}>Update your profile settings</Text>
              <Text css={{ fontSize: "$sm" }}>Manage notifications</Text>
            </Flex>
            <PopoverClose asChild>
              <Button size="sm" color="default">
                Close
              </Button>
            </PopoverClose>
          </Box>
          <PopoverArrow />
        </PopoverContent>
      </Popover>
    </Box>
  );
}