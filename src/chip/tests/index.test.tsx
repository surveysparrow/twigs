import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Chip } from '../index';

describe('Chip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Chip color="info" size="md">Chip Content</Chip>);
      root.unmount();
    });
  });

  it('renders button correctly', () => {
    const { getByTestId } = render(
      <Chip color="info" size="md" showCloseButton>
        Chip with close button
      </Chip>
    );
    const button = getByTestId('button');
    const chip = getByTestId('chip');
    expect(chip).toContainElement(button);
  });
});
