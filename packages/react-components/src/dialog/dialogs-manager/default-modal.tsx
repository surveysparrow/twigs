import React, { ReactNode } from 'react';
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRootProps,
  DialogTitle
} from '../dialog';
import { Button, IconButton } from '../../button';
import { Flex } from '../../flex';
import { Box } from '../../box';
import { prefixClassName } from '../../utils';

export type DefaultInfoDialogProps = {
  title?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  size?: DialogRootProps['size'];
  labels?: {
    action?: string;
  };
  closeButton?: ReactNode;
  onPrimaryAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
};

export const DefaultModal = ({
  size,
  title,
  content,
  footer,
  children,
  labels = {
    action: 'Close'
  },
  closeButton = DefaultCloseButton,
  onClose,
  onPrimaryAction
}: DefaultInfoDialogProps) => {
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) onClose?.();
      }}
      size={size}
      defaultOpen
    >
      <DialogContent>
        {children ?? (
          <>
            <DialogTitle
              css={{
                paddingRight: '$16'
              }}
            >
              {title}
            </DialogTitle>
            <DialogDescription
              css={{
                paddingTop: '$6',
                paddingBottom: '$6'
              }}
            >
              {content}
            </DialogDescription>
            {footer ?? (
              <Flex
                css={{
                  justifyContent: 'flex-end'
                }}
              >
                <DialogClose asChild>
                  <Button size="lg" color="default" onClick={onPrimaryAction}>
                    {labels?.action}
                  </Button>
                </DialogClose>
              </Flex>
            )}
            {closeButton && (
              <Box css={{ position: 'absolute', top: '$6', right: '$6' }}>
                {closeButton}
              </Box>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const DefaultCloseButton = (
  <DialogClose asChild>
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
  </DialogClose>
);
