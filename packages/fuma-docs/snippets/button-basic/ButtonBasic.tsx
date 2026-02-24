import { Box, Button } from "@sparrowengg/twigs-react";

export default function ButtonBasic() {
  return (
    <Box css={{ display: "flex", gap: "$5", alignItems: "center" }}>
      <Button color="primary" size="md">
        Click me
      </Button>
      <Button color="secondary" size="md">
        Secondary
      </Button>
      <Button color="default" size="md">
        Default
      </Button>
    </Box>
  );
}
