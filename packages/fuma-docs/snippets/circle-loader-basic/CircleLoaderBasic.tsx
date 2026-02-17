import { Box, CircleLoader } from "@sparrowengg/twigs-react";

export default function CircleLoaderBasic() {
  return (
    <Box css={{ display: "flex", gap: "$4", alignItems: "center"}}>
      <CircleLoader size="xs"/>
      <CircleLoader size="sm"/>
      <CircleLoader size="md"/>
      <CircleLoader size="lg" color="secondary" />
      <CircleLoader size="xl" color="accent" />
      <CircleLoader size="2xl" color="negative" />
      <CircleLoader size="3xl" color="bright" />
    </Box>
  );
} 