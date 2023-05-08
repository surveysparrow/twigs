import React, { useState, useEffect, useRef } from 'react';
import { ComponentStory } from '@storybook/react';
import { ToastProps, ToastProviderProps } from '@radix-ui/react-toast';
import { Button } from '../../button';
import { Box } from '../../box';
import { Flex } from '../../flex';
import {
  ToastProvider, Toast, ToastDescription, ToastAction, ToastContent, ToastTitle
} from '../toast';

export default {
  component: Toast,
  title: 'Toast',
  argTypes: {
    duration: {
      control: 'number',
      defaultValue: 5000
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      defaultValue: 'md'
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
      defaultValue: 'success'
    }
  }
};

const Template: ComponentStory<typeof Toast> = (
  { duration, ...args }: ToastProps & ToastProviderProps
) => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<any>('success');
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <ToastProvider position="bottom-center" duration={10000000}>
      <Flex css={{ gap: '$3' }}>
        <Button
          size="lg"
          onClick={() => {
            setOpen(false);
            setVariant('default');
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Default Toast
        </Button>
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
        <Button
          size="lg"
          onClick={() => {
            setOpen(false);
            setVariant('error');
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Error Toast
        </Button>
        <Button
          size="lg"
          onClick={() => {
            setOpen(false);
            setVariant('warning');
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Warning Toast
        </Button>
      </Flex>

      <Toast
        open={open}
        size="md"
        onOpenChange={setOpen}
        {...args}
        variant={variant}
      >
        <ToastContent>
          <ToastTitle> 10 questions added </ToastTitle>
          <ToastDescription>Optional Text</ToastDescription>
        </ToastContent>
        <ToastAction asChild altText="Goto schedule to undo">
          <Box>
            <Button variant="default" size="md">
              Cancel
            </Button>
            <Button variant="bright" size="md">
              Ok
            </Button>
          </Box>
        </ToastAction>
      </Toast>
    </ToastProvider>
  );
};
export const Default = Template.bind({});
