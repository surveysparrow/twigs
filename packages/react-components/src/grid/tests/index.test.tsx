import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Grid } from '../index';

describe('Grid', () => {
  it('renders without crashing', () => {
    render(<Grid templateColumns="1fr 1fr 1fr" />);
  });

  it('renders with width prop', () => {
    render(<Grid width={350} templateColumns="1fr 1fr 1fr" />);
  });
});
