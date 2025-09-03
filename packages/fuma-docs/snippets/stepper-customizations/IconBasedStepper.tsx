import React, { useState } from "react";
import { 
  Stepper, 
  StepperItem, 
  Box, 
  Text, 
  Flex 
} from "@sparrowengg/twigs-react";
import { 
  TickIcon,
  UserIcon,
  SettingsIcon,
} from "@sparrowengg/twigs-react-icons";

export default function IconBasedStepper() {
  const [activeStep, setActiveStep] = useState(0);

  type StepperItemProps = {
    children: React.ReactNode;
    active: boolean;
    completed: boolean;
    position: number;
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15" }}>  

      {/* Icon-based Stepper */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Icon-based Stepper</Text>
        
        <Stepper
          activeStep={activeStep}
          onChange={setActiveStep}
          components={{
            Container: ({ children }: { children: React.ReactNode }) => (
              <Flex
                gap={4}
                alignItems="center"
                css={{
                  padding: "$4"
                }}
              >
                {children}
              </Flex>
            ),
            Step: ({
              children, active, completed, position
            }: StepperItemProps) => (
              <Box
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "$2",
                  cursor: "pointer",
                  padding: "$3",
                  borderRadius: "$md",
                  backgroundColor: active ? "$primary50" : completed ? "$positive50" : "transparent",
                  border: active ? "2px solid $primary300" : completed ? "2px solid $positive300" : "2px solid transparent",
                  transition: "all 0.2s ease"
                }}
                onClick={() => setActiveStep(position)}
              >
                <Box
                  css={{
                    width: "$8",
                    height: "$8",
                    borderRadius: "$sm",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: active ? "$primary500" : completed ? "$positive500" : "$neutral300",
                    color: "white"
                  }}
                >
                  {position === 0 && <UserIcon size={20} />}
                  {position === 1 && <SettingsIcon size={20} />}
                  {position === 2 && <TickIcon size={20} />}
                </Box>
                <Text
                  css={{
                    fontSize: "$xs",
                    fontWeight: active ? "$6" : "$4",
                    color: active ? "$primary700" : completed ? "$positive700" : "$neutral600",
                    textAlign: "center"
                  }}
                >
                  {children}
                </Text>
              </Box>
            )
          }}
        >
          <StepperItem label="User Profile">Profile</StepperItem>
          <StepperItem label="Settings">Settings</StepperItem>
          <StepperItem label="Complete">Complete</StepperItem>
        </Stepper>
      </Box>

    </Box>
  );
} 