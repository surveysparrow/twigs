import React from 'react';
import { render } from '@testing-library/react';
import { FormLabel } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Form Label', () => {
  it('renders without crashing', () => {
    render(<FormLabel>FormLabel</FormLabel>);
  });

  it('renders Form Label correctly', () => {
    const { getByTestId } = render(
      <FormLabel>Simple FormLabel</FormLabel>
    );
    const formLabel = getByTestId('form-label');

    expect(formLabel).toHaveTextContent('Simple FormLabel');
  });
});
