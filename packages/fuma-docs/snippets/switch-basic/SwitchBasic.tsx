import React, { useState } from "react";
import { Switch, Box, Text, Flex, Stack } from "@sparrowengg/twigs-react";

export default function SwitchBasic() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [sound, setSound] = useState(false);

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$8" }}>
      {/* Basic Switch Examples */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Basic Switch Examples</Text>
        
        <Stack gap="$4" direction="row">
          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={notifications} 
              onChange={setNotifications}
              size="md"
            />
            <Text css={{ fontSize: "$md" }}>Enable notifications</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={darkMode} 
              onChange={setDarkMode}
              size="sm"
            />
            <Text css={{ fontSize: "$md" }}>Dark mode</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={wifi} 
              onChange={setWifi}
              size="md"
            />
            <Text css={{ fontSize: "$md" }}>Wi-Fi connection</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={sound} 
              onChange={setSound}
              size="sm"
            />
            <Text css={{ fontSize: "$md" }}>Sound alerts</Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
} 