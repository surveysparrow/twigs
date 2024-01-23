import React, { ReactNode, isValidElement } from 'react';
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
  closeButton?: ReactNode;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
};

export const DefaultConfirmDialog = ({
  title,
  content,
  labels = {
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  cancelButtonProps,
  confirmButtonProps,
  closeButton = DefaultCloseButton,
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
        <AlertDialogTitle
          css={{
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
            <AlertDialogAction asChild>
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
            </AlertDialogAction>
          )}
        </AlertDialogActions>
        {closeButton && (
          <Box css={{ position: 'absolute', top: '$6', right: '$6' }}>
            {closeButton}
          </Box>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

const DefaultCloseButton = (
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
);
