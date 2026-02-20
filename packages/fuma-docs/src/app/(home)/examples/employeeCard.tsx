import React from "react";
import {
  Text,
  Flex,
  Avatar,
  AvatarGroup,
  Slider,
  Button,
  IconButton,
} from "@sparrowengg/twigs-react";
import { ChevronRightIcon } from "@sparrowengg/twigs-react-icons";
import bellIcon from "@/assets/images/bell.svg";
import Image from "next/image";
import { EmployeeSliderComponents } from "../shared";

export default function EmployeeCard() {
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
        <Flex alignItems="center" gap="$4">
          <Text size="lg" weight="bold" css={{ color: "$neutral900", fontSize: "$2xl" }}>32</Text>
          <IconButton icon={<Image src={bellIcon.src} alt="bell" width={20} height={20} />} aria-label="bell" size="md" color="secondary" variant="ghost" />
        </Flex>
        <AvatarGroup limit={4} rounded="full" size="sm">
        <Avatar key="1" src="https://i.pravatar.cc/150?img=60" />
        <Avatar key="2" src="https://i.pravatar.cc/150?img=61" />
        <Avatar key="3" src="https://i.pravatar.cc/150?img=62" />
        <Avatar key="4" src="https://i.pravatar.cc/150?img=63" />
        <Avatar key="5" src="https://i.pravatar.cc/150?img=64" />
      </AvatarGroup>
      </Flex>
      <Slider
        components={EmployeeSliderComponents}
        value={[50]}
        max={100}
        onValueChange={() => {}}
      />
      <Button size="sm" color="secondary" variant="ghost" css={{ width: "fit-content" }} rightIcon={<ChevronRightIcon size={20} style={{ marginTop: "1px"}} />}>View more</Button>
    </Flex>
  );
}
