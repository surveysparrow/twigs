import { ReactNode } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '../dialog';
import { Button } from '../../button';
import { Flex } from '../../flex';

export type DefaultInfoDialogProps = {
  title?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  labels?: {
    action?: string;
  };
  onAction?: () => void;
  onClose?: () => void;
};

export const DefaultModal = ({
  title,
  content,
  footer,
  children,
  labels = {
    action: 'Close'
  },
  onClose,
  onAction
}: DefaultInfoDialogProps) => {
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) onClose?.();
      }}
      defaultOpen
    >
      <DialogContent>
        {children ?? (
          <>
            <DialogTitle>{title}</DialogTitle>
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
                  <Button size="lg" color="default" onClick={onAction}>
                    {labels?.action}
                  </Button>
                </DialogClose>
              </Flex>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
