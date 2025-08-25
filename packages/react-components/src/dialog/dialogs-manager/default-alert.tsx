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

export type DefaultAlertDialogProps = {
  title: ReactNode;
  content: ReactNode;
  labels?: {
    action?: ReactNode;
  };
  actionButtonProps?: ButtonProps;
  closeButton?: ReactNode;
  css?: CSS<typeof config>;
  onPrimaryAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeOnPrimaryAction?: boolean;
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
  closeOnPrimaryAction = true,
  css,
  onPrimaryAction,
  onClose
} : DefaultAlertDialogProps) => {

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
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <ActionWrapper closeOnPrimaryAction={closeOnPrimaryAction}>
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
          </ActionWrapper>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ActionWrapper = ({
  children,
  closeOnPrimaryAction
}: {
  children: ReactNode;
  closeOnPrimaryAction: boolean;
}) => {
  if (closeOnPrimaryAction) {
    return <AlertDialogAction asChild>{children}</AlertDialogAction>;
  }

  return <>{children}</>;
};

const DefaultCloseButton = (
  <AlertDialogCancel asChild>
    <IconButton
      icon={<CloseIcon />}
      aria-label="Close"
      color="bright"
      size="lg"
      css={{
        [`& .${prefixClassName('button__icon-container')} > svg`]: {
          width: '$6',
          height: '$6'
        }
      }}
    />
  </AlertDialogCancel>
);
