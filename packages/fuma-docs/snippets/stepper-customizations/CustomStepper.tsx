import React, { useState } from "react";
import {
  Stepper,
  StepperItem,
  Box,
  Text,
  Flex,
} from "@sparrowengg/twigs-react";
import { ChevronRightIcon, TickIcon } from "@sparrowengg/twigs-react-icons";

export default function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);

  type StepperItemProps = {
    children: React.ReactNode;
    active: boolean;
    completed: boolean;
    position: number;
  };

  const renderedStepper = () => {
    return (
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "$8",
          height: "$8",
        }}
      >
        <ChevronRightIcon size={20} />
      </Box>
    );
  };

  const renderedContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <Flex
        gap={4}
        alignItems="center"
        css={{ backgroundColor: "$white900", padding: "$6" }}
      >
        {children}
      </Flex>
    );
  };

  const renderedStep = ({
    children,
    active,
    completed,
    position,
  }: StepperItemProps) => {
    return (
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          gap: "$3",
          padding: "$3 $4",
          borderRadius: "$md",
          backgroundColor: active
            ? "$primary50"
            : completed
            ? "$positive100"
            : "$neutral50",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onClick={() => setActiveStep(position)}
      >
        <Box
          css={{
            width: "$6",
            height: "$6",
            borderRadius: "$round",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "$sm",
            fontWeight: "$6",
            backgroundColor: active
              ? "$primary500"
              : completed
              ? "$positive500"
              : "$neutral300",
            color: "white",
          }}
        >
          {completed ? <TickIcon size={12} /> : position + 1}
        </Box>
        <Text
          css={{
            fontSize: "$sm",
            color: active
              ? "$primary700"
              : completed
              ? "$positive700"
              : "$neutral700",
          }}
        >
          {children}
        </Text>
      </Box>
    );
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15" }}>
      {/* Advanced Custom Stepper */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>
          Advanced Custom Stepper
        </Text>

        <Stepper
          activeStep={activeStep}
          onChange={setActiveStep}
          components={{
            Separator: renderedStepper,
            Container: renderedContainer,
            Step: renderedStep,
          }}
        >
          <StepperItem label="User Registration">
            <Text size="sm">User Registration</Text>
          </StepperItem>
          <StepperItem label="Account Setup">
            <Text size="sm">Account Setup</Text>
          </StepperItem>
          <StepperItem label="Confirmation">
            <Text size="sm">Confirmation</Text>
          </StepperItem>
        </Stepper>
      </Box>
    </Box>
  );
}
