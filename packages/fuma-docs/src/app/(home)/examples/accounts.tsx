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
import React from "react";
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

export default function Accounts() {
  const users = [
    {
      id: 1,
      name: "Unable to Save Customer Response",
      priority: "High",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=0",
    },
    {
      id: 2,
      name: "Error Encountered While Accessing Surveys from Yesterday when attempting to make changes",
      priority: "Medium",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=1",
      team: "Customer Success",
      assignee: "Harry Potter",
    },
    {
      id: 3,
      name: "November Customer Experience Survey",
      priority: "High",
      status: "Completed",
      avatar: "https://i.pravatar.cc/150?img=2",
      team: "Post Sales",
      assignee: "Jane Smith",
    },
    {
      id: 4,
      name: "Slack share on Customer Satisfaction Surveys",
      priority: "Low",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=3",
      team: "Customer Success",
      assignee: "Alice Brown",
    },
    {
      id: 5,
      name: "Unable to Save Customer Response",
      priority: "Medium",
      status: "Completed",
      avatar: "https://i.pravatar.cc/150?img=4",
      team: "Customer Success",
      assignee: "Alice Brown",
    },
    {
      id: 6,
      name: "November Customer Experience Survey",
      priority: "Low",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 7,
      name: "Always Facing Trouble in Payment Section",
      priority: "High",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=5",
      team: "Customer Success",
      assignee: "Hermione Granger",
    },
    {
      id: 8,
      name: "Unable to Save Customer Response",
      priority: "Medium",
      status: "Pending",
      avatar: "https://i.pravatar.cc/150?img=8",
      team: "Customer Success",
      assignee: "Harry Potter",
    },
  ];
  const getStatusColor = (status: string) => {
    return status === "Completed" ? "success" : "warning";
  };

  return (
    <Flex flexDirection="column"
    css={{
      height: "80vh",
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
            css={{
              color: "$secondary400",
            }}
            size="sm"
          />
          <Heading
            size="h6"
            weight="semibold"
            css={{
              color: "$neutral900",
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
            }}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={<FilterIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={<RefreshIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
            variant="ghost"
            size="sm"
          />
          <IconButton
            icon={<EllipsisVerticalIcon />}
            color="secondary"
            css={{
              color: "$secondary400",
            }}
            variant="ghost"
            size="sm"
          />
          <Box
            css={{
              paddingLeft: "$3",
              borderLeft: "1px solid $neutral100",
            }}
          >
            <Button
              rightIcon={<ChevronDownIcon />}
              variant="ghost"
              size="sm"
              color="secondary"
              css={{
                color: "$secondary400",
                fontWeight: "$2",
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
            <Th
              css={{
                color: "$neutral600",
              }}
            >
              Showing 1-8 of 10
            </Th>
            <Th
              css={{
                color: "$neutral900",
              }}
            >
              Priority
            </Th>
            <Th
              css={{
                color: "$neutral900",
                "@media (max-width: 768px)": {
                  display: "none",
                },
              }}
            >
              Status
            </Th>
            <Th
              css={{
                color: "$neutral900",
              }}
            >
              Team & Assignee
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td
                css={{
                  width: "50%",
                }}
              >
                <Flex alignItems="center" gap="$6">
                  <Avatar size="lg" name={user.name} src={user.avatar} />
                  <Text
                    weight="medium"
                    css={{
                      color: "$neutral900",
                      "@media (max-width: 768px)": {
                        maxWidth: "50px",
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
                {user.priority === "High" ? (
                  <Flex alignItems="center" gap="$4">
                    <Box
                      css={{
                        width: "$4",
                        height: "$4",
                        border: "1px solid $warning500 !important",
                        backgroundColor: "$warning50",
                        borderRadius: "$round !important",
                      }}
                    ></Box>
                    <Text>High</Text>
                  </Flex>
                ) : user.priority === "Medium" ? (
                  <Flex alignItems="center" gap="$4">
                    <Box
                      css={{
                        width: "$4",
                        height: "$4",
                        border: "1px solid $accent500 !important",
                        backgroundColor: "$accent50",
                        borderRadius: "$sm",
                      }}
                    ></Box>
                    <Text>Medium</Text>
                  </Flex>
                ) : (
                  <Flex alignItems="center" gap="$4">
                    <AlertIcon
                      size={18}
                      style={{
                        color: "var(--twigs-colors-negative500)",
                      }}
                    />
                    <Text>Urgent</Text>
                  </Flex>
                )}
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
                {user.team && user.assignee ? (
                  <Text
                    css={{
                      color: "$neutral800",
                    }}
                  >
                    {user.team}
                    {" > "}
                    {user.assignee}
                  </Text>
                ) : (
                  <Flex
                    className="flex items-center gap-2 border-1 border-fd-border rounded-xl p-1 inline-flex pr-3"
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
                      css={{
                        color: "$neutral600",
                      }}
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
                      css={{
                        color: "$neutral600",
                      }}
                    />
                  </Flex>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
}
