import { ReactNode } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRootProps,
  DialogTitle
} from '../dialog';
import { Button } from '../../button';
import { Flex } from '../../flex';

export type DefaultInfoDialogProps = {
  title?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  size?: DialogRootProps['size'];
  labels?: {
    action?: string;
  };
  closeOnPrimaryAction?: boolean;
  onPrimaryAction?: () => void;
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
  onClose,
  onPrimaryAction
}: DefaultInfoDialogProps) => {
  console.log({ size });
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
                <PrimaryActionButtonWrapper useActionWrapper={closeOnPrimaryAction}>
                  <Button size="lg" color="default" onClick={onPrimaryAction}>
                    {labels?.action}
                  </Button>
                </PrimaryActionButtonWrapper>
              </Flex>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

const PrimaryActionButtonWrapper = ({
  useActionWrapper,
  children
}: {
  useActionWrapper?: boolean;
  children?: ReactNode;
}) => {
  if (useActionWrapper) {
    return <DialogClose asChild>{children}</DialogClose>;
  }

  return <>{children}</>;
};
