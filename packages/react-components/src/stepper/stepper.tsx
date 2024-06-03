import React, {
  forwardRef, FunctionComponent, useId, useMemo
} from 'react';
import { styled } from '../stitches.config';
import { Box, BoxProps } from '../box';
import { Separator as DefaultSeparator } from './separator';
import * as DefaultStep from './step';

export type StepperProps = {
  activeStep: number;
  children: React.ReactElement[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (step: number) => void;
  components?: {
    Separator?: React.ComponentType;
    Container?: React.ComponentType<{ children: React.ReactNode }>;
    Step?: React.ComponentType<{
      children: React.ReactNode;
      active?: boolean;
      completed?: boolean;
      position: number;
    }>;
  };
} & BoxProps;

const StyledStepper = styled('div', {});

type StepperItemProps = {
  children: React.ReactNode;
  label: string;
  allowClick?: boolean;
} & BoxProps;

const StepperItem = ({
  children,
  label,
  allowClick,
  ...props
}: StepperItemProps) => {
  return <Box {...props}>{children}</Box>;
};

const Stepper: FunctionComponent<StepperProps> = forwardRef(
  (
    {
      activeStep = 0, onChange, children, components = {}
    }: StepperProps,
    ref
  ) => {
    const childrenArray = useMemo(() => {
      const ids = new Set();

      const childrenWithIds: { id: string; child: React.ReactElement }[] = [];

      React.Children.toArray(children).forEach((_child, index) => {
        const child = _child as React.ReactElement;
        if (child?.type !== StepperItem) {
          // eslint-disable-next-line no-console
          console.warn('Stepper only accepts StepperItem as children');
          return;
        }
        let id = (child.props.label || '').toLowerCase().replace(/\s/g, '-');
        if (ids.has(id)) {
          id = `${id}-${index}`;
          ids.add(id);
        }

        childrenWithIds.push({
          id,
          child
        });
      });

      return childrenWithIds;
    }, [children]);

    const step = childrenArray[activeStep]?.child;
    const stepperId = useId();

    if (!step) {
      throw new Error('Invalid active step');
    }

    const Separator = components.Separator || DefaultSeparator;
    const TriggerContainer = components.Container || DefaultStep.Container;
    const Step = components.Step || DefaultStep.Step;
    const hasCustomStep = components.Step !== undefined;

    return (
      <StyledStepper ref={ref}>
        <TriggerContainer>
          {childrenArray.map((item, index: number) => {
            const childComponent = item.child;
            const { label, allowClick = true, ...rest } = childComponent.props;
            const showSeparator = index !== children.length - 1;
            const completed = activeStep > index;

            return (
              <React.Fragment key={`stepper-control-${stepperId}-${item.id}`}>
                <Step
                  tabIndex={allowClick ? 0 : -1}
                  position={index}
                  active={index === activeStep}
                  completed={completed}
                  type="button"
                  cursor={allowClick ? 'pointer' : 'default'}
                  {...(onChange
                    && allowClick && {
                    onClick: () => onChange(index)
                  })}
                  {...rest}
                >
                  {!hasCustomStep && (
                    <DefaultStep.StepperCount
                      completed={completed}
                      label={index + 1}
                    />
                  )}
                  {label}
                </Step>
                {showSeparator ? <Separator /> : null}
              </React.Fragment>
            );
          })}
        </TriggerContainer>
        <Box>{step}</Box>
      </StyledStepper>
    );
  }
);

export { Stepper, StepperItem };
