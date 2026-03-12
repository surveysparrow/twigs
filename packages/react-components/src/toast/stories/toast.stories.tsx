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
                showCloseButton: true
              }),
              error: (p) => ({
                title: `Error while creating record: ${p.title}`,
                variant: storyVariant || ('error' as any),
                showCloseButton: true
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
                showCloseButton: true
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

const ToastVariants = ({
  variant,
  maxToasts
}: ToastProps & ToastProviderProps & { maxToasts: number }) => {
  const [maxToastsState, setMaxToastsState] = useState<number>(maxToasts);

  useEffect(() => {
    setMaxToastsState(maxToasts);
  }, [maxToasts]);

  return (
    <>
      <Toastr duration={Infinity} maxToasts={maxToastsState} />
      <Flex gap="$3">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: 'default',
              title: 'Default message',
              showCloseButton: true
            });
          }}
        >
          Toast with Default variant
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: 'success',
              title: 'Success message',
              showCloseButton: true
            });
          }}
        >
          Toast with Success variant
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: 'warning',
              title: 'Warning message',
              showCloseButton: true
            });
          }}
        >
          Toast with Warning variant
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: 'error',
              title: 'Error message',
              showCloseButton: true
            });
          }}
        >
          Toast with Error variant
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: variant || ('default' as any),
              title: messages[variant!] || 'Default message',
              description: 'Here is the description',
              showCloseButton: true,
              action: (
                <ToastAction altText="Undo action" asChild>
                  <Button color="primary">Undo</Button>
                </ToastAction>
              )
            });
          }}
        >
          Toast with Action
        </Button>
      </Flex>
    </>
  );
};

export const Default = Template.bind({});
export const ToastWithPromise = ToastrPromise.bind({});
export const variants = ToastVariants.bind({});
