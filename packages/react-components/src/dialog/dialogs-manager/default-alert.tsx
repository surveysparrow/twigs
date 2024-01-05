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
        <AlertDialogTitle
          css={{
            paddingRight: '$20'
          }}
        >
          {title}
        </AlertDialogTitle>
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
