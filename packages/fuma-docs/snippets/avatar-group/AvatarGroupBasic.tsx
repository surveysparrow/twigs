import { Avatar, AvatarGroup, Box } from "@sparrowengg/twigs-react";

export default function AvatarGroupBasic() {
  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$5" }}>
      <AvatarGroup rounded="full" size="3xl">
        {[...Array(9)].map((_, i) => (
          <Avatar
          key={i}
          src={`https://i.pravatar.cc/150?img=${i}`}
          />
        ))}
      </AvatarGroup>
      <AvatarGroup fallbackDelay={6} limit={3} rounded="full" size="3xl">
        {[...Array(110)].map((_, i) => (
          <Avatar
          key={i}
          src={`https://i.pravatar.cc/150?img=${i}`}
          />
        ))}
      </AvatarGroup>
      <AvatarGroup
        limit={4}
        rounded="full"
        size="3xl"
        limitExceededFormatter={(extraAvatarsCount: number) => {
          if (extraAvatarsCount >= 100) {
            return "100+";
          }
          return `+${extraAvatarsCount}`;
        }}
      >
        {[...Array(120)].map((_, i) => (
          <Avatar
          key={i}
          src={`https://i.pravatar.cc/150?img=${i}`}
          />
        ))}
      </AvatarGroup>
    </Box>
  );
}
