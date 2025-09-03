import React, { useState } from "react";
import { Switch, Box, Text, Flex, Stack } from "@sparrowengg/twigs-react";
import { 
  BellIcon,
  LightBulbIcon,
  EyeOpenIcon
} from "@sparrowengg/twigs-react-icons";

export default function Component() {
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

      {/* Switch with Icons and Labels */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Switch with Icons and Labels</Text>
        
        <Stack gap="$4" direction="row">
          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={notifications} 
              onChange={setNotifications}
              size="md"
            />
            <Flex css={{ alignItems: "center", gap: "$2" }}>
              <BellIcon size={18} />
              <Text css={{ fontSize: "$md" }}>Push notifications</Text>
            </Flex>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={darkMode} 
              onChange={setDarkMode}
              size="md"
            />
            <Flex css={{ alignItems: "center", gap: "$2" }}>
              <LightBulbIcon size={18} />
              <Text css={{ fontSize: "$md" }}>Dark theme</Text>
            </Flex>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={wifi} 
              onChange={setWifi}
              size="md"
            />
            <Flex css={{ alignItems: "center", gap: "$2" }}>
              <EyeOpenIcon size={18} />
              <Text css={{ fontSize: "$md" }}>Auto-connect to Wi-Fi</Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>

      {/* Switch States */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Switch States</Text>
        
        <Stack gap="$4" direction="row">
          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={true}
              size="md"
            />
            <Text css={{ fontSize: "$md" }}>Enabled (checked)</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={false}
              size="md"
            />
            <Text css={{ fontSize: "$md" }}>Enabled (unchecked)</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={true}
              disabled
              size="md"
            />
            <Text css={{ fontSize: "$md", color: "$neutral500" }}>Disabled (checked)</Text>
          </Flex>

          <Flex css={{ alignItems: "center", gap: "$4" }}>
            <Switch 
              checked={false}
              disabled
              size="md"
            />
            <Text css={{ fontSize: "$md", color: "$neutral500" }}>Disabled (unchecked)</Text>
          </Flex>
        </Stack>
      </Box>
      
    </Box>
  );
} 