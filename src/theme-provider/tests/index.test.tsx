import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Box } from '../../box';
import { ThemeProvider } from '../index';

test('renders without crashing', () => {
  const tree = render(
    <ThemeProvider theme={{}}>
      <Box />
    </ThemeProvider>,
  );
  expect(tree).toMatchSnapshot();
});

test('renders with theme', async () => {
  const result = render(
    <ThemeProvider
      theme={{
        colors: {
          primary: 'tomato',
          background: 'white',
          text: 'black',
        },
      }}
    >
      <Box
        data-testid="test-box"
        css={{
          width: 40, height: 40, background: '$primary', color: '$primary', marginTop: '24px',
        }}
      >
        Hello
      </Box>
    </ThemeProvider>,
  );

  const style = global.getComputedStyle(await result.findByTestId('test-box'));
  expect(style.color).toBe('tomato');
});
