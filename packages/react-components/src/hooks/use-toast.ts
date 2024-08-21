// Inspired by shadcn/ui
/* eslint-disable no-use-before-define, no-shadow */
import * as React from 'react';
import { type ToastProps } from '../toast/toast';

const TOAST_REMOVE_DELAY = 10000;

export type ToasterVariants =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'loading';

type ToastrToast = ToastProps & {
  icon?: React.ReactElement;
  variant: string;
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
};

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
  UPSERT_TOAST: 'UPSERT_TOAST'
} as const;

let count = 0;

function generareId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToastrToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToastrToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToastrToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToastrToast['id'];
    }
  | {
      type: ActionType['UPSERT_TOAST'];
      toast: ToastrToast;
    };

interface State {
  toasts: ToastrToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();
let memoryState: State = { toasts: [] };
// eslint-disable-next-line no-unused-vars
const listeners: Array<(state: State) => void> = [];

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts]
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t))
      };
    case 'UPSERT_TOAST': {
      const { toast } = action;
      return state.toasts.find((t) => t.id === toast.id)
        ? reducer(state, { type: 'UPDATE_TOAST', toast })
        : reducer(state, { type: 'ADD_TOAST', toast });
    }
    case 'DISMISS_TOAST': {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === toastId || toastId === undefined
          ? {
            ...t,
            open: false
          }
          : t))
      };
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
    default:
      return state;
  }
}

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: 'REMOVE_TOAST',
      toastId
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

interface Toast extends Omit<ToastrToast, 'id'> {}

function toast({ ...toastProps }: Toast) {
  const id = generareId();

  const update = (props: ToastrToast) => dispatch({
    type: 'UPDATE_TOAST',
    toast: { ...props, id }
  });
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...toastProps,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });

  return {
    id,
    dismiss,
    update
  };
}
const createHandler = (variant: ToasterVariants) => (args: ToastProps) => {
  const newToast = toast({ ...args, variant });
  dispatch({ type: 'UPSERT_TOAST', toast: { ...newToast, variant } });
  return newToast;
};
toast.loading = createHandler('loading');

toast.promise = <T>(
  promise: Promise<T>,
  options: {
    loading: Omit<ToastrToast, 'id'>;
    success: ((p: T) => Omit<ToastrToast, 'id'>) | Omit<ToastrToast, 'id'>;
    error: ((e: T) => Omit<ToastrToast, 'id'>) | Omit<ToastrToast, 'id'>;
  }
) => {
  const loadingToast = toast.loading(options.loading);
  promise
    .then((p) => {
      const successProps = typeof options.success === 'function'
        ? options.success(p)
        : options.success;
      const variant = successProps.variant || 'default';
      loadingToast.update({
        variant,
        id: loadingToast.id,
        icon: successProps.icon,
        css: successProps.css,
        action: successProps.action,
        title: successProps.title,
        description: successProps.description
      });
      return p;
    })
    .catch((e) => {
      const errorProps = typeof options.error === 'function' ? options.error(e) : options.error;
      const variant = errorProps.variant || 'error';
      loadingToast.update({
        variant,
        id: loadingToast.id,
        icon: errorProps.icon,
        css: errorProps.css,
        action: errorProps.action,
        title: errorProps.title,
        description: errorProps.description
      });
      return e;
    });
  return promise;
};

function useToast({ maxToasts = 3 }) {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    toasts: state.toasts.slice(0, maxToasts),
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId })
  };
}

export { useToast, toast };
