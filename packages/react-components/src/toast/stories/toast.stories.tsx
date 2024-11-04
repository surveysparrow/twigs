import { useState, useEffect, useRef } from 'react';
import { AlertFillIcon } from '@sparrowengg/twigs-react-icons';
import { ToastProviderProps } from '@radix-ui/react-toast';
import { Button } from '../../button';
import { Flex } from '../../flex';
import { Toast, ToastAction, ToastProps } from '../toast';
import { toast } from '../../hooks/use-toast';
import { Toastr } from '../toastr';

export default {
  component: Toast,
  title: 'Feedback/Toast',
  argTypes: {
    duration: {
      control: 'number',
      defaultValue: Infinity
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
      defaultValue: 'success'
    },
    maxToasts: {
      control: 'number',
      defaultValue: 3
    }
  }
};

const messages = {
  default: 'Default message',
  success: 'Success message',
  error: 'Error message',
  warning: 'Warning message'
};

const Template = ({
  variant,
  maxToasts
}: ToastProps & ToastProviderProps & { maxToasts: number }) => {
  const [maxToastsState, setMaxToastsState] = useState<number>(maxToasts);
  const timerRef = useRef(0);

  useEffect(() => {
    setMaxToastsState(maxToasts);
  }, [maxToasts]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return (
    <>
      <Toastr duration={Infinity} maxToasts={maxToastsState} />
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: variant || ('default' as any),
            title: messages[variant!] || 'Default message'
          });
        }}
      >
        Show Toast
      </Button>
    </>
  );
};

const ToastrPromise = ({ variant: storyVariant }: { variant: string }) => {
  const ResolvePromise = () => new Promise<{ title: string; description: string }>((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Success!',
        description: 'Record created successfully'
      });
    }, 2000);
  });

  const RejectPromise = () => new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        data: 'Something went wrong'
      });
    }, 2000);
  });

  return (
    <>
      <Toastr duration={10000} />
      <Flex gap="$3">
        <Button
          variant="outline"
          onClick={() => {
            toast.promise(ResolvePromise(), {
              loading: {
                title: 'Creating, please wait...',
                variant: 'loading'
              },
              success: (p) => ({
                title: `${p.title}`,
                variant: storyVariant || ('default' as any),
                description: `${p.description}`,
                action: (
                  <ToastAction altText="Try again" asChild>
                    <Button color="light"> Close </Button>
                  </ToastAction>
                )
              }),
              error: (p) => ({
                title: `Error while creating record: ${p.title}`,
                variant: storyVariant || ('error' as any),
                action: (
                  <ToastAction altText="Try again" asChild>
                    <Button color="light"> Close </Button>
                  </ToastAction>
                )
              })
            });
          }}
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.promise(RejectPromise(), {
              loading: {
                title: 'Creating, please wait...',
                variant: 'loading'
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
                variant: storyVariant || ('error' as any),
                icon: <AlertFillIcon />,
                action: (
                  <ToastAction altText="Try again" asChild>
                    <Button color="light"> Close </Button>
                  </ToastAction>
                )
              })
            });
          }}
        >
          Error
        </Button>
      </Flex>
    </>
  );
};

export const Default = Template.bind({});
export const ToastWithPromise = ToastrPromise.bind({});
