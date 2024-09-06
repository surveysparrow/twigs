import React from 'react';
import { render } from '@testing-library/react';
import { Link } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Link', () => {
  it('renders without crashing', () => {
    render(<Link href="/">Link</Link>);
  });

  it('renders Link correctly', () => {
    const { getByTestId } = render(<Link href="/">Simple Link</Link>);
    const link = getByTestId('link');
    expect(link).toHaveTextContent('Simple Link');
  });

  it('renders Link with asChild prop', () => {
    const { getByTestId } = render(
      <Link asChild href="!#">
        <div title="Not Link">Simple Link</div>
      </Link>
    );
    const link = getByTestId('link');
    expect(link.tagName).toBe('DIV');
    expect(link).toHaveAttribute('title', 'Not Link');
  });
});

describe('given a link with href prop', () => {
  it('should have the correct href value', () => {
    const { getByTestId } = render(<Link href="test">Simple Link</Link>);
    const link = getByTestId('link');
    expect(link).toHaveAttribute('href', 'test');
  });
});
