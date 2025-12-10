import React, { useState } from "react";
import {
  Checkbox,
  Input,
  Link,
  Select,
  Text,
  Button,
  Radio,
  RadioGroup,
  Flex,
} from "@sparrowengg/twigs-react";
import { TickCircleFillIcon } from "@sparrowengg/twigs-react-icons";

export default function MiniForm() {
  const options = [
    { value: "React", label: "React" },
    { value: "Next.js", label: "Next.js" },
    { value: "Tailwind CSS", label: "Tailwind CSS" },
  ];
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  return (
    <Flex
      flexDirection="column"
      gap="$8"
      css={{
        width: "100%",
        height: "fit-content",
        padding: "$6",
        borderRadius: "$2xl",
        backgroundColor: "white",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <Flex flexDirection="column" gap="$2">
        <Text
          size="md"
          weight="medium"
          css={{
            color: "$neutral900",
            display: "flex",
            alignItems: "center",
            gap: "$4",
          }}
        >
          Professional Experience{" "}
          <TickCircleFillIcon
            size={25}
            color="var(--twigs-colors-primary500)"
          />
        </Text>
        <Text size="sm" css={{ color: "$neutral600" }}>
          Please enter your professional experience to get started
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="$4">
        <Text>Company Name</Text>
        <Input placeholder="Enter your company name" />
      </Flex>
      <Flex flexDirection="column" gap="$4">
        <Text>What is your goal?</Text>
        <RadioGroup
          value={selectedValue}
          onChange={setSelectedValue}
          defaultValue="option1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Radio value="option1" size="sm" />
          <Text
            size="xs"
            css={{ color: "$neutral500", cursor: "pointer", marginRight: "$6" }}
          >
            Apply for a job
          </Text>
          <Radio value="option2" size="sm" />
          <Text size="xs" css={{ color: "$neutral500", cursor: "pointer" }}>
            Upskill myself
          </Text>
        </RadioGroup>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" gap="$10">
        <Flex flexDirection="column" gap="$4" css={{ width: "50%" }}>
          <Text>Acquired skill</Text>
          <Select
            instanceId="acquired-skill-select"
            placeholder="Select"
            options={options}
            size="md"
            variant="filled"
          />
        </Flex>
        <Flex flexDirection="column" gap="$6" css={{ width: "50%" }}>
          <Text>Terms & Conditions</Text>
          <Flex gap="$4">
            <Checkbox
              label="I agree to the terms & conditions"
              size="sm"
              variant="default"
              id="terms"
            />
            <label
              htmlFor="terms"
              style={{
                color: "var(--twigs-colors-neutral700)",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Accept{" "}
              <Link
                href="#"
                css={{ color: "$primary500", textDecoration: "underline" }}
              >
                View
              </Link>
            </label>
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" gap="$4">
        <Button variant="outline" color="secondary" size="md">
          Cancel
        </Button>
        <Button variant="default" size="md">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
