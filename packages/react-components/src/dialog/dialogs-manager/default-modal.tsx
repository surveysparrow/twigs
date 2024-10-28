import React, { ReactNode } from 'react';
import { CloseIcon } from '@sparrowengg/twigs-react-icons';
import { config } from '@src/stitches.config';
import { CSS } from '@stitches/react';
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
  css?: CSS<typeof config>;
  closeOnPrimaryAction?: boolean;
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
  closeOnPrimaryAction = true,
  closeButton = DefaultCloseButton,
  css,
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
      <DialogContent css={{ ...css }}>
        {children ?? (
          <>
            <DialogTitle
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
                    right: '0',
                    transform: 'translate(0,-50%)'
                  }}
                >
                  {closeButton}
                </Box>
              )}
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
                <ActionWrapper closeOnPrimaryAction={closeOnPrimaryAction}>
                  <Button size="lg" color="default" onClick={onPrimaryAction}>
                    {labels?.action}
                  </Button>
                </ActionWrapper>
              </Flex>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const ActionWrapper = ({
  children,
  closeOnPrimaryAction
}: {
  children: ReactNode;
  closeOnPrimaryAction?: boolean;
}) => {
  return closeOnPrimaryAction ? (
    <DialogClose asChild>{children}</DialogClose>
  ) : (
    <>{children}</>
  );
};

const DefaultCloseButton = (
  <DialogClose asChild>
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
  </DialogClose>
);
