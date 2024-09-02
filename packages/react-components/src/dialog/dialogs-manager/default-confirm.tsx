import React, { ReactNode, isValidElement } from 'react';
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
import { config } from '@src/stitches.config';
import { CSS } from '@stitches/react';
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
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  css?: CSS<typeof config>;
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
  closeOnCancel = true,
  closeOnConfirm = true,
  closeButton = DefaultCloseButton,
  css,
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
      <AlertDialogContent css={{ ...css }}>
        <AlertDialogTitle
          css={{
            paddingRight: 'calc($20 + $12 + $6)',
            position: 'relative'
          }}
        >
          {title}
          {closeButton && (
            <Box
              css={{
                position: 'absolute',
                top: '50%',
                right: '$12',
                transform: 'translate(0,-50%)'
              }}
            >
              {closeButton}
            </Box>
          )}
        </AlertDialogTitle>
        <AlertDialogDescription>{content}</AlertDialogDescription>
        <AlertDialogActions
          css={{
            gap: '$6'
          }}
        >
          {labels.cancel && (
            <CancelButtonWrapper closeOnCancel={closeOnCancel}>
              {isValidElement(labels.cancel) ? (
                labels.cancel
              ) : (
                <Button
                  color="default"
                  size="xl"
                  onClick={onCancel}
                  {...cancelButtonProps}
                >
                  {labels.cancel}
                </Button>
              )}
            </CancelButtonWrapper>
          )}
          {labels.confirm && (
            <ConfirmButtonWrapper closeOnConfirm={closeOnConfirm}>
              {isValidElement(labels.confirm) ? (
                labels.confirm
              ) : (
                <Button
                  color="default"
                  size="xl"
                  onClick={onConfirm}
                  {...confirmButtonProps}
                >
                  {labels.confirm}
                </Button>
              )}
            </ConfirmButtonWrapper>
          )}
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const CancelButtonWrapper = ({
  children,
  closeOnCancel
}: {
  children: ReactNode;
  closeOnCancel: boolean;
}) => {
  if (closeOnCancel) {
    return <AlertDialogCancel asChild>{children}</AlertDialogCancel>;
  }

  return <>{children}</>;
};

const ConfirmButtonWrapper = ({
  children,
  closeOnConfirm
}: {
  children: ReactNode;
  closeOnConfirm: boolean;
}) => {
  if (closeOnConfirm) {
    return <AlertDialogAction asChild>{children}</AlertDialogAction>;
  }

  return <>{children}</>;
};

const DefaultCloseButton = (
  <AlertDialogCancel asChild>
    <IconButton
      icon={<CloseIcon />}
      size="lg"
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
