import { Box, Button, Text } from "@sparrowengg/twigs-react";
import { SaveIcon, DeleteIcon } from "@sparrowengg/twigs-react-icons";

export default function Component() {
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
          Loading States
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button loading color="primary">
            Saving...
          </Button>
          <Button loading leftIcon={<SaveIcon />} color="secondary">
            Processing
          </Button>
          <Button loading variant="outline" color="default">
            Loading
          </Button>
          <Button loading icon={<SaveIcon />} color="primary" />
        </Box>
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Disabled States
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button disabled color="primary">
            Disabled Primary
          </Button>
          <Button disabled color="secondary" variant="outline">
            Disabled Outline
          </Button>
          <Button disabled color="error" leftIcon={<DeleteIcon />}>
            Cannot Delete
          </Button>
          <Button disabled icon={<SaveIcon />} color="default" />
        </Box>
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Custom Loader Types
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button loading loader="line" color="primary">
            Line Loader
          </Button>
          <Button loading loader="circle" color="secondary">
            Circle Loader
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
