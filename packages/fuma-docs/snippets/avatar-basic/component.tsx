import { Avatar, AvatarBadge, Box } from "@sparrowengg/twigs-react";

export default function Component() {
  return (
    <Box css={{ display: "flex", flexDirection: "row", gap: "$5" }}>
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80"
        name="John Doe"
        size="3xl"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80"
        name="John Doe"
        size="3xl"
      >
        <AvatarBadge />
      </Avatar>
    </Box>
  );
}
