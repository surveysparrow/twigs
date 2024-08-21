import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Stack } from '../index';

describe('Stack', () => {
  it('renders without crashing', () => {
    render(<Stack> Stack</Stack>);
  });

  it('renders with direction prop', () => {
    render(<Stack direction="row"> Simple Stack </Stack>);
  });
});
