import React, {
  ReactNode,
  createContext,
  useMemo,
  useRef,
  useState
} from 'react';
import { CascaderOption } from './cascader';
import { FlattenedData, flattenDataWithPath } from './cascader-utils';

export interface SelectionPath {
  value: string;
  path: string;
}

export const CascaderContext = createContext<{
  data: CascaderOption[];
  currentValue: { label: string; value: string };
  selectionPath: SelectionPath[];
  popoverOpen: boolean;
  handleChange:(value: CascaderOption) => void;
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectionPath: React.Dispatch<React.SetStateAction<SelectionPath[]>>;
  flattenedData: FlattenedData[];
  shouldFocusFirstItemInList: boolean;
  setShouldFocusFirstItemInList: (value: boolean) => void;
    }>({
      data: [],
      currentValue: { label: '', value: '' },
      selectionPath: [],
      flattenedData: [],
      handleChange: () => {},
      setSelectionPath: () => {},
      popoverOpen: false,
      setPopoverOpen: () => {},
      shouldFocusFirstItemInList: false,
      setShouldFocusFirstItemInList: () => {}
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
  const [popoverOpen, setPopoverOpen] = useState(false);

  const shouldFocusFirstItemInList = useRef(false);

  const setShouldFocusFirstItemInList = (value: boolean) => {
    shouldFocusFirstItemInList.current = value;
  };

  const flattenedData = useMemo(() => {
    return flattenDataWithPath(data);
  }, [data]);

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
