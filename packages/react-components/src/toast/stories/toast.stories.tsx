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

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <>
      <Toastr duration={10000} />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            icon: <UserCircleIcon />,
            variant: (storyVariant || 'default' as any),
            title: messages[variant!] || 'Default message',
            description: 'There was a problem with your request.',
            action: <ToastAction altText="Try again" asChild><Button color="light"> Close </Button></ToastAction>
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
};

const ToastrPromise = () => {
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

  return (
    <>
      <Toastr duration={10000} />
      <Button
        variant="outline"
        onClick={() => {
          toast.promise(promise(), {
            loading: {
              title: 'Creating, please wait...',
              icon: <CircleLoader size="xl" />
            },
            success: (p) => ({
              title: `${p.data} saved successfully`,
              variant: 'success',
              action: (
                <ToastAction altText="Try again" asChild>
                  <Button color="light"> Close </Button>
                </ToastAction>
              )
            }),
            error: ({ data }) => ({
              title: `Error while creating record: ${data}`,
              variant: 'error',
              action: (
                <ToastAction altText="Try again" asChild>
                  <Button color="light"> Close </Button>
                </ToastAction>
              )
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
export const ToastWithPromise = ToastrPromise.bind({});
