import React from "react";
import {
  Text,
  Box,
  Flex,
  Image,
} from "@sparrowengg/twigs-react";
import competencyIcon from "@/assets/images/Competency.svg";

export default function Redeemers() {
  const users = [
    {
      id: 1,
      name: "Abigail Fisher",
      department: "Marketing",
      avatar: "https://i.pravatar.cc/150?img=30",
      points: 3050,
    },
    {
      id: 2,
      name: "Benedict Cumberbatch",
      department: "Customer Success",
      avatar: "https://i.pravatar.cc/150?img=31",
      points: 2500,
    },
    {
      id: 3,
      name: "Charlie Chaplin",
      department: "Customer Success",
      avatar: "https://i.pravatar.cc/150?img=32",
      points: 2000,
    },
    {
      id: 4,
      name: "Diana Prince",
      department: "Customer Success",
      avatar: "https://i.pravatar.cc/150?img=33",
      points: 1500,
    },
    {
      id: 5,
      name: "Ethan Hunt",
      department: "Customer Success",
      avatar: "https://i.pravatar.cc/150?img=4",
      points: 1000,
    },
  ]
  return (
    <Flex
    flexDirection="column"
    css={{
      backgroundColor: "white",
      borderRadius: "$2xl",
      height: "275px",
      overflowY: "hidden",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    }}
    >
      <Flex gap="$4" alignItems="center" css={{ padding: "$7", borderBottom: "1px solid $neutral100" }}>
        <Image src={competencyIcon.src} alt="star icon" width={24} height={24} />
        <Text size="md" weight="medium" css={{ color: "$neutral900" }}>Top Redeemers</Text>
      </Flex>
      <Flex 
      justifyContent="space-between"
      css={{ 
        paddingLeft: "$7" , 
        paddingRight: "$7" ,
        paddingTop: "$5" ,
        paddingBottom: "$5" ,
        borderBottom: "1px solid $neutral100" 
      }}
      >
        <Text css={{ color: "$neutral700" }} size="sm">Name</Text>
        <Text css={{ color: "$neutral700" }} size="sm">Value Redeemed</Text>
      </Flex>
      <Flex flexDirection="column">
        {users.map((user) => (
          <Flex key={user.id} justifyContent="space-between" alignItems="center"
          css={{ padding: "$6" , borderBottom: "1px solid $neutral100", "&:hover": { backgroundColor: "$neutral50" } }}>
            <Flex alignItems="center" gap="$4">
              <Image src={user.avatar} alt={user.name} width={32} height={32} 
              css={{
                borderRadius: "$round",
              }}
              />
              <Box>
                <Text css={{ color: "$neutral900" }}>{user.name}</Text>
                <Text size="xs" css={{ color: "$neutral700" }}>{user.department}</Text>
              </Box>
            </Flex>
            <Text css={{ color: "$neutral800" }}>{user.points}{" "}Pts</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
