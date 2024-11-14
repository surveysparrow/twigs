import React, {
  ReactNode, createContext, useMemo, useState
} from 'react';
import { CascaderOption } from './cascader';
import { FlattenedData, flattenDataWithPath } from './cascader-utils';

export interface SelectionPath {
  value: string;
  path: string;
}

export const CascaderContext = createContext<{
  data: CascaderOption[];
  selectionPath: SelectionPath[];
  setSelectionPath: React.Dispatch<React.SetStateAction<SelectionPath[]>>;
  flattenedData: FlattenedData[];
}>({
  data: [],
  selectionPath: [],
  flattenedData: [],
  setSelectionPath: () => {}
});

export const CascaderProvider = ({
  data,
  children
}: {
  children: ReactNode;
  data: CascaderOption[];
}) => {
  const [selectionPath, setSelectionPath] = useState<SelectionPath[]>([]);

  const flattenedData = useMemo(() => {
    return flattenDataWithPath(data);
  }, [data]);

  const providerValue = useMemo(
    () => ({
      data, selectionPath, flattenedData, setSelectionPath
    }),
    [data, selectionPath, setSelectionPath]
  );

  return (
    <CascaderContext.Provider value={providerValue}>
      {children}
    </CascaderContext.Provider>
  );
};
