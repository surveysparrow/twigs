import React, { useState, useEffect, useRef } from 'react';
import { UserCircleIcon } from '@sparrowengg/twigs-react-icons';
import { ToastProviderProps } from '@radix-ui/react-toast';
import { Button } from '../../button';
import {
  Toast, ToastAction, ToastProps
} from '../toast';
import { toast } from '../../hooks/use-toast';
import { Toastr } from '../toastr';
import { CircleLoader } from '../../loader/circle';

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
function handleToast() {
  toast({
    icon: <CircleLoader color="primary" size="lg" />,
    variant: 'default',
    title: 'Please wait',
    description: 'Record is being created'
  });
  setTimeout(() => {
    toast({
      icon: <UserCircleIcon />,
      variant: 'success',
      title: 'Success',
      description: 'Created record'
    });
  }, 1000);
}
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
  const promise = () => new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ data: 'Data from JSON' });
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({
          data: 'Something went wrong'
        });
      }
    }, 2000);
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
            loading: { title: 'Creating, please wait...', duration: Infinity, icon: <CircleLoader size="xl" /> },
            success: (p) => ({
              title: `${p.data} saved successfully`,
              variant: 'success',
              duration: 2000
            }),
            error: ({ data }) => ({
              title: `Error while creating record: ${data}`,
              variant: 'error',
              duration: 2000
            })
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
};
export const Default = Template.bind({});
