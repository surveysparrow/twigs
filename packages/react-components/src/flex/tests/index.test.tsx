import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Flex } from '../index';

describe('Flex', () => {
  it('renders without crashing', () => {
    render(<Flex>Flex</Flex>);
  });

  it('renders flex correctly', () => {
    const { getByTestId } = render(<Flex>Simple Flex</Flex>);
    const flex = getByTestId('flex');

    expect(flex).toHaveTextContent('Simple Flex');
  });
});
