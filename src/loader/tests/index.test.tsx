import React from 'react';
import { render } from '@testing-library/react';
import { DotLoader } from '../index';
import 'jest';
import '@testing-library/jest-dom';

describe('Box', () => {
  it('renders without crashing', () => {
    render(<DotLoader />);
  });
});
