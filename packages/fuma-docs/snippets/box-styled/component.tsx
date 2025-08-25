import { Box } from "@sparrowengg/twigs-react";

export default function Component() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <Box
        css={{
          backgroundColor: "$primary100",
          padding: "$8",
          borderRadius: "$lg",
          color: "$primary800",
        }}
      >
        Box with background and padding
      </Box>
      <Box
        css={{
          border: "2px solid $primary300",
          padding: "$6",
          borderRadius: "$md",
          boxShadow: "$sm",
        }}
      >
        Box with border and shadow
      </Box>
      <Box
        as="section"
        css={{
          backgroundColor: "$secondary100",
          padding: "$4",
          borderRadius: "$sm",
          fontSize: "$sm",
          color: "$secondary800",
        }}
      >
        This Box renders as a &lt;section&gt; element
      </Box>
      <Box
        css={{
          backgroundColor: "$accent100",
          padding: "$4",
          borderRadius: "$md",
          "@screen-md": {
            padding: "$8",
            fontSize: "$lg",
          },
        }}
      >
        Responsive Box (changes on larger screens)
      </Box>
    </div>
  );
}
