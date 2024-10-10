import React from 'react';
import {
  render, screen, fireEvent, waitFor
} from '@testing-library/react';
import 'jest';
import '@testing-library/jest-dom';
import { Button } from '../../button';
import { Flex } from '../../flex';
import { TooltipProvider, Tooltip } from '../tooltip';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

const Component = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <Flex
        css={{
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Tooltip open side="top" align="end" content="Tooltip content">
          <Button color="default" size="lg">
            tooltip button
          </Button>
        </Tooltip>
      </Flex>
    </TooltipProvider>
  );
};

test('renders tooltip on hover of button', async () => {
  render(<Component />);
  const button = screen.getByRole('button');
  fireEvent.mouseOver(button);
  await waitFor(() => {
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});
