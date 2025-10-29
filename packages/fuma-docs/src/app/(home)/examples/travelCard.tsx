import { UsersIcon, SendMessageIcon } from "@sparrowengg/twigs-react-icons";
import { HeartIcon, LocationEdit } from "lucide-react";
import {
  Button,
  Text,
  Image,
  IconButton,
  Alert,
  AlertDescription,
  Flex,
} from "@sparrowengg/twigs-react";
import React from "react";

export default function TravelCard() {
  return (
    <Flex
      flexDirection="column"
      css={{
        padding: "$6",
        borderRadius: "$2xl",
        gap: "$5",
        height: "fit-content",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Image
        // src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="https://images.unsplash.com/photo-1566999573217-25c859ec1450?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Natural beauty"
        css={{
          borderRadius: "$2xl",
          width: "100%",
          height: "100%",
        }}
      />
      <Flex flexDirection="column" gap="$1">
        <Text
          size="md"
          weight="medium"
          css={{
            display: "flex",
            alignItems: "center",
            gap: "$4",
            color: "$neutral900",
          }}
        >
          Your Journey Begins Here{" "}
          <SendMessageIcon size={25} color="var(--twigs-colors-primary500)" />
        </Text>
        <Text
          css={{
            color: "$neutral600",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Explore the most popular travel experiences, from nature trails to
          cultural tours
        </Text>
      </Flex>
      <Flex gap="$2" alignItems="center">
        <IconButton
          icon={<LocationEdit size={20} />}
          aria-label="Edit"
          size="md"
          variant="ghost"
          color="secondary"
        />
        <Text
          size="sm"
          weight="regular"
          css={{
            color: "$neutral800",
          }}
        >
          Italy, Europe
        </Text>
        <Flex gap="$1" alignItems="center">
          <IconButton
            icon={<UsersIcon size={20} />}
            aria-label="Edit"
            size="md"
            variant="ghost"
            color="secondary"
          />
          <Text
            size="sm"
            weight="regular"
            css={{
              color: "$neutral800",
            }}
          >
            42
          </Text>
        </Flex>
        <Flex gap="$1" alignItems="center">
          <IconButton
            icon={<HeartIcon size={20} />}
            aria-label="Edit"
            size="md"
            variant="ghost"
            shape="round"
            css={{
              color: "$negative500",
              "&:hover": {
                backgroundColor: "$negative100 !important",
                color: "$negative500 !important",
              },
              "&:focus": {
                backgroundColor: "$negative100 !important",
                color: "$negative500 !important",
              },
            }}
          />
          <Text
            size="sm"
            weight="regular"
            css={{
              color: "$neutral800",
            }}
          >
            123
          </Text>
        </Flex>
      </Flex>
      <Flex gap="$2" justifyContent="space-between">
        <Alert status="info" size="sm" css={{
          width: "fit-content",
          border: "1px solid $accent100 !important",
        }}>
          <AlertDescription>Filling Fast 30/42</AlertDescription>
        </Alert>
        <Button
            variant="outline"
            size="md"
            css={{
              border: "2px solid $primary300 !important",
            }}
          >
            Join camp
          </Button>
      </Flex>
    </Flex>
  );
}
