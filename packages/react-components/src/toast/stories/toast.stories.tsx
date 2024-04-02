import React, { useState, useEffect, useRef } from 'react';
import { UserCircleIcon } from '@sparrowengg/twigs-react-icons';
import { ToastProviderProps } from '@radix-ui/react-toast';
import { Button } from '../../button';
import {
  Toast, ToastAction, ToastProps
} from '../toast';
import { toast } from '../../hooks/use-toast';
import { Toastr } from '../toastr';

export default {
  component: Toast,
  title: 'Feedback/Toast',
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

const Template = (
  { variant: storyVariant }: ToastProps & ToastProviderProps
) => {
  const [variant, setVariant] = useState<typeof storyVariant>(storyVariant);
  const timerRef = useRef(0);

  useEffect(() => {
    setVariant(storyVariant);
  }, [storyVariant]);

  const messages = {
    success: 'Record saved successfully',
    error: 'Something went wrong',
    warning: 'Please check the form',
    default: 'Default message'
  };
  const promise = () => new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      return Math.random() > 0.5 ? resolve() : reject();
    }, 1000);
  });

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <>
      <Toastr duration={10000} />
      <Button
        variant="outline"
        onClick={() => {
          toast.promise(promise(), {
            warning: { title: 'Saving...', duration: 2000 },
            success: { title: 'Saved', duration: 2000 },
            error: { title: 'Error', duration: 4000 }
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
};
export const Default = Template.bind({});
