import { ReactNode, isValidElement } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle
} from '../../alert-dialog';
import { Button } from '../../button';

export type DefaultConfirmDialogProps = {
  title: ReactNode;
  children: ReactNode;
  labels?: {
    confirm?: ReactNode;
    cancel?: ReactNode;
  };
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

export const DefaultConfirmDialog = ({
  title,
  children,
  labels = {
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  onConfirm,
  onCancel,
  onClose
}: DefaultConfirmDialogProps) => {
  return (
    <AlertDialog
      defaultOpen
      onOpenChange={(open) => {
        if (!open) {
          onClose?.();
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{children}</AlertDialogDescription>
        <AlertDialogActions>
          {labels.cancel && (
            <AlertDialogCancel asChild>
              {isValidElement(labels.cancel) ? (
                labels.cancel
              ) : (
                <Button color="default" size="lg" onClick={onCancel}>
                  {labels.cancel}
                </Button>
              )}
            </AlertDialogCancel>
          )}
          {labels.confirm && (
            <AlertDialogAction asChild>
              {isValidElement(labels.confirm) ? (
                labels.confirm
              ) : (
                <Button color="default" size="lg" onClick={onConfirm}>
                  {labels.confirm}
                </Button>
              )}
            </AlertDialogAction>
          )}
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};
