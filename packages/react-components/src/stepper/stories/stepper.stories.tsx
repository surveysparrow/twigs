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
          allowClick
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

const App = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const nextStep = () => setActiveStep((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper
        activeStep={activeStep}
        onChange={(index) => console.log(index)}
        components={{
          TriggerSeparator: () => <span> Next  </span>,
          TriggerContainer: ({ children }) => <div>{children}</div>,
          TriggerButton: ({
            children
          }) => (
            <div
              style={{
                backgroundColor: 'red'
              }}
            >
              {children}
            </div>
          )
        }}
      >
        <StepperItem label="Step 1" allowClick>Steps 1</StepperItem>
        <StepperItem label="Step 2">Step 2</StepperItem>
      </Stepper>
      <Flex
        alignItems="center"
        gap="$4"
      >
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
export const Custom = App.bind({});
