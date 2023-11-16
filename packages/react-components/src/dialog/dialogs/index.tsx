import { ReactNode, useEffect, useState } from 'react';
import { DefaultAlertDialog, DefaultAlertDialogProps } from './default-alert';
import { DefaultModal, DefaultInfoDialogProps } from './default-modal';
import { store } from './store';
import {
  DefaultConfirmDialog,
  DefaultConfirmDialogProps
} from './default-confirm';

const defaultDialogs = {
  confirm: DefaultConfirmDialog,
  alert: DefaultAlertDialog,
  modal: DefaultModal
};

export type DefaultDialogOptions = {
  alert: DefaultAlertDialogProps;
  modal: DefaultInfoDialogProps;
  confirm: DefaultConfirmDialogProps;
};

export interface DialogOptionsOverride {}

export const Dialogs = ({
  customDialogs
}: {
  customDialogs?: Record<
    keyof DialogOptionsOverride,
    (props: { onClose: () => void; [x: string]: any }) => ReactNode
  >;
}) => {
  const [data, setData] = useState(store.data);

  useEffect(() => {
    const { unsubscribe, id } = store.subscribe((state) => {
      if (`${id}` === store.getLastSubscriber()) {
        setData([...state]);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const allDialogs = { ...defaultDialogs, ...customDialogs };

  return (
    <>
      {data.map((dia) => {
        const Modal = allDialogs[dia.name];
        return (
          <Modal
            {...dia.options}
            key={dia.name}
            onClose={() => {
              store.publish(
                store.data.filter((item) => item.__dialogId !== dia.__dialogId)
              );

              dia?.options?.onClose?.();
            }}
          />
        );
      })}
    </>
  );
};

type AllDialogNames = keyof DefaultDialogOptions | keyof DialogOptionsOverride;

type AllDialogOptions = DefaultDialogOptions & DialogOptionsOverride;

function openDialog<T extends AllDialogNames>(
  name: T,
  options: AllDialogOptions[T] extends undefined ? any : AllDialogOptions[T]
) {
  const dialogId = store.getDialogId();
  store.publish([
    {
      name,
      options,
      __dialogId: dialogId
    }
  ]);

  const close = () => closeDialog(dialogId);

  return { close, dialogId };
}

function pushDialog<T extends AllDialogNames>(
  name: T,
  options: AllDialogOptions[T] extends undefined ? any : AllDialogOptions[T]
) {
  const dialogId = store.getDialogId();
  store.publish([
    ...store.data,
    {
      name,
      options,
      __dialogId: dialogId
    }
  ]);

  const close = () => closeDialog(dialogId);

  return { close, dialogId };
}

function closeDialog(dialogId: number) {
  if (dialogId) {
    store.publish(store.data.filter((item) => item.__dialogId !== dialogId));
  } else {
    store.publish([...store.data].slice(0, -1));
  }
}

function closeAllDialogs() {
  store.publish([]);
}

export const dialogs = {
  openDialog,
  pushDialog,
  closeDialog,
  closeAllDialogs
};
