import {
  ReactNode, createContext, useContext, useRef
} from 'react';
import { StoreApi, createStore, useStore } from 'zustand';
import { ToolbarProperties } from './utils';

interface ToolbarStore {
  data: ToolbarProperties;
  updateData: (data: Partial<ToolbarProperties>) => void;
}

const StoreContext = createContext<StoreApi<ToolbarStore> | null>(null);

export const useToolbarStore = <T, >(
  selector: (state: ToolbarStore) => T
): T => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error(
      'useToolbarStore must be used within a ToolbarStoreProvider'
    );
  }
  const slice = useStore(store, selector);
  return slice;
};

export const ToolbarStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef(
    createStore<ToolbarStore>()((set) => ({
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
      },
      updateData: (data) => set((state) => ({ data: { ...state.data, ...data } }))
    }))
  );

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
