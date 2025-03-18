import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore
} from 'react';
import { ToolbarProperties } from './utils';

interface ToolbarStore {
  data: ToolbarProperties;
}

const StoreContext = createContext<ReturnType<typeof useStoreData> | null>(
  null
);

const useStoreData = () => {
  const store = useRef<ToolbarStore>({
    data: {
      format: 'paragraph',
      isBold: false,
      isCode: false,
      isItalic: false,
      isLink: false,
      isOrderedList: false,
      isStrikethrough: false,
      isSubscript: false,
      isSuperscript: false,
      isUnderline: false,
      isUnOrderedList: false,
      textAlign: 'left'
    }
  });

  const get = useCallback(() => store.current, []);
  const subscribers = useRef<Set<() => any>>(new Set());

  const set = useCallback((value) => {
    store.current = {
      ...store.current,
      data: { ...store.current.data, ...value }
    };
    return subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return { get, set, subscribe };
};

export const useToolbarStore = <T, >(selector: (state: ToolbarStore) => T) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error(
      'useToolbarStore must be used within a ToolbarStoreProvider'
    );
  }

  const state = useSyncExternalStore(store.subscribe, () => selector(store.get()));
  return [state, store.set] as const;
};

export const ToolbarStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  );
};
