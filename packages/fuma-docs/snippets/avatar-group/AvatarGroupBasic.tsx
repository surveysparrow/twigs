import { Avatar, AvatarGroup, Box } from "@sparrowengg/twigs-react";

export default function AvatarGroupBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$5" }}>
      <AvatarGroup rounded="full" size="3xl">
        <Avatar src="https://i.pravatar.cc/150?img=0" />
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" />
        <Avatar src="https://i.pravatar.cc/150?img=4" />
        <Avatar src="https://i.pravatar.cc/150?img=5" />
        <Avatar src="https://i.pravatar.cc/150?img=6" />
        <Avatar src="https://i.pravatar.cc/150?img=7" />
        <Avatar src="https://i.pravatar.cc/150?img=8" />
        <Avatar src="https://i.pravatar.cc/150?img=9" />
      </AvatarGroup>
      <AvatarGroup fallbackDelay={6} limit={3} rounded="full" size="3xl">
        <Avatar src="https://i.pravatar.cc/150?img=0" />
        <Avatar src="https://i.pravatar.cc/150?img=1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" />
        <Avatar src="https://i.pravatar.cc/150?img=4" />
        <Avatar src="https://i.pravatar.cc/150?img=5" />
        <Avatar src="https://i.pravatar.cc/150?img=6" />
        <Avatar src="https://i.pravatar.cc/150?img=7" />
        <Avatar src="https://i.pravatar.cc/150?img=8" />
        <Avatar src="https://i.pravatar.cc/150?img=9" />
      </AvatarGroup>
    </Box>
  );
}
