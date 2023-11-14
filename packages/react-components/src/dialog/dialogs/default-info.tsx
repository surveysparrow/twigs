import { ReactNode } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '../dialog';
import { Button } from '../../button';

export type DefaultInfoDialogProps = {
  title?: ReactNode;
  children?: ReactNode;
  buttonLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
};

export const DefaultInfo = ({
  title,
  children,
  buttonLabel,
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
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{children}</DialogDescription>
        <DialogClose asChild>
          <Button color="default" onClick={onAction}>{buttonLabel}</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
