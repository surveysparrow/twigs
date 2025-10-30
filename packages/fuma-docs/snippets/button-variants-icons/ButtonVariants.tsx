import { Box, Button, Text } from "@sparrowengg/twigs-react";

export default function ButtonVariants() {
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
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>Colors</Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="default">Default</Button>
          <Button color="bright">Bright</Button>
          <Button color="light">Light</Button>
          <Button color="error">Error</Button>
        </Box>
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>
          Variants
        </Text>
        <Box css={{ display: "flex", gap: "$5", flexWrap: "wrap" }}>
          <Button variant="solid" color="primary">
            Solid
          </Button>
          <Button variant="outline" color="primary">
            Outline
          </Button>
          <Button variant="ghost" color="primary">
            Ghost
          </Button>
        </Box>
      </Box>
      <Box>
        <Text css={{ marginBottom: "$5", color: "$secondary900" }}>Sizes</Text>
        <Box
          css={{
            display: "flex",
            gap: "$5",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button size="xxs">XXS</Button>
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
          <Button size="xl">XL</Button>
          <Button size="2xl">2XL</Button>
        </Box>
      </Box>
    </Box>
  );
}
