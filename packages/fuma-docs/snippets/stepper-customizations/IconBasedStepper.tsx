import React, { useState } from "react";
import {
  Stepper,
  StepperItem,
  Box,
  Text,
  Flex,
} from "@sparrowengg/twigs-react";
import {
  UserIcon,
  SettingsIcon,
  CalendarIcon,
} from "@sparrowengg/twigs-react-icons";

export default function IconBasedStepper() {
  const [activeStep, setActiveStep] = useState(0);

  type StepperItemProps = {
    children: React.ReactNode;
    active: boolean;
    completed: boolean;
    position: number;
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
          flexDirection: "column",
          alignItems: "center",
          gap: "$2",
          cursor: "pointer",
          padding: "$3",
          transition: "all 0.2s ease",
        }}
        onClick={() => setActiveStep(position)}
      >
        <Box
          css={{
            width: "$8",
            height: "$8",
            borderRadius: "$round",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: active
              ? "$primary500"
              : completed
              ? "$positive500"
              : "$neutral300",
            color: "white",
          }}
        >
          {position === 0 && <UserIcon size={20} />}
          {position === 1 && <SettingsIcon size={20} />}
          {position === 2 && <CalendarIcon size={20} />}
        </Box>
        <Text
          css={{
            fontSize: "$xs",
            color: active
              ? "$primary700"
              : completed
              ? "$positive700"
              : "$neutral600",
            textAlign: "center",
          }}
        >
          {children}
        </Text>
      </Box>
    );
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15" }}>
      {/* Icon-based Stepper */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>
          Icon-based Stepper
        </Text>

        <Stepper
          activeStep={activeStep}
          onChange={setActiveStep}
          components={{
            Container: renderedContainer,
            Step: renderedStep,
          }}
        >
          <StepperItem label="User Profile">
            <Text size="sm">User Profile</Text>
          </StepperItem>
          <StepperItem label="Settings">
            <Text size="sm">Settings</Text>
          </StepperItem>
          <StepperItem label="Events">
            <Text size="sm">Events</Text>
          </StepperItem>
        </Stepper>
      </Box>
    </Box>
  );
}
