import React from "react";
import {
  CalendarIcon,
  EllipsisVerticalIcon,
} from "@sparrowengg/twigs-react-icons";
import {
  Avatar,
  Button,
  Chip,
  DropdownMenuSub,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Flex,
  Box,
  Text,
} from "@sparrowengg/twigs-react";
import { AvatarGroup } from "@sparrowengg/twigs-react";
export default function MeetingCard() {
  return (
    <Flex
      flexDirection="column"
      gap="$8"
      css={{
        padding: "$7",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" gap="$2">
        <Box>
          <Text size="md" weight="medium">
            SurveySparrow branding
          </Text>
          <Text size="sm" css={{ color: "$neutral600" }}>
            with John Doe
          </Text>
        </Box>
        <Box>
          <DropdownMenu size="sm">
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <EllipsisVerticalIcon size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5} align="end">
              <DropdownMenuItem>Cancel</DropdownMenuItem>
              <DropdownMenuItem>Reschedule</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
                <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>
      </Flex>
      <Flex flexDirection="column" gap="$6">
        <Flex gap="$4">
          <CalendarIcon size={20} />
          <Text size="sm" css={{ color: "$primary500" }}>
            10:00 AM
          </Text>
          <Text size="sm" css={{ color: "$primary500" }}>
            -
          </Text>
          <Text size="sm" css={{ color: "$primary500" }}>
            11:00 AM,
          </Text>
        </Flex>
        <Flex gap="$5" wrap="wrap">
          <Chip
            color="primary"
            size="lg"
            css={{
              transition: "all 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Analytics
          </Chip>
          <Chip
            color="secondary"
            size="lg"
            css={{
              transition: "all 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Research
          </Chip>
          <Chip
            color="success"
            size="lg"
            css={{
              transition: "all 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Roadmap
          </Chip>
        </Flex>
        <Flex gap="$2" alignItems="center">
          <AvatarGroup rounded="full" size="md">
            <Avatar src="https://i.pravatar.cc/150?img=30" key="0" />
            <Avatar src="https://i.pravatar.cc/150?img=43" key="1" />
            <Avatar src="https://i.pravatar.cc/150?img=14" key="2" />
            <Avatar src="https://i.pravatar.cc/150?img=10" key="3" />
          </AvatarGroup>
          <Text size="sm" css={{ color: "$neutral700" }}>
            4 participants
          </Text>
        </Flex>
        <Button
          variant="outline"
          size="md"
          css={{
            width: "100%",
            borderRadius: "$2xl",
            fontSize: "$sm",
            fontWeight: "normal",
            border: "1px solid $accent100 !important",
            color: "$accent500 !important",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              boxShadow:
                "0 0 5px rgba(98, 12, 189, 0.3), 0 0 5px rgba(0, 130, 141, 0.2), 0 0 5px rgba(0, 130, 141, 0.1)",
              backgroundColor: "$accent500 !important",
              color: "$white900 !important",
              borderColor: "$accent500 !important",
            },
          }}
        >
          Join Meeting
        </Button>
      </Flex>
    </Flex>
  );
}
