import { ReactNode, isValidElement } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle
} from '../../alert-dialog';
import { Button, ButtonProps } from '../../button';

export type DefaultAlertDialogProps = {
  title: ReactNode;
  content: ReactNode;
  labels?: {
    action?: ReactNode;
  };
  actionButtonProps?: ButtonProps;
  onAction?: () => void;
  onClose?: () => void;
};

export const DefaultAlertDialog = ({
  title,
  content,
  labels = {
    action: 'Close'
  },
  actionButtonProps,
  onAction,
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
        <AlertDialogDescription>{content}</AlertDialogDescription>
        <AlertDialogActions
          css={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <AlertDialogAction asChild>
            {isValidElement(labels.action) ? (
              labels.action
            ) : (
              <Button
                color="default"
                size="lg"
                onClick={onAction}
                {...actionButtonProps}
              >
                {labels.action}
              </Button>
            )}
          </AlertDialogAction>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};
