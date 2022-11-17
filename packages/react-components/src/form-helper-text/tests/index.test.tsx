import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { FormHelperText } from '../index';

describe('Form Helper Text', () => {
  it('renders without crashing', () => {
    render(<FormHelperText>Form helper text</FormHelperText>);
  });

  it('renders Form helper text correctly', () => {
    const { getByTestId } = render(
      <FormHelperText>Simple form helper text</FormHelperText>
    );
    const formHelperText = getByTestId('helper-text');

    expect(formHelperText).toHaveTextContent('Simple form helper text');
  });
});
