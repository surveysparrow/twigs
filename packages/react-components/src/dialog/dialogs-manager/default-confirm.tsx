import { ReactNode, isValidElement } from 'react';
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle
} from '../../alert-dialog';
import { Button, ButtonProps, IconButton } from '../../button';
import { Box } from '../../box';
import { prefixClassName } from '../../utils';

export type DefaultConfirmDialogProps = {
  title: ReactNode;
  content: ReactNode;
  labels?: {
    confirm?: ReactNode;
    cancel?: ReactNode;
  };
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  closeOnConfirm?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

export const DefaultConfirmDialog = ({
  title,
  content,
  labels = {
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  closeOnConfirm = true,
  cancelButtonProps,
  confirmButtonProps,
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
        <AlertDialogTitle css={{
          paddingRight: '$20'
        }}
        >
          {title}
        </AlertDialogTitle>
        <AlertDialogDescription>{content}</AlertDialogDescription>
        <AlertDialogActions>
          {labels.cancel && (
            <AlertDialogCancel asChild>
              {isValidElement(labels.cancel) ? (
                labels.cancel
              ) : (
                <Button
                  color="default"
                  size="lg"
                  onClick={onCancel}
                  {...cancelButtonProps}
                >
                  {labels.cancel}
                </Button>
              )}
            </AlertDialogCancel>
          )}
          {labels.confirm && (
            <ConfirmButtonWrapper useActionWrapper={closeOnConfirm}>
              {isValidElement(labels.confirm) ? (
                labels.confirm
              ) : (
                <Button
                  color="default"
                  size="lg"
                  onClick={onConfirm}
                  {...confirmButtonProps}
                >
                  {labels.confirm}
                </Button>
              )}
            </ConfirmButtonWrapper>
          )}
        </AlertDialogActions>
        <Box css={{ position: 'absolute', top: '$6', right: '$6' }}>
          <AlertDialogCancel asChild>
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close"
              color="bright"
              css={{
                [`& .${prefixClassName('button__icon-container')} > svg`]: {
                  width: '$6',
                  height: '$6'
                }
              }}
            />
          </AlertDialogCancel>
        </Box>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ConfirmButtonWrapper = ({
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
