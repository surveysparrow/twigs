import { TickIcon } from '@sparrowengg/twigs-react-icons';
import React, { forwardRef, FunctionComponent, useId } from 'react';
import { styled } from '../stitches.config';
import { Box, BoxProps } from '../box';
import { Separator as DefaultSeparator } from './stepper-separator';
import * as DefaultStepperTrigger from './stepper-trigger';

export type StepperProps = {
  activeStep: number,
  children: React.ReactElement[],
  // eslint-disable-next-line no-unused-vars
  onChange?: (step: number) => void,
  components?: {
    TriggerSeparator?: React.ComponentType
    TriggerContainer?: React.ComponentType<{ children: React.ReactNode }>,
    TriggerButton?: React.ComponentType<{ children: React.ReactNode, active?: boolean, completed?: boolean }>,
  }
} & BoxProps;

const StyledStepper = styled('div', {});

type StepperItemProps = {
  children: React.ReactNode,
  label: string,
  allowClick?: boolean
} & BoxProps;

const StepperItem = ({
  children,
  label,
  allowClick,
  ...props
}: StepperItemProps) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
};

const Stepper: FunctionComponent<StepperProps> = forwardRef(({
  activeStep = 0,
  onChange,
  children,
  components = {}
}: StepperProps, ref) => {
  const step = children[activeStep];
  const stepperId = useId();

  if (!step) {
    throw new Error('Invalid active step');
  }

  const Separator = components.TriggerSeparator || DefaultSeparator;
  const TriggerContainer = components.TriggerContainer || DefaultStepperTrigger.StepperTriggerContainer;
  const TriggerButton = components.TriggerButton || DefaultStepperTrigger.StepperTrigger;

  return (
    <StyledStepper ref={ref}>
      <TriggerContainer>
        {
          children.map((child: React.ReactElement, index: number) => {
            const { label, allowClick = true, ...rest } = child.props;
            const showSeparator = index !== children.length - 1;
            const completed = activeStep > index;
            const id = useId();
            return (
              <React.Fragment key={`stepper-control-${stepperId}-${id}`}>
                <TriggerButton
                  tabIndex={allowClick ? 0 : -1}
                  active={index === activeStep}
                  completed={completed}
                  type="button"
                  cursor={allowClick ? 'pointer' : 'default'}
                  {...(onChange && allowClick && {
                    onClick: () => onChange(index)
                  })}
                  {...rest}
                >
                  <DefaultStepperTrigger.StepperCount>
                    {
                      completed
                        ? (
                          <TickIcon
                            size={14}
                            color="#fff"
                          />
                        )
                        : index + 1
                    }
                  </DefaultStepperTrigger.StepperCount>
                  <>
                    {label}
                  </>
                </TriggerButton>
                {
                  showSeparator
                    ? <Separator />
                    : null
                }
              </React.Fragment>
            );
          })
        }
      </TriggerContainer>
      <Box>
        {step}
      </Box>
    </StyledStepper>
  );
});

export { Stepper, StepperItem };
