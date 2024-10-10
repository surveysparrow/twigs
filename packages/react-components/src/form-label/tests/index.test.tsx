import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormLabel } from '../index';
import { Text } from '../../text';
import 'jest';
import '@testing-library/jest-dom';

describe('Form Label', () => {
  it('renders without crashing', () => {
    render(<FormLabel>FormLabel</FormLabel>);
  });
  it('prints label with required indicator', () => {
    render(<FormLabel requiredIndicator>FormLabel</FormLabel>);
    const requiredIndicatorNode = screen.getByTestId(
      'label-required-indicator'
    );
    expect(requiredIndicatorNode).toBeInTheDocument();
  });
  it('prints label with required custom indicator', () => {
    render(
      <FormLabel
        requiredIndicator={
          <Text data-testid="label-required-custom-indicator">(required)</Text>
        }
      >
        FormLabel
      </FormLabel>
    );
    const requiredIndicatorNode = screen.getByTestId(
      'label-required-custom-indicator'
    );
    expect(requiredIndicatorNode).toBeInTheDocument();
  });
});
