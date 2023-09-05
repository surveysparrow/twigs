import React from 'react';
import { render } from '@testing-library/react';
import { CircleLoader, DotLoader, LineLoader } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Dot Loader', () => {
  it('renders without crashing', () => {
    render(<DotLoader />);
  });
});

describe('Circle Loader', () => {
  it('renders without crashing', () => {
    render(<CircleLoader />);
  });
});

describe('Line Loader', () => {
  it('renders without crashing', () => {
    render(<LineLoader />);
  });
});
