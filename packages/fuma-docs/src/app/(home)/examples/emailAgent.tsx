import {
  Button,
  Text,
  Flex,
  RadioGroup,
  Radio,
  Select,
  Chip,
} from "@sparrowengg/twigs-react";
import React, { useState } from "react";
import Image from "next/image";
import emailIcon from "@/assets/images/email.svg";
import userIcon from "@/assets/images/user-heart-health.svg";
import { EMAIL_AGENT_OPTIONS } from "../constants";

export default function EmailAgent() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [selectedTone, setSelectedTone] = useState<string | undefined>(
    "1"
  );

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
        <Flex gap="$4" alignItems="center" css={{ paddingBottom: "$12" }}>
            <Image src={emailIcon.src} alt="email icon" width={40} height={40} />
          <Flex flexDirection="column">
            <Text size="sm" weight="medium">Email Agent</Text>
            <Text size="xs" css={{ color: "$neutral700" }}>Escalation: SurveySparrow Support Squad</Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" gap="$2" css={{ paddingBottom: "$16" }}>
            <Text size="xs" weight="medium" css={{ color: "$neutral800" }}>Tone of voice</Text>
          <Flex justifyContent="space-between" gap="$2"
          css={{
            "@media (max-width: 768px)": {
              justifyContent: "start",
            },
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
          >
            <Chip color="secondary"
            variant="outline"
            selectable
            size="lg"
            active={selectedTone === "1"}
            onActiveStateChange={(active: boolean) => setSelectedTone(active ? "1" : undefined)}
            css={{
              borderRadius: "99px",
              backgroundColor: selectedTone === "1" ? "$neutral50 !important" : null,
              borderColor: selectedTone === "1" ? "$secondary400 !important" : null,
            }}
            > <Text css={{ padding: "6px", "@media (min-width: 1600px)": {
              padding: "12px",
            }, }}>😎Casual</Text>  </Chip>
            <Chip color="secondary"
            variant="outline"
            selectable
            size="lg"
            active={selectedTone === "2"}
            onActiveStateChange={(active: boolean) => setSelectedTone(active ? "2" : undefined)}
            css={{
              borderRadius: "99px",
              backgroundColor: selectedTone === "2" ? "$neutral50 !important" : null,
              borderColor: selectedTone === "2" ? "$secondary400 !important" : null,
            }}
            > <Text css={{ padding: "6px", "@media (min-width: 1600px)": {
              padding: "12px",
            }, }}>👔 Professional</Text>  </Chip>
            <Chip color="secondary"
            variant="outline"
            selectable
            size="lg"
            active={selectedTone === "3"}
            onActiveStateChange={(active: boolean) => setSelectedTone(active ? "3" : undefined)}
            css={{
              borderRadius: "99px",
              backgroundColor: selectedTone === "3" ? "$neutral50 !important" : null,
              borderColor: selectedTone === "3" ? "$secondary400 !important" : null,
              "@media (max-width: 768px)": {
                display: "none",
              },
            }}
            > <Text css={{ padding: "6px", "@media (min-width: 1600px)": {
              padding: "12px",
            }, }}>😊 Friendly</Text>  </Chip>
          </Flex>
        </Flex>
        <Flex gap="$4">
            <Image src={userIcon.src} alt="phone icon" width={20} height={20} />
            <Text size="md"  css={{ color: "$neutral900", fontWeight: "$5" }}>When agent can&apos;t resolve a question</Text>
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
            css={{ color: "$neutral900" }}
          >
            Move chat to unassigned
          </Text>
          </Radio>
          </Flex>
          <Flex gap="$4" css={{ paddingBottom: "$4",}}>
          <Radio value="option2" size="sm">
          <Text size="sm" css={{ color: "$neutral900" }}>
          Hand over chat to an agent or team in the Inbox
          </Text>
          </Radio>
          </Flex>
        </RadioGroup>
        <Select
            instanceId="agent-select"
            placeholder="Select"
            options={EMAIL_AGENT_OPTIONS}
            size="md"
            defaultValue={EMAIL_AGENT_OPTIONS[0]}
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
