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
import { CascaderNode } from './cascader-node';
import { CascaderRootNode } from './cascader-root-node';
import {
  FlattenedData,
  buildSelectionPath,
  flattenDataWithPath
} from './cascader-utils';

export interface SelectionPath {
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
  value?: { label: string; value: string };
  selectionPath: SelectionPath[];
  popoverOpen: boolean;
  focusedItem: FocusedItem;
  flattenedData: FlattenedData[];
  valueSelectionPath: SelectionPath[];
  selectedNode: CascaderNode | null;
  rootNode: CascaderRootNode | null;
  componentProps: {
    label?: string;
    placeholder?: string;
    inputAriaDescription?: string;
    popoverPortal?: HTMLElement;
    ariaLiveContent?: (
      data: {
        breadcrumb: string;
        label: string;
        totalItems: any;
        itemPosition: number;
        hasOptions: boolean;
        hasParent: boolean;
      } | null
    ) => ReactNode;
  };
  closePopover: () => void;
  clearFocus: () => void;
  setFocusedItem: React.Dispatch<React.SetStateAction<FocusedItem>>;
  setInputRef: (ref: HTMLInputElement) => void;
  getInputRef: () => HTMLInputElement | null;
  focusNextRow: () => void;
  focusNextColumn: () => void;
  focusPreviousRow: () => void;
  focusPreviousColumn: () => void;
  handleChange: (value: CascaderOption) => void;
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
  flattenedData: [],
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
  setPopoverOpen: () => {}
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
  handleChange: (updatedValue: CascaderOption) => void;
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
    const tree = new CascaderRootNode();

    const traverse = (options: CascaderOption[], parentNode: CascaderNode) => {
      for (let i = 0; i < options.length; i++) {
        const item = options[i];

        const node = tree.createNode(item.value, item.label);

        if (i === 0) {
          node.setPrevNode(null);
        } else {
          const prevNode = parentNode.getLastChild();
          if (prevNode) {
            prevNode.setNextNode(node);
          }
          node.setPrevNode(prevNode);
        }

        parentNode.appendChild(node);

        if (item.options) {
          traverse(item.options, node);
        }
      }
    };

    traverse(data, tree);

    setRootNode(tree);
  }, [data]);

  const focusNextRow = () => {
    if (focusedItem.node) {
      if (focusedItem.node.nextNode) {
        setFocusedItem({
          node: focusedItem.node.nextNode,
          isMouseClick: false
        });
      }
    } else if (data.length > 0) {
      setFocusedItem({
        node: rootNode?.children[0] || null,
        isMouseClick: false
      });
    }
  };

  const focusPreviousRow = () => {
    if (focusedItem.node && focusedItem.node.prevNode) {
      setFocusedItem({
        node: focusedItem.node.prevNode,
        isMouseClick: false
      });
    }
  };

  const focusNextColumn = () => {
    if (focusedItem.node) {
      const firstChild = focusedItem.node.getFirstChild();
      if (firstChild) {
        setSelectedNode(focusedItem.node);
        setFocusedItem({
          node: firstChild,
          isMouseClick: false
        });
      }
    }
  };

  const focusPreviousColumn = () => {
    if (focusedItem.node) {
      const parent = focusedItem.node.getParent();
      if (parent && !parent.isRoot) {
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

  const selectionPath = useMemo(() => {
    return buildSelectionPath(selectedNode);
  }, [selectedNode]);

  const valueSelectionPath = useMemo(() => {
    const node = rootNode?.findNode(value.value);
    return buildSelectionPath(node);
  }, [value]);

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
      flattenedData,
      componentProps,
      setFocusedItem,
      setPopoverOpen,
      focusNextColumn,
      setSelectedNode,
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
      flattenedData,
      componentProps,
      setFocusedItem,
      setPopoverOpen,
      focusNextColumn,
      setSelectedNode,
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
