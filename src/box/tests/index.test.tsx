import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Box } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Box', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Box>Box</Box>);
      root.unmount();
    });
  });

  it('renders box correctly', () => {
    const { getByTestId } = render(
      <Box>Simple Box</Box>,
    );
    const button = getByTestId('box');

    expect(button).toHaveTextContent('Simple Box');
  });
});
