import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Chip } from '../index';

describe('Chip', () => {
  it('renders without crashing', () => {
    render(<Chip color="info" size="md">Chip Content</Chip>);
  });
});

it('renders close button based on prop', () => {
  const { getByTestId } = render(
    <Chip color="info" size="md" closable>
      Chip with close button
    </Chip>
  );
  const button = getByTestId('button');
  const chip = getByTestId('chip');
  expect(chip).toContainElement(button);
});
