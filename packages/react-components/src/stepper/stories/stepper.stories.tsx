import React from 'react';
import { Stepper, StepperItem } from '../stepper';
import { Button } from '../../button';
import { Flex } from '../../flex';

export default {
  component: Stepper,
  title: 'Navigation/Stepper'
};

const Template = (args) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => setActiveStep((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        activeStep={activeStep}
        {...args}
        onChange={setActiveStep}
      >
        <StepperItem
          label="Registration"
          allowClick
        >
          {' '}
          Step 1
        </StepperItem>
        <StepperItem
          label="Account settings"
          allowClick={false}
        >
          {' '}
          For this tab, allowClick is set to false. So, TabsTrigger is not focusable and clickable.
        </StepperItem>
        <StepperItem
          label="Confirm"
        >
          {' '}
          Step 3
        </StepperItem>
      </Stepper>
      <Flex alignItems="center" gap="$4">
        <Button onClick={prevStep}>
          Previous
        </Button>
        <Button onClick={nextStep}>
          Next
        </Button>
      </Flex>
    </>
  );
};
export const Default = Template.bind({});
