import React from "react";
import {
  Text,
  Flex,
  Avatar,
  AvatarGroup,
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@sparrowengg/twigs-react";
import { BellIcon, ChevronRightIcon } from "@sparrowengg/twigs-react-icons";

export default function EmployeeCard() {
  // Custom Slider components for striped progress bar
  const RenderedThumb = () => {
    return <SliderThumb css={{ display: "none" }} />;
  };

  const RenderedRange = () => {
    return (
      <SliderRange
        css={{
          // Striped pattern using repeating linear gradient
          background: `repeating-linear-gradient(
            90deg,
            $accent400 0px,
            $accent400 3px,
            transparent 3px,
            transparent 6px
          )`,
          borderRadius: "999px",
        }}
      />
    );
  };

  const RenderedTrack = ({ children }: { children: React.ReactNode }) => {
    return (
      <SliderTrack
        css={{
          width: "100%",
          height: "10px",
          backgroundColor: "$neutral100",
          borderRadius: "999px",
        }}
      >
        {children}
      </SliderTrack>
    );
  };

  return (
    <Flex
      flexDirection="column"
      gap="$5"
      css={{
        width: "100%",
        height: "fit-content",
        padding: "$6",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Text weight="medium" css={{ color: "$neutral900" }}>
      Employees without Goals
      </Text>
      <Flex justifyContent="space-between">
        <Flex alignItems="center" gap="$6">
          <Text size="lg" weight="medium" css={{ color: "$neutral900", fontSize: "$2xl" }}>32</Text>
          <BellIcon size={24} strokeWidth={1}/>
        </Flex>
        <AvatarGroup limit={4} rounded="full" size="md">
        <Avatar key="1" src="https://i.pravatar.cc/150?img=60" />
        <Avatar key="2" src="https://i.pravatar.cc/150?img=61" />
        <Avatar key="3" src="https://i.pravatar.cc/150?img=62" />
        <Avatar key="4" src="https://i.pravatar.cc/150?img=63" />
        <Avatar key="5" src="https://i.pravatar.cc/150?img=64" />
      </AvatarGroup>
      </Flex>
      <Slider
        components={{
          Thumb: RenderedThumb,
          Range: RenderedRange,
          Track: RenderedTrack,
        }}
        value={[50]}
        max={100}
        onValueChange={() => {}}
      />
      <Text size="sm" css={{ color: "$neutral500", display: "flex", alignItems: "center", gap: "$2" }}>View more <ChevronRightIcon size={20} /></Text>
    </Flex>
  );
}
