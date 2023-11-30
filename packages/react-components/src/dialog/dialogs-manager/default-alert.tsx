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
  closeOnPrimaryAction?: boolean;
  onPrimaryAction?: () => void;
  onClose?: () => void;
};

export const DefaultAlertDialog = ({
  title,
  content,
  labels = {
    action: 'Close'
  },
  closeOnPrimaryAction = true,
  actionButtonProps,
  onPrimaryAction,
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
          <ActionButtonWrapper useActionWrapper={closeOnPrimaryAction}>
            {isValidElement(labels.action) ? (
              labels.action
            ) : (
              <Button
                color="default"
                size="lg"
                onClick={onPrimaryAction}
                {...actionButtonProps}
              >
                {labels.action}
              </Button>
            )}
          </ActionButtonWrapper>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ActionButtonWrapper = ({
  useActionWrapper,
  children
}: {
  useActionWrapper?: boolean;
  children?: ReactNode;
}) => {
  if (useActionWrapper) {
    return <AlertDialogAction asChild>{children}</AlertDialogAction>;
  }

  return <>{children}</>;
};
