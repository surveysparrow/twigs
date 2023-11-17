import React from 'react';
import { Stepper, StepperItem } from '../stepper';
import { Button } from '../../button';
import { Flex } from '../../flex';
import { Box } from '../../box';

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
          Separator: () => (
            <Box
              css={{
                height: '$1',
                backgroundColor: '$accent500',
                width: '$10'
              }}
            />
          ),
          Container: ({ children }) => (
            <Flex
              gap={6}
              alignItems="center"
              css={{
                backgroundColor: '$highlight100',
                padding: '$4'
              }}
            >
              {children}
            </Flex>
          ),
          Step: ({
            children,
            active,
            completed,
            position
          }) => (
            <Button
              // eslint-disable-next-line no-nested-ternary
              color={active ? 'primary' : completed ? 'error' : 'default'}
              onChange={() => setActiveStep(position)}
            >
              {children}
            </Button>
          )
        }}
      >
        <StepperItem
          label="Step 1"
          allowClick
          css={{
            padding: '$4'
          }}
        >
          Steps 1
        </StepperItem>
        <StepperItem
          label="Step 2"
          css={{
            padding: '$4'
          }}
        >
          Step 2
        </StepperItem>
        <StepperItem
          label="Step 3"
          css={{
            padding: '$4'
          }}
        >
          Step 3
        </StepperItem>
      </Stepper>
      <Flex
        alignItems="center"
        gap="$4"
      >
        <Button onClick={prevStep} variant="outline">
          Previous
        </Button>
        <Button onClick={nextStep} variant="outline">
          Next
        </Button>
      </Flex>
    </>
  );
};
export const Default = Template.bind({});
export const Custom = App.bind({});
