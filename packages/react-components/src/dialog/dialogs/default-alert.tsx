import { ReactNode, isValidElement } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle
} from '../../alert-dialog';
import { Button } from '../../button';

export type DefaultAlertDialogProps = {
  title: ReactNode;
  children: ReactNode;
  labels?: {
    confirm?: ReactNode;
  };
  onConfirm?: () => void;
  onClose?: () => void;
};

export const DefaultAlertDialog = ({
  title,
  children,
  labels = {
    confirm: 'Close'
  },
  onConfirm,
  onClose
}: DefaultAlertDialogProps) => {
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
          <AlertDialogAction asChild>
            {isValidElement(labels.confirm) ? (
              labels.confirm
            ) : (
              <Button color="default" size="lg" onClick={onConfirm}>
                {labels.confirm}
              </Button>
            )}
          </AlertDialogAction>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};
