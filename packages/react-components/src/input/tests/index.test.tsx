import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Input } from '../index';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });
});
