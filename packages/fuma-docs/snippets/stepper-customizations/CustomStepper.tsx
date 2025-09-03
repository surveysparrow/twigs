import React, { useState } from "react";
import { 
  Stepper, 
  StepperItem, 
  Box, 
  Text, 
  Flex 
} from "@sparrowengg/twigs-react";
import { 
  ChevronRightIcon,
  TickIcon,
} from "@sparrowengg/twigs-react-icons";

export default function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);

  type StepperItemProps = {
    children: React.ReactNode;
    active: boolean;
    completed: boolean;
    position: number;
  };

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$15" }}>  

      {/* Advanced Custom Stepper */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
        <Text css={{ fontSize: "$lg", fontWeight: "$6" }}>Advanced Custom Stepper</Text>
        
        <Stepper
          activeStep={activeStep}
          onChange={setActiveStep}
          components={{
            Separator: () => (
              <Box
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "$8",
                  height: "$8"
                }}
              >
                <ChevronRightIcon size={20} />
              </Box>
            ),
            Container: ({ children }: { children: React.ReactNode }) => (
              <Flex
                gap={4}
                alignItems="center"
                css={{
                  backgroundColor: "$neutral50",
                  padding: "$6",
                  borderRadius: "$xl",
                  border: "1px solid $neutral200"
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
                  alignItems: "center",
                  gap: "$3",
                  padding: "$3 $4",
                  borderRadius: "$md",
                  backgroundColor: active ? "$primary100" : completed ? "$positive100" : "$neutral100",
                  border: active ? "2px solid $primary500" : completed ? "2px solid $positive500" : "2px solid $neutral300",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: active ? "$primary200" : completed ? "$positive200" : "$neutral200"
                  }
                }}
                onClick={() => setActiveStep(position)}
              >
                <Box
                  css={{
                    width: "$6",
                    height: "$6",
                    borderRadius: "$sm",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "$sm",
                    fontWeight: "$6",
                    backgroundColor: active ? "$primary500" : completed ? "$positive500" : "$neutral400",
                    color: "white"
                  }}
                >
                  {completed ? <TickIcon size={12} /> : position + 1}
                </Box>
                <Text
                  css={{
                    fontSize: "$sm",
                    fontWeight: active ? "$6" : "$4",
                    color: active ? "$primary700" : completed ? "$positive700" : "$neutral700"
                  }}
                >
                  {children}
                </Text>
              </Box>
            )
          }}
        >
          <StepperItem label="User Registration">Registration</StepperItem>
          <StepperItem label="Account Setup">Setup</StepperItem>
          <StepperItem label="Confirmation">Confirm</StepperItem>
        </Stepper>
      </Box>

    </Box>
  );
} 