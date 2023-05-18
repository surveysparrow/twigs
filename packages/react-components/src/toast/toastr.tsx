'use client';

import {
  Toast,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from './toast';
import { useToast } from '../hooks/use-toast';

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
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
