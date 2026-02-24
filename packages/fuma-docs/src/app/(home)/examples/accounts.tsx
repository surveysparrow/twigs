import {
  Box,
  Flex,
  Text,
  Avatar,
  Chip,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  Button,
  Heading,
} from "@sparrowengg/twigs-react";
import React, { memo, useCallback } from "react";
import {
  FilterIcon,
  UnorderedListIcon,
  RefreshIcon,
  SearchIcon,
  UserCirclePlusIcon,
  EllipsisVerticalIcon,
  ChevronDownIcon,
  AlertIcon,
} from "@sparrowengg/twigs-react-icons";
import { ACCOUNTS_USERS } from "../constants";

// Memoized priority indicator component
interface PriorityIndicatorProps {
  priority: string;
}

const PriorityIndicator = memo(function PriorityIndicator({ priority }: PriorityIndicatorProps) {
  if (priority === "High") {
    return (
      <Flex alignItems="center" gap="$4">
        <Box
          css={{
            width: "$4",
            height: "$4",
            border: "1px solid $warning500 !important",
            backgroundColor: "$warning50",
            borderRadius: "$round !important",
          }}
        />
        <Text>High</Text>
      </Flex>
    );
  }
  
  if (priority === "Medium") {
    return (
      <Flex alignItems="center" gap="$4">
        <Box
          css={{
            width: "$4",
            height: "$4",
            border: "1px solid $accent500 !important",
            backgroundColor: "$accent50",
            borderRadius: "$sm",
          }}
        />
        <Text>Medium</Text>
      </Flex>
    );
  }

  return (
    <Flex alignItems="center" gap="$4">
      <AlertIcon
        size={18}
        style={{ color: "var(--twigs-colors-negative500)" }}
      />
      <Text>Urgent</Text>
    </Flex>
  );
});

// Memoized assignee cell component
interface AssigneeCellProps {
  team?: string;
  assignee?: string;
}

const AssigneeCell = memo(function AssigneeCell({ team, assignee }: AssigneeCellProps) {
  if (team && assignee) {
    return (
      <Text css={{ color: "$neutral800" }}>
        {team}
        {" > "}
        {assignee}
      </Text>
    );
  }

  return (
    <Flex
      alignItems="center"
      gap="$4"
      css={{
        border: "1px solid $neutral100",
        borderRadius: "$3xl",
        padding: "$2",
        display: "inline-flex",
        paddingRight: "$3",
      }}
    >
      <IconButton
        icon={<UserCirclePlusIcon />}
        color="secondary"
        variant="ghost"
        size="sm"
        css={{ color: "$neutral600" }}
      />
      <Text
        css={{
          color: "$neutral800",
          "@media (max-width: 768px)": {
            maxWidth: "30px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
      >
        Assign an Agent
      </Text>
      <IconButton
        icon={<ChevronDownIcon />}
        variant="ghost"
        size="sm"
        color="secondary"
        css={{ color: "$neutral600" }}
      />
    </Flex>
  );
});

// Memoized user row
interface UserRowProps {
  user: {
    id: number;
    name: string;
    priority: string;
    status: string;
    avatar: string;
    team?: string;
    assignee?: string;
  };
}

const UserTableRow = memo(function UserTableRow({ user }: UserRowProps) {
  const getStatusColor = useCallback((status: string) => {
    return status === "Completed" ? "success" : "warning";
  }, []);

  return (
    <Tr>
      <Td
        css={{
          width: "50%",
          "@media (max-width: 400px)": {
            paddingRight: "3px !important",
          },
        }}
      >
        <Flex alignItems="center" gap="$6">
          <Avatar size="lg" name={user.name} src={user.avatar} />
          <Text
            weight="medium"
            css={{
              color: "$neutral900",
              "@media (max-width: 768px)": {
                maxWidth: "10vw",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            }}
          >
            {user.name}
          </Text>
        </Flex>
      </Td>
      <Td
        css={{
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      >
        <PriorityIndicator priority={user.priority} />
      </Td>
      <Td
        css={{
          "@media (max-width: 768px)": {
            padding: "0px !important",
          },
        }}
      >
        <Chip color={getStatusColor(user.status)} size="sm">
          {user.status}
        </Chip>
      </Td>
      <Td>
        <AssigneeCell team={user.team} assignee={user.assignee} />
      </Td>
    </Tr>
  );
});

export default function Accounts() {
  return (
    <Flex
      flexDirection="column"
      css={{
        height: "734px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        backgroundColor: "transparent",
        "@media (max-width: 768px)": {
          height: "100%",
        },
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        css={{
          backgroundColor: "white",
          borderBottom: "1px solid $neutral100",
          borderTopLeftRadius: "$2xl",
          borderTopRightRadius: "$2xl",
          padding: "$9",
        }}
      >
        <Flex gap="$4" alignItems="center">
          <IconButton
            icon={<UnorderedListIcon />}
            variant="ghost"
            color="secondary"
            css={{ color: "$secondary400" }}
            size="sm"
          />
          <Heading
            size="h6"
            weight="semibold"
            css={{
              color: "$neutral900",
              fontFamily: "tenon, sans-serif",
            }}
          >
            Mentions
          </Heading>
        </Flex>
        <Flex gap="$3">
          <IconButton
            icon={<SearchIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
              "@media (max-width: 400px)": { display: "none" },
            }}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={<FilterIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
              "@media (max-width: 768px)": { display: "none" },
            }}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={<RefreshIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
              "@media (max-width: 768px)": { display: "none" },
            }}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={<EllipsisVerticalIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
              "@media (max-width: 400px)": { display: "none" },
            }}
            variant="ghost"
            size="sm"
          />
          <Box css={{ paddingLeft: "$3", borderLeft: "1px solid $neutral100" }}>
            <Button
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              size="sm"
              color="secondary"
              css={{
                color: "$secondary400",
                fontWeight: "$2",
                textWrap: "nowrap",
              }}
            >
              By Relevancy
            </Button>
          </Box>
        </Flex>
      </Flex>
      <Table
        border="horizontal"
        css={{
          backgroundColor: "white",
          height: "100%",
          borderRadius: "$2xl",
        }}
      >
        <Thead>
          <Tr>
            <Th css={{ color: "$neutral600" }}>Showing 1-8 of 10</Th>
            <Th css={{ color: "$neutral900" }}>Priority</Th>
            <Th
              css={{
                color: "$neutral900",
                "@media (max-width: 768px)": { display: "none" },
              }}
            >
              Status
            </Th>
            <Th css={{ color: "$neutral900" }}>Team & Assignee</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ACCOUNTS_USERS.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
}
