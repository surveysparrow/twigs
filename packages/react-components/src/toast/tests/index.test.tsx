import React, { useEffect, useState, useRef } from 'react';
import {
  render, screen, fireEvent, waitFor
} from '@testing-library/react';
import 'jest';
import '@testing-library/jest-dom';
import { Button } from '../../button';
import { Box } from '../../box';
import { Flex } from '../../flex';
import {
  ToastProvider,
  Toast,
  ToastDescription,
  ToastAction,
  ToastContent
} from '../toast';

const Component = () => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<any>('success');
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <ToastProvider position="bottom-center">
      <Flex css={{ gap: '$3' }}>
        <Button
          size="lg"
          onClick={() => {
            setOpen(false);
            setVariant('success');
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Success Toast
        </Button>
      </Flex>

      <Toast open={open} size="md" onOpenChange={setOpen} variant={variant}>
        <ToastContent>
          <ToastDescription>Toast Message description</ToastDescription>
        </ToastContent>
        <ToastAction asChild altText="Goto schedule to undo">
          <Box>
            <Button variant="primary" isText size="md">
              Ok
            </Button>
            <Button variant="accent" isText isTransparent size="md">
              Cancel
            </Button>
          </Box>
        </ToastAction>
      </Toast>
    </ToastProvider>
  );
};

test('renders toast on click of button', async () => {
  render(
    <Component />
  );
  const button = screen.getByRole('button');
  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText('Toast Message description')).toBeInTheDocument();
  });
});
