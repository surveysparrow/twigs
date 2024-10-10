import React from 'react';
import { render } from '@testing-library/react';
import { Text } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Text', () => {
  it('renders without crashing', () => {
    render(<Text>Text</Text>);
  });

  it('renders text correctly', () => {
    const { getByTestId } = render(<Text>Simple Text</Text>);
    const text = getByTestId('text');

    expect(text).toHaveTextContent('Simple Text');
  });
});
