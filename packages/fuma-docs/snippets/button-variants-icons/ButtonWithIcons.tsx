import { Box, Button, Text } from "@sparrowengg/twigs-react";
import {
  ChevronDownIcon,
  PlusIcon,
  DownloadIcon,
  SettingsIcon,
  AtIcon,
} from "@sparrowengg/twigs-react-icons";

export default function ButtonWithIcons() {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$5",
        padding: "$5",
      }}
    >
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Left Icons
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button leftIcon={<PlusIcon />} color="primary">
            Add Item
          </Button>
          <Button leftIcon={<DownloadIcon />} color="secondary">
            Download
          </Button>
          <Button leftIcon={<SettingsIcon />} color="default">
            Settings
          </Button>
        </Box>
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Right Icons
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button rightIcon={<ChevronDownIcon />} color="primary">
            More Options
          </Button>
          <Button
            rightIcon={<ChevronDownIcon />}
            variant="outline"
            color="secondary"
          >
            Dropdown
          </Button>
        </Box>
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Icon Only
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button icon={<PlusIcon />} color="primary" size="md" />
          <Button icon={<AtIcon />} color="error" size="md" />
          <Button
            icon={<SettingsIcon />}
            color="default"
            variant="outline"
            size="md"
          />
          <Button
            icon={<DownloadIcon />}
            color="secondary"
            variant="ghost"
            size="md"
          />
        </Box>
      </Box>
    </Box>
  );
}
