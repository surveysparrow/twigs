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
import { Toastr } from '../toastr';
import { toast } from '../../hooks/use-toast';

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

      <Toast open={open} onOpenChange={setOpen} variant={variant}>
        <ToastContent>
          <ToastDescription>Toast Message description</ToastDescription>
        </ToastContent>
        <ToastAction asChild altText="Goto schedule to undo">
          <Box>
            <Button color="primary" size="md">
              Ok
            </Button>
            <Button color="bright" size="md">
              Cancel
            </Button>
          </Box>
        </ToastAction>
      </Toast>
    </ToastProvider>
  );
};

const ToastrPromise = ({ variant, isError }: { variant?:string, isError?:boolean }) => {
  const ResolvePromise = () => new Promise<{ title: string, description: string }>((resolve) => {
    setTimeout(() => {
      resolve({ title: 'Success!', description: 'Record created successfully' });
    }, 1000);
  });

  const RejectPromise = () => new Promise<{ title: string, description: string }>((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ title: 'Something went wrong' });
    }, 1000);
  });

  return (
    <ToastProvider position="bottom-center">
      <Toastr duration={5000} />
      <Flex css={{ gap: '$3' }}>
        <Button
          size="lg"
          onClick={() => {
            toast.promise(isError ? RejectPromise() : ResolvePromise(), {
              loading: {
                title: 'Loading...',
                variant: 'loading'
              },
              success: (p) => ({
                title: `${p.title}`,
                variant: (variant || 'default' as any),
                description: `${p.description}`,
                action: (
                  <ToastAction altText="Try again" asChild>
                    <Button color="light"> Close </Button>
                  </ToastAction>
                )
              }),
              error: (p) => ({
                title: `Error while creating record: ${p.title}`,
                variant: (variant || 'error' as any),
                action: (
                  <ToastAction altText="Try again" asChild>
                    <Button color="light"> Close </Button>
                  </ToastAction>
                )
              })
            });
          }}
        >
          {variant || 'default'}
        </Button>
      </Flex>
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

test('renders success toast on success variant', async () => {
  render(<ToastrPromise variant="success" />);
  const successButton = screen.getByText('success');
  fireEvent.click(successButton);
  const creatingElement = await screen.findByText('Loading...');
  expect(creatingElement).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Record created successfully')).toBeInTheDocument();
  });
});

test('renders error toast on error variant', async () => {
  render(<ToastrPromise variant="error" isError />);
  const errorButton = screen.getByText('error');
  fireEvent.click(errorButton);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Error while creating record: Something went wrong')).toBeInTheDocument();
  });
});

test('renders default toast if variant is not provided', async () => {
  render(<ToastrPromise />);
  const defaultButton = screen.getByText('default');
  fireEvent.click(defaultButton);
  const creatingElement = await screen.findByText('Loading...');
  expect(creatingElement).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Record created successfully')).toBeInTheDocument();
  });
});
