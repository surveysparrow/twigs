import React, { useState } from "react";
import { Stepper, StepperItem, Box, Text, Button, Flex } from "@sparrowengg/twigs-react";

export default function StepperBasic() {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

  return (
    <Box css={{ display: "flex", flexDirection: "column", gap: "$6" }}>
      
      {/* Basic Stepper */}
      <Box css={{ display: "flex", flexDirection: "column", gap: "$4" }}>
        <Text css={{ fontSize: "$md", fontWeight: "$6" }}>Basic Stepper</Text>
        
        <Stepper activeStep={activeStep} onChange={(step: number) => setActiveStep(step)}>
          <StepperItem label="Registration">Step 1</StepperItem>
          <StepperItem label="Account settings" allowClick={false}>Step 2</StepperItem>
          <StepperItem label="Confirm">Step 3</StepperItem>
        </Stepper>
        <Text css={{ fontSize: "$sm", color: "$neutral700" }}>
          Step 2 is disabled and cannot be clicked directly
        </Text>

        <Flex gap="$4">
          <Button onClick={prevStep} disabled={activeStep === 0}>
            Previous
          </Button>
          <Button onClick={nextStep} disabled={activeStep === 2}>
            Next
          </Button>
        </Flex>
      </Box>

    </Box>
  );
} 