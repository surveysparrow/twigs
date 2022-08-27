import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Link } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Link', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<Link href="/">Link</Link>);
      root.unmount();
    });
  });

  it('renders Link correctly', () => {
    const { getByTestId } = render(
      <Link href="/">Simple Link</Link>,
    );
    const link = getByTestId('link');
    expect(link).toHaveTextContent('Simple Link');
  });
});

describe('given a link with href prop', () => {
  it('should have the correct href value', () => {
    const { getByTestId } = render(
      <Link href="test">Simple Link</Link>,
    );
    const link = getByTestId('link');
    expect(link).toHaveAttribute('href', 'test');
  });
});
