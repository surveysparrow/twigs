import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  Separator,
  Text,
  Box,
  Chip,
  Flex,
  Input,
  Textarea,
} from "@sparrowengg/twigs-react";
import {
  FilterIcon,
  EllipsisVerticalIcon,
  CloseIcon,
  CommentIcon,
  ClockIcon,
  PageIcon,
  DocumentClipIcon,
  ChevronRightIcon,
  SearchIcon,
  ChevronDownIcon,
  InfoFillIcon,
} from "@sparrowengg/twigs-react-icons";
import iconImage from "@/assets/images/Group.png";
import Image from "next/image";

export default function Chat() {
  const users = [
    {
      name: "John",
      message: "1",
      content: "Connection Lost",
      color: "3",
      selected: false,
    },
    {
      name: "harry",
      message: "0",
      content: "What does this platform provide?",
      color: "2",
      selected: false,
    },
    {
      name: "gabriel",
      message: "1",
      content: "I wanted to conduct a survey – how do I start?",
      color: "1",
      selected: true,
    },
    {
      name: "Mia",
      message: "1",
      content: "Unable to connect to the platform",
      color: "3",
      selected: false,
    },
    {
      name: "Tom",
      message: "0",
      content: "I am facing some issues with",
      color: "1",
      selected: false,
    },
    {
      name: "Raj",
      message: "2",
      content: "File loading is taking too long",
      color: "4",
      selected: false,
    },
  ];
  return (
    <Flex
      css={{
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Flex
        flexDirection="column"
        css={{
          width: "25%",
          backgroundColor: "white",
          borderTopLeftRadius: "$2xl",
          borderBottomLeftRadius: "$2xl",
          "@media (max-width: 1024px)": {
            width: "50%",
          },
          "@media (max-width: 768px)": {
            width: "100%",
            paddingBottom: "$20",
            height: "100%",
            borderRadius: "$2xl",
          },
        }}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          css={{
            padding: "$6 $8",
            borderBottom: "1px solid $neutral200",
          }}
        >
          <Text
            size="md"
            css={{
              color: "$neutral900",
            }}
          >
            All Conversations
          </Text>
          <Box
            css={{
              backgroundColor: "transparent",
              border: "1px solid $neutral200",
              borderRadius: "$2xl",
              padding: "$4 $2",
              display: "flex",
            }}
          >
            <CloseIcon size={23} />
          </Box>
        </Flex>
        <Flex
          gap="$7"
          css={{
            padding: "$6 $8",
            borderBottom: "1px solid $neutral200",
          }}
        >
          <Box
            variant="outline"
            css={{
              backgroundColor: "transparent",
              border: "1px solid $neutral200",
              borderRadius: "$md",
              padding: "$2 $4",
              display: "flex",
              gap: "$2",
            }}
          >
            <Text
              size="xs"
              weight="medium"
              css={{
                color: "$primary600",
              }}
            >
              Status :
            </Text>
            <Text
              size="xs"
              css={{
                color: "$neutral900",
              }}
            >
              All
            </Text>
          </Box>
          <Box
            variant="outline"
            css={{
              backgroundColor: "transparent",
              border: "1px solid $neutral200",
              borderRadius: "$md",
              padding: "$2 $4",
              display: "flex",
              gap: "$2",
            }}
          >
            <Text
              size="xs"
              weight="medium"
              css={{
                color: "$primary600",
              }}
            >
              SLA :
            </Text>
            <Text
              size="xs"
              css={{
                color: "$neutral900",
              }}
            >
              All
            </Text>
          </Box>
          <Separator orientation="vertical" />
          <IconButton icon={<FilterIcon />} variant="ghost" color="secondary" />
          <IconButton
            icon={<EllipsisVerticalIcon />}
            variant="ghost"
            color="secondary"
          />
        </Flex>
        <Flex
          alignItems="center"
          gap="$4"
          css={{
            padding: "$6 $8",
            borderBottom: "1px solid $neutral200",
          }}
        >
          <Checkbox label="Show all" />
          <Text
            size="xs"
            weight="medium"
            css={{
              color: "$neutral600",
            }}
          >
            32.1k Conversations
          </Text>
        </Flex>
        <Box>
          {users.map((user) => (
            <Flex
              key={user.name}
              alignItems="center"
              css={
                user.selected
                  ? {
                      gap: "$4",
                      padding: "$4 $6",
                      borderLeft: "3px solid $primary400 !important",
                      backgroundColor: "$primary50",
                    }
                  : user.message != "0"
                  ? {
                      gap: "$4",
                      padding: "$4 $6",
                      borderBottom: "1px solid $neutral200",
                      borderLeft: "3px solid white !important",
                    }
                  : {
                      gap: "$4",
                      padding: "$4 $6",
                      borderBottom: "1px solid $neutral200",
                      backgroundColor: "$neutral50",
                      borderLeft: "3px solid $neutral50 !important",
                    }
              }
            >
              <Avatar
                name={user.name}
                size="md"
                css={{
                  "& span": {
                    fontWeight: "normal",
                    backgroundColor:
                      user.color === "1"
                        ? "$warning100"
                        : user.color === "2"
                        ? "$accent100"
                        : user.color === "3"
                        ? "$positive100"
                        : "$primary100",
                    color:
                      user.color === "1"
                        ? "$warning600"
                        : user.color === "2"
                        ? "$accent600"
                        : user.color === "3"
                        ? "$positive600"
                        : "$primary600",
                  },
                }}
              />
              {user.message != "0" ? (
                <Box>
                  <CommentIcon
                    size={20}
                    color="var(--twigs-colors-secondary800)"
                  />
                </Box>
              ) : (
                <Box>
                  <CommentIcon
                    size={20}
                    color="var(--twigs-colors-neutral400)"
                  />
                </Box>
              )}
              {user.message != "0" ? (
                <Text
                  css={{
                    color: "$secondary800",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.content}
                </Text>
              ) : (
                <Text
                  css={{
                    color: "$neutral700",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.content}
                </Text>
              )}
            </Flex>
          ))}
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
        css={{
          padding: "$5 $20",
          borderRight: "1px solid $neutral200",
          borderLeft: "1px solid $neutral200",
          width: "50%",
          backgroundColor: "white",
          boxShadow: "-10px 0 10px rgba(107, 107, 107, 0.1)",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (max-width: 1024px)": {
            width: "60%",
            borderTopRightRadius: "$2xl",
            borderBottomRightRadius: "$2xl",
          },
        }}
      >
        <Flex
          justifyContent="space-between"
          css={{
            padding: "$8 0",
            borderBottom: "1px solid $neutral200",
          }}
        >
          <Flex alignItems="center" gap="$2">
            <Text
              css={{
                color: "$neutral600",
              }}
            >
              ID: 484 ·
            </Text>
            <Text
              css={{
                color: "$neutral500",
              }}
            >
              Thrivesparrow
            </Text>
          </Flex>
          <Flex alignItems="center" gap="$3">
            <Text
              css={{
                color: "$neutral500",
              }}
            >
              SLA:
            </Text>
            <Chip color="warning">
              30m <ClockIcon size={16} />
            </Chip>
            <IconButton
              icon={<PageIcon size={16} />}
              variant="ghost"
              color="secondary"
            />
            <IconButton
              icon={<EllipsisVerticalIcon size={16} />}
              variant="ghost"
              color="secondary"
            />
          </Flex>
        </Flex>
        <Box
          css={{
            padding: "$12 0",
          }}
        >
          <Text
            weight="bold"
            css={{
              color: "$secondary700",
            }}
          >
            I wanted to conduct a survey – how do I start?
          </Text>
        </Box>
        <Box
          css={{
            paddingBottom: "$6",
          }}
        >
          <Text
            size="xs"
            css={{
              color: "$neutral700",
              textAlign: "center",
            }}
          >
            Friday, September 26
          </Text>
        </Box>
        <Flex gap="$4">
          <Box
            css={{
              alignSelf: "flex-end",
            }}
          >
            <Avatar
              name="Gabriel"
              size="md"
              css={{
                "& span": {
                  color: "$warning600",
                  backgroundColor: "$warning100",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
          <Flex flexDirection="column" gap="$1">
            <Text
              size="xs"
              css={{
                backgroundColor: "$secondary600",
                color: "white",
                borderRadius: "$xl",
                borderBottomLeftRadius: "0px",
                padding: "$4",
                width: "fit-content",
              }}
            >
              Hi there!
            </Text>
            <Text
              size="xs"
              css={{
                backgroundColor: "$secondary600",
                color: "white",
                borderRadius: "$xl",
                borderTopLeftRadius: "0px",
                padding: "$4",
                width: "75%",
              }}
            >
              How can we transform this into a truly exceptional experience?
              &apos;s brainstorm some ideas together.
            </Text>
            <Text
              size="xs"
              css={{
                color: "$neutral700",
                marginTop: "$2",
              }}
            >
              40m
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap="$4"
          css={{
            marginTop: "$4",
          }}
        >
          <Flex flexDirection="column" gap="$1" alignItems="flex-end">
            <Text
              size="xs"
              css={{
                backgroundColor: "$neutral100",
                color: "$neutral900",
                borderRadius: "$xl",
                borderBottomRightRadius: "0px",
                padding: "$4",
                width: "fit-content",
              }}
            >
              Hi, Good morning. Just give me a moment to check.
            </Text>
            <Text
              size="xs"
              css={{
                backgroundColor: "$neutral100",
                color: "$neutral900",
                borderRadius: "$xl",
                borderTopRightRadius: "0px",
                padding: "$4",
                width: "75%",
              }}
            >
              By collaborating and sharing our thoughts, we can create a product
              that not only meets expectations but exceeds them. What do you
              think? Any other suggestions to make this even better?
            </Text>
            <Text
              size="xs"
              css={{
                color: "$neutral700",
                marginTop: "$2",
              }}
            >
              2m
            </Text>
          </Flex>
          <Box
            css={{
              alignSelf: "flex-end",
            }}
          >
            <Avatar
              name="Gabriel"
              size="md"
              css={{
                "& span": {
                  color: "$warning600",
                  backgroundColor: "$warning100",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
        </Flex>
        <Flex
          gap="$4"
          css={{
            marginTop: "$4",
          }}
        >
          <Flex
            flexDirection="column"
            gap="$1"
            alignItems="flex-end"
            css={{
              width: "100%",
            }}
          >
            <Text
              size="xs"
              css={{
                backgroundColor: "$neutral100",
                color: "$neutral900",
                borderRadius: "$xl",
                padding: "$4",
                width: "fit-content",
              }}
            >
              Any other suggestions to make this even better?
            </Text>
            <Text
              size="xs"
              css={{
                color: "$neutral700",
                marginTop: "$2",
              }}
            >
              seen. Now
            </Text>
          </Flex>
          <Box
            css={{
              alignSelf: "flex-end",
            }}
          >
            <Avatar
              name="Gabriel"
              size="md"
              css={{
                "& span": {
                  color: "$warning600",
                  backgroundColor: "$warning100",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
        </Flex>
        <Flex
          gap="$4"
          css={{
            marginTop: "$4",
          }}
        >
          <Box
            css={{
              alignSelf: "flex-end",
            }}
          >
            <Avatar
              name="Gabriel"
              size="md"
              css={{
                "& span": {
                  color: "$warning600",
                  backgroundColor: "$warning100",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
          <Flex flexDirection="column" gap="$1">
            <Text
              size="xs"
              css={{
                backgroundColor: "$secondary600",
                color: "white",
                borderRadius: "$xl",
                padding: "$4",
                width: "fit-content",
              }}
            >
              Sure.
            </Text>
            <Text
              size="xs"
              css={{
                color: "$neutral700",
                marginTop: "$2",
              }}
            >
              Now
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          gap="$4"
          css={{
            padding: "$4 $4",
            marginTop: "$20",
            width: "100%",
            border: "1px solid $primary100 !important",
            borderRadius: "$xl",
          }}
        >
          <IconButton
            icon={<Image src={iconImage} alt="icon" width={30} height={30} />}
            aria-label="Ai"
            size="md"
            color="secondary"
            css={{
              color: "$secondary400",
            }}
            variant="ghost"
          />
          <Separator orientation="vertical" />
          <Input
            placeholder="Reply to Alfonso Culhane"
            size="sm"
            css={{
              width: "100%",
              border: "none",
              boxShadow: "none",
              "&:hover": {
                border: "none !important",
                boxShadow: "none !important",
              },
              "&:focus": {
                border: "none !important",
                boxShadow: "none !important",
              },
            }}
          />
          <IconButton
            icon={<DocumentClipIcon />}
            variant="ghost"
            size="md"
            color="secondary"
            css={{
              color: "$secondary400",
            }}
          />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        css={{
          width: "25%",
          height: "100%",
          borderTopRightRadius: "$2xl",
          borderBottomRightRadius: "$2xl",
          backgroundColor: "white",
          "@media (max-width: 1024px)": {
            display: "none",
          },
        }}
      >
        <Flex
          alignItems="center"
          gap="$4"
          css={{
            padding: "$7 $10",
            width: "100%",
            borderBottom: "1px solid $neutral200 !important",
          }}
        >
          <Box>
            <Avatar
              name="Gabriel"
              size="md"
              css={{
                "& span": {
                  color: "$negative600",
                  backgroundColor: "$negative100",
                  fontWeight: "normal",
                },
              }}
            />
          </Box>
          <Flex flexDirection="column" gap="$1">
            <Text weight="medium">Alfonso Culhane</Text>
            <Box
              css={{
                display: "flex",
                gap: "$1",
              }}
            >
              <Text
                size="xs"
                css={{
                  borderRight: "1px solid $neutral200",
                  paddingRight: "$3",
                  whiteSpace: "nowrap",
                  marginRight: "$3",
                }}
              >
                🇺🇸 Brooklyn
              </Text>
              <Text
                size="xs"
                css={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "110px",
                }}
              >
                liamcarver@sparrow.com
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          css={{
            padding: "$7 $10",
            width: "100%",
            borderBottom: "1px solid $neutral200 !important",
            gap: "$2",
          }}
        >
          <Text css={{ color: "$neutral600" }}>Source:</Text>
          <Text
            css={{ color: "$neutral800", marginRight: "$2" }}
            weight="medium"
          >
            Email ·
          </Text>
          <Text css={{ color: "$neutral600" }}>Updated:</Text>
          <Text css={{ color: "$neutral800" }} weight="medium">
            4h ago
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          css={{
            padding: "$7 $10",
            width: "100%",
            borderBottom: "1px solid $neutral200 !important",
            gap: "$7",
          }}
        >
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>Language:</Text>
            <Text css={{ color: "$neutral800", width: "60%" }} weight="medium">
              English
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>TimeZone:</Text>
            <Text css={{ color: "$neutral800", width: "60%" }} weight="medium">
              Asia/Kolkata
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>Url:</Text>
            <Text
              css={{
                color: "$secondary700",
                width: "60%",
                backgroundColor: "$neutral100",
                padding: "$2 $4",
                borderRadius: "$md",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              weight="medium"
            >
              https://cladvisors.surveysparrow
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          css={{
            padding: "$7 $10",
            width: "100%",
            gap: "$9",
          }}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text css={{ color: "$neutral800" }} weight="bold">
              Conversation Fields
            </Text>
            <Box>
              <IconButton
                icon={<SearchIcon size={16} />}
                variant="ghost"
                color="secondary"
                css={{ color: "$neutral800" }}
              />
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>Status:</Text>
            <Box css={{ width: "55%" }}>
              <Chip size="sm" color="accent" rightElement={<ChevronDownIcon />}>
                Open
              </Chip>
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>Priority:</Text>
            <Box css={{ width: "55%",display: "flex", alignItems: "center", gap: "$2" }}>
              <ClockIcon size={16}/>
              <Text css={{ color: "$secondary700" }} weight="medium">
                Urgent
              </Text> 
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>Assigned To:</Text>
            <Box css={{ width: "55%",display: "flex", alignItems: "center", gap: "$2" }}>
              <Avatar name="Gabriel" size="sm" 
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=512&h=512&dpr=2&q=80"
              />
              <Text size="xs" css={{ color: "$secondary700" }} weight="medium">
              Maren Siphron
              </Text> 
              <InfoFillIcon size={16} style={{color: "var(--twigs-colors-neutral400) !important"}}/>
            </Box>
          </Flex>
          <Flex justifyContent="space-between">
            <Text css={{ color: "$neutral600" }}>Tags:</Text>
            <Box css={{ width: "55%",display: "flex", alignItems: "center", gap: "$2" }}>
              <Chip size="sm">
                Solids
              </Chip>
              <Chip size="sm">
                3D Printing
              </Chip>
            </Box>
          </Flex>
          <Box>
            <Text css={{ color: "$neutral700", marginBottom: "$4" }}>Notes:</Text>
            <Box css={{
              padding: "$4",
              borderRadius: "$md",
              width: "100%",
              border: "1px solid $neutral400 !important",
            }}>
              <Text size="xs" css={{ color: "$neutral700"}}>
              https://app.zipy.ai/ae4da115/136?isasdfa error=false&id=7321fdba-b691-4f3bdf-aff3-31dd0d66b9ae-1680592227&euid
              </Text> 
            </Box>
          </Box>
          <Box>
            <Text css={{ color: "$neutral700", marginBottom: "$4" }}>Notes (single line testing):</Text>
            <Input variant="filled" placeholder="" css={{
                border:"none"
            }}/>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
