import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Text } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Text>Text</Text>);
      root.unmount();
    });
  });

  it('renders text correctly', () => {
    const { getByTestId } = render(
      <Text>Simple Text</Text>,
    );
    const text = getByTestId('text');

    expect(text).toHaveTextContent('Simple Text');
  });
});
