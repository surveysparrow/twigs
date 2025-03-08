import {
  ReactNode, useId, useMemo, useState, useRef,
  useEffect
} from 'react';
import { CascaderDropdownPropertyType, CascaderDropdownValueType } from './helpers/cascader-dropdown-constants';
import { CascaderDropdownContext, CascaderDropdownContextType } from './use-value';
import {
  buildSelectionPath, buildTree, findNextFocusableRowNode, findPrevFocusableRowNode
} from './helpers/cascader-dropdown-utils';
import { CascaderDropdownNode } from './cascader-dropdown-node';

export type CascaderDropdownProviderProps = {
  children: ReactNode;
  data: CascaderDropdownPropertyType[];
  value: CascaderDropdownValueType;
  onChange: (node: CascaderDropdownValueType, selectionPath: CascaderDropdownValueType[]) => void;
};

export const CascaderDropdownProvider = ({
  children, data, value, onChange
}: CascaderDropdownProviderProps) => {
  const id = useId();

  const inputRef = useRef<HTMLInputElement>(null);

  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<CascaderDropdownNode | null>(null);
  const [focusedNode, setFocusedNode] = useState<CascaderDropdownNode | null>(null);

  const { selectionPath, foldersSelectionPath } = useMemo(() => {
    return buildSelectionPath(selectedNode);
  }, [selectedNode]);

  const rootNode = useMemo(() => {
    return buildTree(data);
  }, [data]);

  const focusPreviousColumn = () => {
    if (foldersSelectionPath.length === 0 || foldersSelectionPath.length === 1) {
      focusRootNode();
      return;
    }
    if (foldersSelectionPath.length > 1) {
      const selectedFolderNode = rootNode.findNode(foldersSelectionPath.at(-1)?.value);
      const parentNode = rootNode.findNode(foldersSelectionPath.at(-2)?.value);
      if (parentNode) {
        setFocusedNode(selectedFolderNode ?? parentNode.children.at(0) ?? null);
        setSelectedNode(parentNode);
      }
    }
  };

  const focusRootNode = () => {
    if (foldersSelectionPath.length > 0) {
      const selectedFolderNode = rootNode.findNode(foldersSelectionPath.at(0)?.value);
      setFocusedNode(selectedFolderNode ?? null);
      setSelectedNode(rootNode);
      return;
    }
    setFocusedNode(rootNode.children.at(0) ?? null);
    setSelectedNode(rootNode);
  };

  const focusNthColumn = (index: number) => {
    if (!index) {
      focusRootNode();
      return;
    }
    if (foldersSelectionPath.length > 0) {
      const selectedFolderNode = rootNode.findNode(foldersSelectionPath.at(index)?.value);
      const parent = rootNode.findNode(foldersSelectionPath.at(index - 1)?.value);
      if (parent) {
        setFocusedNode(selectedFolderNode ?? parent.children.at(0) ?? null);
        setSelectedNode(parent);
      }
    }
  };

  const focusNextRow = () => {
    if (focusedNode) {
      const nextNode = findNextFocusableRowNode(focusedNode);
      if (nextNode) setFocusedNode(nextNode);
    }
  };

  const focusPreviousRow = () => {
    if (focusedNode) {
      const prevNode = findPrevFocusableRowNode(focusedNode);
      if (prevNode) setFocusedNode(prevNode);
    }
  };

  const focusNextColumn = () => {
    if (focusedNode && focusedNode.children.length > 0) {
      setFocusedNode(focusedNode.children.at(0) ?? null);
      setSelectedNode(focusedNode);
    }
  };

  const handleChange = (node: CascaderDropdownNode) => {
    setSelectedNode(null);
    setFocusedNode(null);
    setPopoverOpen(false);
    onChange({ label: node.label, value: node.value }, selectionPath.map((item) => ({ label: item.label, value: item.value })));
  };

  const selectFocusedNode = () => {
    if (focusedNode) {
      if (focusedNode.children.length > 0) {
        setFocusedNode(focusedNode.children.at(0) ?? null);
        setSelectedNode(focusedNode);
      } else {
        handleChange(focusedNode);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current && document.activeElement !== inputRef.current) inputRef.current.focus();
    if (!focusedNode) {
      const selectedFolder: CascaderDropdownNode | null = foldersSelectionPath.length > 0 ? rootNode.findNode(foldersSelectionPath.at(0)?.value) : rootNode.children.at(0) ?? null;
      setFocusedNode(selectedFolder);
    }
  });

  const providerValue = useMemo<CascaderDropdownContextType>(() => ({
    id,
    data,
    value,
    inputRef,
    rootNode,
    focusedNode,
    popoverOpen,
    selectedNode,
    selectionPath,
    foldersSelectionPath,
    focusNextRow,
    setFocusedNode,
    setPopoverOpen,
    focusNthColumn,
    focusNextColumn,
    setSelectedNode,
    focusPreviousRow,
    focusPreviousColumn,
    handleChange,
    selectFocusedNode
  }), [
    id,
    data,
    value,
    inputRef,
    rootNode,
    focusedNode,
    popoverOpen,
    selectedNode,
    selectionPath,
    foldersSelectionPath,
    focusNextRow,
    setFocusedNode,
    focusNthColumn,
    setPopoverOpen,
    focusNextColumn,
    setSelectedNode,
    focusPreviousRow,
    focusPreviousColumn,
    handleChange,
    selectFocusedNode
  ]);

  return (
    <CascaderDropdownContext.Provider value={providerValue}>
      {children}
    </CascaderDropdownContext.Provider>
  );
};
