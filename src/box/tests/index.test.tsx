import React from 'react';
import { render } from '@testing-library/react';
import { Box } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box>Box</Box>);
  });

  it('renders box correctly', () => {
    const { getByTestId } = render(
      <Box>Simple Box</Box>
    );
    const box = getByTestId('box');

    expect(box).toHaveTextContent('Simple Box');
  });
});
