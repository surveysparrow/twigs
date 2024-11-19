import React, {
  ReactNode,
  createContext,
  useEffect,
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

export type CascaderContextType = {
  data: CascaderOption[];
  currentValue: { label: string; value: string };
  selectionPath: SelectionPath[];
  popoverOpen: boolean;
  handleChange: (value: CascaderOption) => void;
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectionPath: React.Dispatch<React.SetStateAction<SelectionPath[]>>;
  flattenedData: FlattenedData[];
  shouldFocusFirstItemInList: boolean;
  setShouldFocusFirstItemInList: (value: boolean) => void;
  currentValueSelectionPath: SelectionPath[];
};

export const CascaderContext = createContext<CascaderContextType>({
  data: [],
  currentValue: { label: '', value: '' },
  selectionPath: [],
  flattenedData: [],
  handleChange: () => {},
  setSelectionPath: () => {},
  popoverOpen: false,
  setPopoverOpen: () => {},
  shouldFocusFirstItemInList: false,
  setShouldFocusFirstItemInList: () => {},
  currentValueSelectionPath: []
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

  const [popoverOpen, setPopoverOpen] = useState(false);

  const shouldFocusFirstItemInList = useRef(false);

  const setShouldFocusFirstItemInList = (value: boolean) => {
    shouldFocusFirstItemInList.current = value;
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

  const providerValue = useMemo(
    () => ({
      data,
      popoverOpen,
      currentValue,
      handleChange,
      selectionPath,
      flattenedData,
      setPopoverOpen,
      setSelectionPath,
      currentValueSelectionPath,
      shouldFocusFirstItemInList: shouldFocusFirstItemInList.current,
      setShouldFocusFirstItemInList
    }),
    [
      data,
      popoverOpen,
      currentValue,
      handleChange,
      selectionPath,
      setPopoverOpen,
      setSelectionPath,
      currentValueSelectionPath,
      shouldFocusFirstItemInList,
      setShouldFocusFirstItemInList
    ]
  );

  return (
    <CascaderContext.Provider value={providerValue}>
      {children}
    </CascaderContext.Provider>
  );
};
