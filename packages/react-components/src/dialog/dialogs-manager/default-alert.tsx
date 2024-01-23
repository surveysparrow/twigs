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

export type DefaultAlertDialogProps = {
  title: ReactNode;
  content: ReactNode;
  labels?: {
    action?: ReactNode;
  };
  actionButtonProps?: ButtonProps;
  closeButton?: ReactNode;
  onPrimaryAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
};

export const DefaultAlertDialog = ({
  title,
  content,
  labels = {
    action: 'Close'
  },
  actionButtonProps,
  closeButton = DefaultCloseButton,
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
          <AlertDialogAction asChild>
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
          </AlertDialogAction>
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
