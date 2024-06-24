import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Separator } from '../index';

describe('Separator', () => {
  it('renders without crashing', () => {
    render(<Separator orientation="horizontal" />);
  });

  it('renders with vertical orientation', () => {
    render(<Separator orientation="vertical" />);
  });
});
