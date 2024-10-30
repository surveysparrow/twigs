import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Heading } from '../index';

describe('Heading', () => {
  it('renders without crashing', () => {
    render(<Heading>Heading</Heading>);
  });

  it('renders Heading correctly', () => {
    const { getByTestId } = render(<Heading>Simple Heading</Heading>);
    const heading = getByTestId('heading');

    expect(heading).toHaveTextContent('Simple Heading');
  });
});
