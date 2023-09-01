import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Box } from '../../box';
import { ThemeProvider } from '../index';

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={{}}>
      <Box />
    </ThemeProvider>
  );
});
