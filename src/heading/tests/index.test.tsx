import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Heading } from '../index';

describe('Heading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Heading>Heading</Heading>);
      root.unmount();
    });
  });

  it('renders Heading correctly', () => {
    const { getByTestId } = render(
      <Heading>Simple Heading</Heading>,
    );
    const heading = getByTestId('heading');

    expect(heading).toHaveTextContent('Simple Heading');
  });
});
