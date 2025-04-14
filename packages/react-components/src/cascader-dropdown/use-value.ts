import { createContext, useContext, RefObject } from 'react';
import {
  CascaderDropdownItemType, CascaderDropdownOperatorType, CascaderDropdownValueSelectorType, CascaderDropdownDataValueType
} from './helpers/cascader-dropdown-constants';
import { CascaderDropdownRootNode } from './cascader-dropdown-root-node';
import { CascaderDropdownNode } from './cascader-dropdown-node';

export type CascaderDropdownContextType = {
  data: (CascaderDropdownItemType | CascaderDropdownOperatorType)[];
  value: CascaderDropdownDataValueType;
  popoverOpen: boolean;
  setPopoverOpen: (open: boolean) => void;
  id: string;
  rootNode: CascaderDropdownRootNode;
  selectedNode: CascaderDropdownNode | null;
  setSelectedNode: (node: CascaderDropdownNode | null) => void;
  selectionPath: CascaderDropdownDataValueType[];
  foldersSelectionPath: CascaderDropdownDataValueType[];
  focusPreviousColumn: () => void;
  focusNthColumn: (index: number) => void;
  focusedNode: CascaderDropdownNode | null;
  setFocusedNode: (node: CascaderDropdownNode | null) => void;
  inputRef: RefObject<HTMLInputElement> | null;
  focusNextRow: () => void;
  focusPreviousRow: () => void;
  focusNextColumn: () => void;
  handleChange: (node: CascaderDropdownNode | CascaderDropdownOperatorType, value?: CascaderDropdownValueSelectorType) => void;
  selectFocusedNode: () => void;
  selectorValue?: CascaderDropdownValueSelectorType;
};

export const CascaderDropdownContext = createContext<CascaderDropdownContextType>({
  data: [],
  value: { value: '', label: '' },
  popoverOpen: false,
  setPopoverOpen: () => {},
  id: '',
  rootNode: new CascaderDropdownRootNode(),
  selectedNode: null,
  setSelectedNode: () => {},
  selectionPath: [],
  foldersSelectionPath: [],
  focusPreviousColumn: () => {},
  setFocusedNode: () => {},
  focusedNode: null,
  inputRef: null,
  focusNthColumn: () => {},
  focusNextRow: () => {},
  focusPreviousRow: () => {},
  focusNextColumn: () => {},
  handleChange: () => {},
  selectFocusedNode: () => {},
  selectorValue: undefined
});

export const useCascaderDropdownContext = () => {
  return useContext(CascaderDropdownContext);
};
