import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { render } from '@testing-library/react';
import { Flex } from '../index';

describe('Flex', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    root.render(<Flex>Flex</Flex>);
    root.unmount();
  });

  it('renders flex correctly', () => {
    const { getByTestId } = render(
      <Flex>Simple Flex</Flex>,
    );
    const flex = getByTestId('flex');

    expect(flex).toHaveTextContent('Simple Flex');
  });
});
