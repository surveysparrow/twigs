import { FunctionComponent } from 'react';
import {
  Toast,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastProviderProps,
  ToastTitle
} from './toast';
import { useToast } from '../hooks/use-toast';

export const Toastr: FunctionComponent<ToastProviderProps & { maxToasts?: number }> = ({
  duration,
  swipeDirection,
  swipeThreshold,
  maxToasts,
  ...rest
}) => {
  const { toasts } = useToast({
    maxToasts
  });

  return (
    <ToastProvider
      duration={duration}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
      {...rest}
    >
      {toasts.map(({
        id, title, description, action, position, ...props
      }) => {
        return (
          <Toast key={id} position={position} {...props}>
            <>
              <ToastContent>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </ToastContent>
              {action}
            </>
          </Toast>
        );
      })}
    </ToastProvider>
  );
};
