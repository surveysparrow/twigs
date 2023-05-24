'use client';

import { FunctionComponent } from 'react';
import {
  Toast,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastProviderProps,
  ToastTitle,
  ToastViewport
} from './toast';
import { useToast } from '../hooks/use-toast';

export const Toastr: FunctionComponent<ToastProviderProps> = ({
  duration,
  swipeDirection,
  swipeThreshold,
  ...rest
}) => {
  const { toasts } = useToast();

  return (
    <ToastProvider
      duration={duration}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
      {...rest}
    >
      {toasts.map(({
        id, title, description, action, ...props
      }) => {
        return (
          <Toast key={id} {...props}>
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
      <ToastViewport />
    </ToastProvider>
  );
};
