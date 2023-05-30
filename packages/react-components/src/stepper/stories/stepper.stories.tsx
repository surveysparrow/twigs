import React from 'react';
import { Stepper, StepperItem } from '../stepper';
import { Button } from '../../button';
import { Flex } from '../../flex';

export default {
  component: Stepper,
  title: 'Stepper'
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
      >
        <StepperItem
          label="Registration"
          css={{
            padding: '20px'
          }}
        >
          {' '}
          Step 1
        </StepperItem>
        <StepperItem
          label="Account settings"
          css={{
            padding: '20px'
          }}
        >
          {' '}
          Step 2
        </StepperItem>
        <StepperItem
          label="Confirm"
          css={{
            padding: '20px'
          }}
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
