import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { FormLabel } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Form Label', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<FormLabel>FormLabel</FormLabel>);
      root.unmount();
    });
  });

  it('renders Form Label correctly', () => {
    const { getByTestId } = render(
      <FormLabel>Simple FormLabel</FormLabel>,
    );
    const formLabel = getByTestId('form-label');

    expect(formLabel).toHaveTextContent('Simple FormLabel');
  });
});
