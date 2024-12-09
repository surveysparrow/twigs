import React, {
  ReactNode,
  createContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState
} from 'react';
import { CascaderComponentProps, CascaderOption } from './cascader';
import { CascaderNode } from './cascader-node';
import { CascaderRootNode } from './cascader-root-node';
import {
  buildSelectionPath,
  buildTree,
  findNextFocusableColumnNode,
  findNextFocusableRowNode,
  findPrevFocusableColumnNode,
  findPrevFocusableRowNode
} from './cascader-utils';

export interface CascaderItem {
  value: string;
  label: string;
}

export type FocusedItem = {
  node: CascaderNode | null;
  isMouseClick?: boolean;
};

export type CascaderContextType = {
  id: string;
  data: CascaderOption[];
  value?: CascaderItem;
  selectionPath: CascaderItem[];
  popoverOpen: boolean;
  focusedItem: FocusedItem;
  valueSelectionPath: CascaderItem[];
  selectedNode: CascaderNode | null;
  rootNode: CascaderRootNode | null;
  componentProps: CascaderComponentProps;
  closePopover: () => void;
  clearFocus: () => void;
  setFocusedItem: React.Dispatch<React.SetStateAction<FocusedItem>>;
  setInputRef: (ref: HTMLInputElement) => void;
  getInputRef: () => HTMLInputElement | null;
  focusNextRow: () => void;
  focusNextColumn: () => void;
  focusPreviousRow: () => void;
  focusPreviousColumn: () => void;
  fetchDataForNode: (node: CascaderNode) => Promise<void>;
  handleChange: (value: CascaderOption, selectionPath: CascaderItem[]) => void;
  setPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNode: React.Dispatch<React.SetStateAction<CascaderNode | null>>;
};

export const CascaderContext = createContext<CascaderContextType>({
  id: '',
  data: [],
  focusedItem: { node: null, isMouseClick: false },
  rootNode: null,
  value: { label: '', value: '' },
  selectionPath: [],
  popoverOpen: false,
  valueSelectionPath: [],
  componentProps: {},
  selectedNode: null,
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
  setSelectedNode: () => {},
  setPopoverOpen: () => {},
  fetchDataForNode: async () => {}
});

export const CascaderProvider = ({
  data,
  value,
  children,
  componentProps = {},
  handleChange
}: {
  children: ReactNode;
  data: CascaderOption[];
  value: { label: string; value: string };
  handleChange: (
    updatedValue: CascaderOption,
    selectionPath: CascaderItem[]
  ) => void;
  componentProps?: CascaderContextType['componentProps'];
}) => {
  const [selectedNode, setSelectedNode] = useState<CascaderNode | null>(null);

  const [focusedItem, setFocusedItem] = useState<FocusedItem>({
    node: null,
    isMouseClick: false
  });
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [rootNode, setRootNode] = useState<CascaderRootNode | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const rootNodeRef = useRef<CascaderRootNode | null>(rootNode);

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

  useEffect(() => {
    const tree = buildTree(data, rootNodeRef.current);
    setRootNode(tree);
  }, [data]);

  const focusNextRow = () => {
    if (focusedItem.node) {
      const nextRow = findNextFocusableRowNode(focusedItem.node);
      if (nextRow) {
        setFocusedItem({
          node: nextRow,
          isMouseClick: false
        });
      }
    } else if (data.length > 0) {
      let nextRow: CascaderNode | null = rootNode?.children[0] ?? null;

      if (nextRow && nextRow.disabled) {
        nextRow = findNextFocusableRowNode(nextRow);
      }

      if (!nextRow) return;

      setFocusedItem({
        node: nextRow,
        isMouseClick: false
      });
    }
  };

  const focusPreviousRow = () => {
    if (focusedItem.node) {
      const prevNode = findPrevFocusableRowNode(focusedItem.node);
      if (!prevNode) return;

      setFocusedItem({
        node: prevNode,
        isMouseClick: false
      });
    }
  };

  const focusNextColumn = () => {
    if (focusedItem.node) {
      const nextNode = findNextFocusableColumnNode(focusedItem.node);
      if (nextNode) {
        setSelectedNode(focusedItem.node);
        setFocusedItem({
          node: nextNode,
          isMouseClick: false
        });
      } else if (
        focusedItem.node.shouldFetchOptions
        && !focusedItem.node.dataFetched
      ) {
        setSelectedNode(focusedItem.node);
        setFocusedItem({
          node: focusedItem.node,
          isMouseClick: false
        });
        fetchDataForNode(focusedItem.node);
      }
    }
  };

  const focusPreviousColumn = () => {
    if (focusedItem.node) {
      const parent = findPrevFocusableColumnNode(focusedItem.node);
      if (parent) {
        setSelectedNode(parent);
        setFocusedItem({
          node: parent,
          isMouseClick: false
        });
      }
    }
  };

  const clearFocus = () => {
    setFocusedItem({
      node: null,
      isMouseClick: false
    });
  };

  const fetchDataForNode = async (node: CascaderNode) => {
    if (!componentProps.fetchOptions) return;

    node.setLoading(true);

    try {
      await componentProps.fetchOptions({
        label: node.label,
        value: node.value,
        ...node.options
      });
      node.setDataFetched(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      node.setLoading(false);
    }
  };

  useEffect(() => {
    rootNodeRef.current = rootNode;
  }, [rootNode]);

  const selectionPath = useMemo(() => {
    return buildSelectionPath(selectedNode);
  }, [selectedNode]);

  const valueSelectionPath = useMemo(() => {
    const node = rootNode?.findNode(value.value);
    return buildSelectionPath(node);
  }, [rootNode, value]);

  const providerValue = useMemo(
    () => ({
      id,
      data,
      value,
      rootNode,
      clearFocus,
      setInputRef,
      getInputRef,
      focusedItem,
      popoverOpen,
      closePopover,
      focusNextRow,
      handleChange,
      selectedNode,
      selectionPath,
      componentProps,
      setFocusedItem,
      setPopoverOpen,
      focusNextColumn,
      setSelectedNode,
      fetchDataForNode,
      focusPreviousRow,
      valueSelectionPath,
      focusPreviousColumn
    }),
    [
      id,
      data,
      value,
      rootNode,
      clearFocus,
      setInputRef,
      getInputRef,
      focusedItem,
      popoverOpen,
      closePopover,
      focusNextRow,
      handleChange,
      selectedNode,
      selectionPath,
      componentProps,
      setFocusedItem,
      setPopoverOpen,
      focusNextColumn,
      setSelectedNode,
      fetchDataForNode,
      focusPreviousRow,
      valueSelectionPath,
      focusPreviousColumn
    ]
  );

  return (
    <CascaderContext.Provider value={providerValue}>
      {children}
    </CascaderContext.Provider>
  );
};
