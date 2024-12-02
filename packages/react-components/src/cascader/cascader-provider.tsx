import { get } from 'lodash-es';
import React, {
  ReactNode,
  createContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react';
import { CascaderOption } from './cascader';
import {
  FlattenedData,
  buildSelectionPath,
  flattenDataWithPath
} from './cascader-utils';

export interface SelectionPath {
  value: string;
  path: string;
}

export type FocusedItem = {
  itemIndex: number;
  objectPath: string;
  value: string;
  isMouseClick?: boolean;
};

export type CascaderContextType = {
  id: string;
  data: CascaderOption[];
  currentValue: { label: string; value: string };
  selectionPath: SelectionPath[];
  popoverOpen: boolean;
  focusedItem: FocusedItem | null;
  flattenedData: FlattenedData[];
  currentValueSelectionPath: SelectionPath[];
  closePopover: () => void;
  clearFocus: () => void;
  setFocusedItem: React.Dispatch<React.SetStateAction<FocusedItem | null>>;
  setInputRef: (ref: HTMLInputElement) => void;
  getInputRef: () => HTMLInputElement | null;
  focusNextRow: () => void;
  focusNextColumn: () => void;
  focusPreviousRow: () => void;
  focusPreviousColumn: () => void;
  handleChange: (value: CascaderOption) => void;
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectionPath: React.Dispatch<React.SetStateAction<SelectionPath[]>>;
};

export const CascaderContext = createContext<CascaderContextType>({
  id: '',
  data: [],
  focusedItem: null,
  currentValue: { label: '', value: '' },
  selectionPath: [],
  flattenedData: [],
  popoverOpen: false,
  currentValueSelectionPath: [],
  setInputRef: () => {},
  getInputRef: () => null,
  setFocusedItem: () => {},
  handleChange: () => {},
  clearFocus: () => {},
  closePopover: () => {},
  focusNextRow: () => {},
  focusPreviousRow: () => {},
  focusNextColumn: () => {},
  focusPreviousColumn: () => {},
  setSelectionPath: () => {},
  setPopoverOpen: () => {}
});

export const CascaderProvider = ({
  data,
  children,
  currentValue,
  handleChange
}: {
  children: ReactNode;
  data: CascaderOption[];
  currentValue: { label: string; value: string };
  handleChange: (value: CascaderOption) => void;
}) => {
  const [selectionPath, setSelectionPath] = useState<SelectionPath[]>([]);
  const [currentValueSelectionPath, setCurrentValueSelectionPath] = useState<
    SelectionPath[]
  >([]);
  const [focusedItem, setFocusedItem] = useState<FocusedItem | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const id = useId();

  const setInputRef = (ref: HTMLInputElement) => {
    inputRef.current = ref;
  };

  const getInputRef = () => {
    return inputRef.current;
  };

  const closePopover = () => {
    setPopoverOpen(false);
  };

  const flattenedData = useMemo(() => {
    return flattenDataWithPath(data);
  }, [data]);

  useEffect(() => {
    if (currentValue.value) {
      const path = buildSelectionPath(data, currentValue.value);
      setCurrentValueSelectionPath(path);
    }
  }, [currentValue]);

  const focusNextRow = () => {
    if (focusedItem) {
      const parentObject: CascaderOption[] = focusedItem.objectPath === ''
        ? data
        : get(data, focusedItem.objectPath);

      if (focusedItem.itemIndex !== parentObject.length - 1) {
        setFocusedItem({
          itemIndex: focusedItem.itemIndex + 1,
          value: parentObject[focusedItem.itemIndex + 1].value,
          objectPath: focusedItem.objectPath
        });
      }
    } else if (selectionPath.length === 0 && data.length > 0) {
      setFocusedItem({
        value: data[0].value,
        itemIndex: 0,
        objectPath: ''
      });
    }
  };

  const focusPreviousRow = () => {
    if (focusedItem) {
      const parentObject: CascaderOption[] = focusedItem.objectPath === ''
        ? data
        : get(data, focusedItem.objectPath);

      if (focusedItem.itemIndex !== 0) {
        setFocusedItem({
          itemIndex: focusedItem.itemIndex - 1,
          value: parentObject[focusedItem.itemIndex - 1].value,
          objectPath: focusedItem.objectPath
        });
      }
    }
  };

  const focusNextColumn = () => {
    if (focusedItem) {
      const parentObject: CascaderOption[] = focusedItem.objectPath === ''
        ? data
        : get(data, focusedItem.objectPath);
      const option = parentObject[focusedItem.itemIndex];

      if (option.options && option.options.length > 0) {
        const nextPath = `${focusedItem.objectPath}[${focusedItem.itemIndex}]`;

        if (selectionPath.at(-1)?.path !== nextPath) {
          setSelectionPath([
            ...selectionPath,
            {
              value: option.value,
              path: nextPath
            }
          ]);
        }

        setFocusedItem({
          value: option.options[0].value,
          itemIndex: 0,
          objectPath: `${focusedItem.objectPath}[${focusedItem.itemIndex}].options`
        });
      }
    }
  };

  const focusPreviousColumn = () => {
    if (focusedItem) {
      if (focusedItem.objectPath === '') {
        return;
      }

      const previousOptionPath = focusedItem.objectPath.substring(
        0,
        focusedItem.objectPath.lastIndexOf('.options')
      );
      const prevItemIndexMarker = previousOptionPath.match(/\[(\d+)\]$/);

      if (!prevItemIndexMarker) {
        return;
      }

      const prevObjectPath = previousOptionPath.substring(
        0,
        prevItemIndexMarker.index
      );
      const prevItemIndex = Number(prevItemIndexMarker[1]);

      const parentObj = prevObjectPath === '' ? data : get(data, prevObjectPath);
      const option = parentObj[prevItemIndex];

      setSelectionPath(selectionPath.slice(0, -1));
      setFocusedItem({
        value: option.value,
        itemIndex: prevItemIndex,
        objectPath: prevObjectPath
      });
    }
  };

  const clearFocus = () => {
    setFocusedItem(null);
  };

  const providerValue = useMemo(
    () => ({
      id,
      data,
      clearFocus,
      setInputRef,
      getInputRef,
      focusedItem,
      popoverOpen,
      currentValue,
      closePopover,
      focusNextRow,
      handleChange,
      selectionPath,
      flattenedData,
      setFocusedItem,
      setPopoverOpen,
      focusNextColumn,
      setSelectionPath,
      focusPreviousRow,
      focusPreviousColumn,
      currentValueSelectionPath
    }),
    [
      id,
      data,
      clearFocus,
      setInputRef,
      getInputRef,
      focusedItem,
      popoverOpen,
      currentValue,
      closePopover,
      focusNextRow,
      handleChange,
      selectionPath,
      flattenedData,
      setFocusedItem,
      setPopoverOpen,
      focusNextColumn,
      setSelectionPath,
      focusPreviousRow,
      focusPreviousColumn,
      currentValueSelectionPath
    ]
  );

  return (
    <CascaderContext.Provider value={providerValue}>
      {children}
    </CascaderContext.Provider>
  );
};
