import { ReactNode, useEffect, useState } from 'react';
import { DefaultAlertDialog, DefaultAlertDialogProps } from './default-alert';
import { DefaultInfo, DefaultInfoDialogProps } from './default-info';
import { store } from './store';
import {
  DefaultConfirmDialog,
  DefaultConfirmDialogProps
} from './default-confirm';

const defaultDialogs = {
  confirm: DefaultConfirmDialog,
  alert: DefaultAlertDialog,
  info: DefaultInfo
};

export type DefaultDialogOptions = {
  alert: DefaultAlertDialogProps;
  info: DefaultInfoDialogProps;
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
    const unsub = store.subscribe((state) => {
      setData([...state]);
    });
    return () => {
      unsub();
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
                store.data.filter((item) => item.__modalId !== dia.__modalId)
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
  const modalId = store.getModalId();
  store.publish([
    {
      name,
      options,
      __modalId: modalId
    }
  ]);

  return modalId;
}

function pushDialog<T extends AllDialogNames>(
  name: T,
  options: AllDialogOptions[T] extends undefined ? any : AllDialogOptions[T]
) {
  const modalId = store.getModalId();
  store.publish([
    ...store.data,
    {
      name,
      options,
      __modalId: modalId
    }
  ]);

  return modalId;
}

function closeDialog(modalId: number) {
  if (modalId) {
    store.publish(store.data.filter((item) => item.__modalId !== modalId));
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
