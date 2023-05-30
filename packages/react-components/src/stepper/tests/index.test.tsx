import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Stepper, StepperItem } from '../index';

describe('Stepper', () => {
  it('renders without crashing', () => {
    render(
      <Stepper activeStep={0}>
        <StepperItem label="Step 1">Step 1</StepperItem>
        <StepperItem label="Account settings">Step 2</StepperItem>
      </Stepper>
    );
  });

  it('shows the correct tab contents', () => {
    render(
      <Stepper activeStep={1}>
        <StepperItem label="Basic details">Step 1</StepperItem>
        <StepperItem label="Account settings">Step 2</StepperItem>
      </Stepper>
    );

    const content = screen.getByText('Step 2');
    expect(content).toBeInTheDocument();
  });
});
