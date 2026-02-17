import React, { useState, useRef, useCallback, memo } from "react";
import {
  Text,
  Box,
  Flex,
  Image,
} from "@sparrowengg/twigs-react";
import competencyIcon from "@/assets/images/Competency.svg";
import { REDEEMERS_USERS } from "../constants";

// Memoized user row component
interface UserRowProps {
  name: string;
  department: string;
  avatar: string;
  points: number;
}

const UserRow = memo(function UserRow({ name, department, avatar, points }: UserRowProps) {
  return (
    <Flex 
      justifyContent="space-between" 
      alignItems="center"
      css={{ 
        padding: "$5 $8", 
        borderBottom: "1px solid $neutral100", 
        paddingRight: "$28", 
        "&:hover": { backgroundColor: "$neutral50" } 
      }}
    >
      <Flex alignItems="center" gap="$4">
        <Image 
          src={avatar} 
          alt={name} 
          width={32} 
          height={32} 
          css={{ borderRadius: "$round" }}
        />
        <Box>
          <Text css={{ color: "$neutral900" }}>{name}</Text>
          <Text size="xs" css={{ color: "$neutral700" }}>{department}</Text>
        </Box>
      </Flex>
      <Text css={{ color: "$neutral800" }}>{points} Pts</Text>
    </Flex>
  );
});

export default function Redeemers() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Check if scrolled to bottom (with 5px threshold)
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
    setIsAtBottom(atBottom);
  }, []);

  return (
    <Flex
      flexDirection="column"
      css={{
        backgroundColor: "white",
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        position: "relative",
      }}
    >
      <Flex gap="$4" alignItems="center" css={{ padding: "$8 $12", borderBottom: "1px solid $neutral100" }}>
        <Image src={competencyIcon.src} alt="star icon" width={24} height={24} />
        <Text size="md" weight="bold" css={{ color: "$neutral900" }}>Top Redeemers</Text>
      </Flex>
      <Flex 
        justifyContent="space-between"
        css={{ 
          paddingLeft: "$12", 
          paddingRight: "$12",
          paddingTop: "$4",
          paddingBottom: "$4",
          borderBottom: "1px solid $neutral100" 
        }}
      >
        <Text css={{ color: "$neutral800", fontWeight: "$5" }} size="xs">Name</Text>
        <Text css={{ color: "$neutral800", fontWeight: "$5" }} size="xs">Value Redeemed</Text>
      </Flex>
      <Flex 
        ref={scrollRef}
        onScroll={handleScroll}
        flexDirection="column" 
        css={{ overflowY: "scroll", height: "277px", scrollbarWidth: "none" }}
      >
        {REDEEMERS_USERS.map((user) => (
          <UserRow
            key={user.id}
            name={user.name}
            department={user.department}
            avatar={user.avatar}
            points={user.points}
          />
        ))}
      </Flex>
      {/* Bottom fade overlay - hides when scrolled to bottom */}
      <Box
        css={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          height: "40px",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 1) 100%)",
          pointerEvents: "none",
          borderRadius: "0 0 $2xl $2xl",
          opacity: isAtBottom ? 0 : 1,
          transition: "opacity 0.2s ease-out",
        }}
      />
    </Flex>
  );
}
