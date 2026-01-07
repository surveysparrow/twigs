import React, { memo } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  Separator,
  Button,
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
import { CONVERSATION_MESSAGES } from "../constants";

// Memoized message component
interface MessageProps {
  id: number;
  sender: string;
  avatar: string;
  content: string;
  time: string;
  isHighlighted?: boolean;
  isSystem?: boolean;
}

const Message = memo(function Message({
  id,
  sender,
  avatar,
  content,
  time,
  isHighlighted = false,
}: MessageProps) {
  return (
    <Flex 
      gap="$4" 
      alignItems="flex-start"
      css={{ 
        opacity: id !== 1 ? 1 : 0.5,
        backgroundColor: isHighlighted ? "$accent50" : "white", 
        borderRadius: "$xl",
        padding: isHighlighted ? "$2" : "none",
        border: isHighlighted ? "1px dashed $accent200" : "none",
      }}
    >
      <Avatar
        src={avatar}
        name={sender}
        size="sm"
        css={{ flexShrink: 0, zIndex: 2 }}
      />
      <Flex flexDirection="column" gap="$2" css={{ flex: 1, position: "relative" }}>
        <Image 
          src={iconImage} 
          alt="icon" 
          width={16} 
          height={16} 
          className={`absolute top-3 left-[-18px] bg-[#623BEC] border-1 border-white rounded-full z-2 ${id === 3 ? "block" : "hidden"}`}
        />
        <Flex alignItems="center" gap="$4">
          <Text size="xs" weight="medium" css={{ color: "$neutral900" }}>
            {sender}
          </Text>
          <Text size="xs" css={{ color: "$neutral500" }}>
            {time}
          </Text>
        </Flex>
        <Text css={{ color: "$neutral700", lineHeight: "1.5", fontSize: "13px !important" }}>
          {content}
        </Text>
      </Flex>
    </Flex>
  );
});

// Memoized contact info row
interface ContactInfoRowProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  maxWidth?: string;
}

const ContactInfoRow = memo(function ContactInfoRow({ 
  label, 
  value, 
  icon,
  maxWidth = "180px" 
}: ContactInfoRowProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center" css={{ padding: "0 $10" }}>
      <Text size="sm" css={{ color: "$neutral600" }}>
        {label}
      </Text>
      <Flex alignItems="center" gap="$2" css={maxWidth ? { width: maxWidth } : {}}>
        {icon}
        <Text
          size="sm"
          css={{
            color: "$neutral800",
            maxWidth: maxWidth,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </Text>
      </Flex>
    </Flex>
  );
});

export default function Conversation() {
  return (
    <Flex
      gap="$4"
      css={{
        borderRadius: "$2xl",
        height: "734px",
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
            overflowY: "hidden",
            position: "relative",
            "@media (max-width: 1024px)": {
              padding: "$8 $20",
            },
          }}
        >
          <Box 
            css={{ 
              position: "absolute", 
              top: 40, 
              left: 92, 
              right: 0, 
              bottom: 0, 
              backgroundColor: "$neutral100", 
              zIndex: 1, 
              width: "1px", 
              height: "450px",
              "@media (max-width: 1024px)": {
                left: 51,
                height: "80%",
              },
            }}
          />
          {CONVERSATION_MESSAGES.map((message) => (
            <Message
              key={message.id}
              id={message.id}
              sender={message.sender}
              avatar={message.avatar}
              content={message.content}
              time={message.time}
              isHighlighted={'isHighlighted' in message ? message.isHighlighted : undefined}
              isSystem={'isSystem' in message ? message.isSystem : undefined}
            />
          ))}
        </Flex>

        {/* Input Area */}
        <Box css={{ 
          margin: "$6 $40", 
          marginTop: "$14", 
          backgroundColor: "#4A9CA614", 
          borderRadius: "$xl", 
          backdropFilter: "blur(10px)",
          "@media (max-width: 768px)": {
            margin: "$6 $10",
            marginTop: "$16",
          },
        }}>
          <Text size="xs" css={{ color: "$primary500", paddingBottom: "$4", padding: "$6 $4", borderTopLeftRadius: "$xl", borderTopRightRadius: "$xl" }}>
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
                "&:hover": { border: "none !important", boxShadow: "none !important" },
                "&:focus": { border: "none !important", boxShadow: "none !important" },
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
          css={{ padding: "$10", borderBottom: "1px solid $neutral100" }}
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
          gap="$10"
          css={{ padding: "$8 0", borderBottom: "1px solid $neutral100" }}
        >
          <ContactInfoRow label="Email ID" value="alfonso.culhane@surveysparr..." />
          <Flex justifyContent="space-between" alignItems="center" css={{ padding: "0 $10" }}>
            <Text size="sm" css={{ color: "$neutral600" }}>
              Phone Number
            </Text>
            <Text size="sm" css={{ color: "$neutral800", width: "180px" }}>
              (954) 734 0873
            </Text>
          </Flex>
          <Flex css={{ padding: "0 $6" }}>
            <Button 
              size="sm" 
              color="secondary" 
              variant="ghost" 
              css={{ width: "fit-content" }} 
              rightIcon={<ChevronRightIcon size={16} color="var(--twigs-colors-secondary500)" />}
            >
              Show all
            </Button>
          </Flex>
        </Flex>

        {/* Ticket Properties */}
        <Flex flexDirection="column" css={{ padding: "$8 0" }}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={{ marginBottom: "$8", padding: "0 $10" }}
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

          <Flex flexDirection="column" gap="$10">
            <ContactInfoRow 
              label="Created Date" 
              value="15 November 2024 04:24 P..."
              icon={<CalendarIcon size={14} strokeWidth={1} color="var(--twigs-colors-neutral600)" />}
              maxWidth="178px"
            />
            <Flex justifyContent="space-between" alignItems="center" css={{ padding: "0 $10" }}>
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
            <ContactInfoRow 
              label="Status" 
              value="Open"
              icon={<SettingsIcon size={14} strokeWidth={1} color="var(--twigs-colors-neutral600)" />}
              maxWidth="178px"
            />
            <Flex justifyContent="space-between" alignItems="center" css={{ padding: "0 $10" }}>
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
            <ContactInfoRow 
              label="Source" 
              value="Call"
              icon={<PhoneIcon size={14} strokeWidth={1} color="var(--twigs-colors-neutral600)" />}
              maxWidth="178px"
            />
            <Flex alignItems="center" css={{ cursor: "pointer", padding: "0 $6" }}>
              <Button 
                size="sm" 
                color="secondary" 
                variant="ghost" 
                css={{ width: "fit-content" }} 
                rightIcon={<ChevronRightIcon size={16} color="var(--twigs-colors-secondary500)" />}
              >
                Show all
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
