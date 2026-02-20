import { Box, Chip, Text } from "@sparrowengg/twigs-react";
import { useState } from "react";

export default function ChipSelectable() {
  const [active, setActive] = useState(false);

  return (
    <Box css={{ display: "flex", gap: "$4", alignItems: "center" }}>
      <Chip
        color="accent"
        size="lg"
        selectable
        active={active}
        onActiveStateChange={(active: boolean) => setActive(active)}
      >
        {active ? "Selected" : "Click to Select"}
      </Chip>
      <Text size="sm" color="secondary">
        Status: {active ? "Active" : "Inactive"}
      </Text>
    </Box>
  );
}