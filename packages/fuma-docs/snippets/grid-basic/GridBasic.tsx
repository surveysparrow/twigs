import React from "react";
import { Grid, Box } from "@sparrowengg/twigs-react";

export default function GridBasic() {
  return (
    <Grid width={200} gap={[16, 16]} css={{ padding: "$4" }}>
      <Box css={{ padding: "$4", background: "$primary200", borderRadius: "$md" }}>
        Grid Item 1
      </Box>
      <Box css={{ padding: "$4", background: "$secondary200", borderRadius: "$md" }}>
        Grid Item 2
      </Box>
      <Box css={{ padding: "$4", background: "$accent200", borderRadius: "$md" }}>
        Grid Item 3
      </Box>
      <Box css={{ padding: "$4", background: "$neutral200", borderRadius: "$md" }}>
        Grid Item 4
      </Box>
    </Grid>
  );
} 