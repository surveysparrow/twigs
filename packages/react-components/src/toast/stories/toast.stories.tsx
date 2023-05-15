import React, { useState, useEffect, useRef } from 'react';
import { ComponentStory } from '@storybook/react';
import { ToastProviderProps } from '@radix-ui/react-toast';
import { Button } from '../../button';
import { Box } from '../../box';
import {
  ToastProvider, Toast, ToastDescription, ToastAction, ToastContent, ToastTitle, ToastProps
} from '../toast';

export default {
  component: Toast,
  title: 'Toast',
  argTypes: {
    duration: {
      control: 'number',
      defaultValue: 5000
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
      defaultValue: 'success'
    }
  }
};

const Template: ComponentStory<typeof Toast> = (
  { duration, variant: storyVariant, ...args }: ToastProps & ToastProviderProps
) => {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<typeof storyVariant>(storyVariant);
  const timerRef = useRef(0);

  const messages = {
    success: 'Record saved successfully',
    error: 'Something went wrong',
    warning: 'Please check the form',
    default: 'Default message'
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <ToastProvider position="bottom-center" duration={1000}>
      <Button
        size="lg"
        onClick={() => {
          setOpen(false);
          setVariant(storyVariant);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Trigger
        {' '}
        {variant}
        {' '}
        toast
      </Button>

      <Toast
        open={open}
        onOpenChange={setOpen}
        {...args}
        variant={variant}
      >
        <ToastContent>
          <ToastTitle>
            {' '}
            <>
              {messages[variant]}
              {' '}
            </>
          </ToastTitle>
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
