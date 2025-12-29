import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  Separator,
} from "@sparrowengg/twigs-react";
import {
  ResetIcon,
  EllipsisVerticalIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  CalendarIcon,
  PhoneIcon,
  SendMessageIcon,
  SettingsIcon,
  CommentIcon,
} from "@sparrowengg/twigs-react-icons";
import Image from "next/image";
import iconImage from "@/assets/images/avt-icon.svg";

// Message data
const messages = [
  {
    id: 1,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "self assigned the issue",
    time: "Just now",
    isSystem: true,
    isAgent: true,
  },
  {
    id: 2,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "We apologise for any inconvenience you've experienced with our payment system. We understand the importance of a smooth transaction process.",
    time: "Just now",
    isAgent: true,
  },
  {
    id: 3,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "We apologise for any inconvenience you've experienced with our payment system. We understand the importance of a smooth transaction process.",
    time: "Just now",
    isAgent: true,
    isHighlighted: true,
  },
  {
    id: 4,
    sender: "Alfonso Culhane",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "I've attempted to on both Google Chrome and Mozilla Firefox, but the issue persists. Any guidance on resolving this would be greatly appreciated.",
    time: "Just now",
    isAgent: false,
  },
  {
    id: 5,
    sender: "Cristofer Franci",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      'Thank you for providing more details. We apologize for the inconvenience you\'re facing. The "Error 500: Internal Server Error" indicates a problem on our server side. Our technical team is investigating this issue.',
    time: "Just now",
    isAgent: true,
  },
];


export default function Conversation() {
  return (
    <Flex
      gap="$4"
      css={{
        borderRadius: "$2xl",
        height: "655px",
        "@media (max-width: 1024px)": {
          height: "100%",
          flexDirection: "column",
        },
      }}
    >
      {/* Left Panel - Chat Area */}
      <Flex
        flexDirection="column"
        css={{
          width: "65%",
          backgroundColor: "white",
          borderRadius: "$2xl",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          "@media (max-width: 1024px)": {
            width: "100%",
          },
        }}
      >
        {/* Chat Header */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          css={{
            padding: "$8 $10",
            borderBottom: "1px solid $neutral100",
            "@media (max-width: 1024px)": {
              padding: "$8 $4",
            },
          }}
        >
          <Text size="md" weight="medium" css={{ color: "$neutral900" }}>
            Authentication token issue troubleshooting
          </Text>
          <Flex gap="$4" alignItems="center">
            <IconButton
              icon={<ResetIcon size={18} />}
              variant="ghost"
              color="secondary"
              size="md"
            />
            <IconButton
              icon={<EllipsisVerticalIcon size={18} />}
              variant="ghost"
              color="secondary"
              size="md"
            />
          </Flex>
        </Flex>

        {/* Messages Container */}
        <Flex
          flexDirection="column"
          gap="$15"
          css={{
            padding: "$8 $40",
            flex: 1,
            overflowY: "auto",
            position: "relative",
            "@media (max-width: 1024px)": {
              padding: "$8 $20",
            },
          }}
        >
         <Box 
         css={{ 
          position: "absolute", 
          top: 40, left: 92, right: 0, bottom: 0, 
          backgroundColor: "$neutral100", 
          zIndex: 1, 
          width:"1px", 
          height:"330px",
          "@media (max-width: 1024px)": {
            left: 51,
            height: "75%",
          },
          }}>
         </Box>
          {messages.map((message) => (
            <Flex key={message.id} gap="$4" alignItems="flex-start" 
            css={{ 
                opacity: message.id !=1 ? 1 : 0.5, backgroundColor: message.isHighlighted ? "$accent50" : "white", 
                borderRadius: "$xl", padding: message.isHighlighted ? "$2" : "none",
                border: message.isHighlighted ? "1px dashed $accent200" : "none",
            }}>
              <Avatar
                src={message.avatar}
                name={message.sender}
                size="sm"
                css={{
                  flexShrink: 0,
                  zIndex: 2,
                }}
              />
              <Flex flexDirection="column" gap="$2" css={{ flex: 1, position: "relative" }}>
              <Image src={iconImage} alt="icon" width={16} height={16} className={`absolute top-3 left-[-18px] bg-[#623BEC] rounded-full z-2 ${message.id == 3 ? "block" : "hidden"}`}/>
                <Flex alignItems="center" gap="$4">
                  <Text size="xs" weight="medium" css={{ color: "$neutral900" }}>
                    {message.sender}
                  </Text>
                  <Text size="xs" css={{ color: "$neutral500" }}>
                    {message.time}
                  </Text>
                </Flex>
                <Text
                    css={{
                      color: "$neutral700",
                      lineHeight: "1.5",
                      fontSize: "13px !important",
                    }}
                  >
                    {message.content}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>

        {/* Input Area */}
        <Box css={{ margin: "$6 $40", marginTop: "$14", backgroundColor: "#4A9CA614", borderRadius: "$xl", backdropFilter: "blur(10px)",
          "@media (max-width: 768px)": {
            margin: "$6 $10",
            marginTop: "$16",
          },
         }}>
          <Text size="xs" css={{ color: "$primary500", paddingBottom: "$4", padding: "$6 $4", borderTopLeftRadius: "$xl", borderTopRightRadius: "$xl"}}>
            Alfonso is awaiting for a response
          </Text>
          <Flex
            alignItems="center"
            gap="$4"
            css={{
              padding: "$4",
              border: "1px solid $primary100",
              borderRadius: "$xl",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
            }}
          >
            <IconButton
              icon={<CommentIcon size={18} />}
              aria-label="AI Assistant"
              size="md"
              color="secondary"
              variant="ghost"
            />
            <Separator orientation="vertical" css={{ height: "24px !important", backgroundColor: "$neutral100" }} />
            <Input
              placeholder="Reply or add an internal note"
              size="md"
              css={{
                flex: 1,
                border: "none !important",
                boxShadow: "none !important",
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
              icon={<SendMessageIcon size={18} />}
              variant="ghost"
              color="primary"
              size="md"
            />
          </Flex>
        </Box>
      </Flex>

      {/* Right Panel - Contact Details */}
      <Flex
        flexDirection="column"
        css={{
          width: "35%",
          backgroundColor: "white",
          borderRadius: "$2xl",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          "@media (max-width: 1024px)": {
            display: "none",
          },
        }}
      >
        {/* Contact Header */}
        <Flex
          alignItems="center"
          gap="$4"
          css={{
            padding: "$10",
            borderBottom: "1px solid $neutral100",
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            name="Alfonso Culhane"
            size="sm"
          />
          <Text size="md" weight="medium" css={{ color: "$neutral900" }}>
            Alfonso Culhane
          </Text>
        </Flex>

        {/* Contact Info */}
        <Flex
          flexDirection="column"
          gap="$6"
          css={{
            padding: "$8 $10",
            borderBottom: "1px solid $neutral100",
          }}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text size="sm" css={{ color: "$neutral600" }}>
              Email ID
            </Text>
            <Text
              size="sm"
              css={{
                color: "$neutral800",
                maxWidth: "180px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              alfonso.culhane@surveysparr...
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text size="sm" css={{ color: "$neutral600" }}>
              Phone Number
            </Text>
            <Text size="sm" css={{ color: "$neutral800", width: "180px" }}>
              (954) 734 0873
            </Text>
          </Flex>
          <Flex alignItems="center" gap="$2" css={{ cursor: "pointer" }}>
            <Text size="sm" weight="medium" css={{ color: "$secondary500" }}>
              Show all
            </Text>
            <ChevronRightIcon size={16} color="var(--twigs-colors-secondary500)" />
          </Flex>
        </Flex>

        {/* Ticket Properties */}
        <Flex
          flexDirection="column"
          css={{
            padding: "$8 $10",
          }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={{ marginBottom: "$8" }}
          >
            <Text size="md" weight="medium" css={{ color: "$neutral900" }}>
              Ticket Properties
            </Text>
            <IconButton
              icon={<ChevronDownIcon size={18} />}
              variant="ghost"
              color="secondary"
              size="sm"
            />
          </Flex>

          <Flex flexDirection="column" gap="$6">
            {/* Created Date */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text size="sm" css={{ color: "$neutral600" }}>
                Created Date
              </Text>
              <Flex alignItems="center" gap="$2">
                <CalendarIcon size={14} strokeWidth={1} color="var(--twigs-colors-neutral600)" />
                <Text
                  size="sm"
                  css={{
                    color: "$neutral800",
                    maxWidth: "160px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  15 November 2024 04:24 P...
                </Text>
              </Flex>
            </Flex>

            {/* Priority */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text size="sm" css={{ color: "$neutral600" }}>
                Priority
              </Text>
              <Flex alignItems="center" gap="$2" css={{ width: "178px" }}>
                <Box
                  css={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "$round",
                    border: "1px solid $positive500",
                    backgroundColor: "$positive50",
                  }}
                />
                <Text size="sm" css={{ color: "$neutral800" }}>
                  Low
                </Text>
              </Flex>
            </Flex>

            {/* Status */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text size="sm" css={{ color: "$neutral600" }}>
                Status
              </Text>
              <Flex alignItems="center" gap="$2" css={{ width: "178px" }}>
                <SettingsIcon size={14} strokeWidth={1} color="var(--twigs-colors-neutral600)" />
                <Text size="sm" css={{ color: "$neutral800" }}>
                  Open
                </Text>
              </Flex>
            </Flex>

            {/* Assigned to */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text size="sm" css={{ color: "$neutral600" }}>
                Assigned to
              </Text>
              <Flex alignItems="center" gap="$2" css={{ width: "178px" }}>
                <Avatar
                  src="https://i.pravatar.cc/150?img=32"
                  name="Cristofer Franci"
                  size="xs"
                />
                <Text
                  size="sm"
                  css={{
                    color: "$neutral800",
                    maxWidth: "150px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Support US &gt; Cristofer Fra...
                </Text>
              </Flex>
            </Flex>

            {/* Source */}
            <Flex justifyContent="space-between" alignItems="center">
              <Text size="sm" css={{ color: "$neutral600" }}>
                Source
              </Text>
              <Flex alignItems="center" gap="$2" css={{ width: "178px" }}>
                <PhoneIcon size={14} strokeWidth={1} color="var(--twigs-colors-neutral600)" />
                <Text size="sm" css={{ color: "$neutral800" }}>
                  Call
                </Text>
              </Flex>
            </Flex>

            <Flex
              alignItems="center"
              gap="$2"
              css={{ cursor: "pointer", marginTop: "$2" }}
            >
              <Text size="sm" weight="medium" css={{ color: "$secondary500" }}>
                Show all
              </Text>
              <ChevronRightIcon size={16} color="var(--twigs-colors-secondary500)" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
