import {
  Button,
  Text,
  Flex,
  RadioGroup,
  Radio,
  Select,
} from "@sparrowengg/twigs-react";
import React, { useState } from "react";
import Image from "next/image";
import emailIcon from "@/assets/images/email.svg";
import userIcon from "@/assets/images/user-heart-health.svg";

export default function EmailAgent() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const options = [
    { value: "SurveySparrow Support Squad", label: "SurveySparrow Support Squad" },
    { value: "SurveySparrow Marketing Squad", label: "SurveySparrow Marketing Squad" },
  ];
  return (
    <Flex
      flexDirection="column"
      css={{
        paddingTop: "$7",
        paddingBottom: "$7",
        paddingLeft: "$7",
        paddingRight: "$7",
        backgroundColor: "white",
        borderRadius: "$2xl",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}>
        <Flex gap="$4" css={{ paddingBottom: "$12" }}>
            <Image src={emailIcon.src} alt="email icon" width={40} height={40} />
          <Flex flexDirection="column">
            <Text size="md" weight="medium">Email Agent</Text>
            <Text size="sm" css={{ color: "$neutral700" }}>Escalation: SurveySparrow Support Squad</Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="$2" css={{ paddingBottom: "$16" }}>
            <Text size="md" weight="medium" css={{ color: "$neutral800" }}>Tone of voice</Text>
          <Flex justifyContent="space-between" gap="$2"
          css={{
            "@media (max-width: 768px)": {
              justifyContent: "start",
            },
          }}
          >
            <Button variant="ghost" color="default"
            css={{
              padding: "$7 $8",
              borderRadius: "$2xl",
              border: "1px solid $secondary400",
              backgroundColor: "$neutral50",
              textWrap: "nowrap",
            }}
            >😎 Casual</Button>
            <Button variant="ghost" color="default"
            css={{
              padding: "$7 $8",
              borderRadius: "$2xl",
              border: "1px solid $secondary100",
              textWrap: "nowrap",
            }}
            >👔 Professional </Button>
            <Button variant="ghost" color="default"
            css={{
              padding: "$7 $8",
              borderRadius: "$2xl",
              border: "1px solid $secondary100",
              textWrap: "nowrap",
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
            >😊 Friendly </Button>
          </Flex>
        </Flex>
        <Flex gap="$4">
            <Image src={userIcon.src} alt="phone icon" width={20} height={20} />
            <Text size="md"  css={{ color: "$neutral900" }}>When agent can&apos;t resolve a question</Text>
        </Flex>
        <RadioGroup
          value={selectedValue}
          onChange={setSelectedValue}
          defaultValue="option1"
          css={{ gap:"0"}}
        >
          <Flex gap="$4" css={{ paddingBottom: "$6", paddingTop: "$6" }}>
          <Radio value="option1" size="sm">
          <Text
            size="sm"
            css={{ color: "$neutral700" }}
          >
            Move chat to unassigned
          </Text>
          </Radio>
          </Flex>
          <Flex gap="$4" css={{ paddingBottom: "$4",}}>
          <Radio value="option2" size="sm">
          <Text size="sm" css={{ color: "$neutral700" }}>
          Hand over chat to an agent or team in the Inbox
          </Text>
          </Radio>
          </Flex>
        </RadioGroup>
        <Select
            instanceId="agent-select"
            placeholder="Select"
            options={options}
            size="lg"
            defaultValue={options[0]}
          />
        <Flex gap="$4" css={{ paddingTop: "$10" }}>
        <Button variant="default" size="md">
          Save Changes
        </Button>
        <Button variant="filled" color="default" size="md">
          Discard
        </Button>
      </Flex>
      </Flex>
  );
}
