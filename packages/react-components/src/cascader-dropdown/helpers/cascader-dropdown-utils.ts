import { CascaderDropdownNode } from '../cascader-dropdown-node';
import { CascaderDropdownRootNode } from '../cascader-dropdown-root-node';
import {
  CascaderDropdownDataValueType, CascaderDropdownItemType, CascaderDropdownOperatorType, optionTypes
} from './cascader-dropdown-constants';

export const recursiveFind = (
  data: CascaderDropdownItemType[],
  value: CascaderDropdownDataValueType
): CascaderDropdownDataValueType | null => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.value === value.value) {
      return item;
    }

    if ('options' in item && item.options) {
      const found = recursiveFind(item.options, value);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

export const buildTree = (data: CascaderDropdownItemType[]): CascaderDropdownRootNode => {
  const tree = new CascaderDropdownRootNode();

  const traverse = (options: CascaderDropdownItemType[] | CascaderDropdownOperatorType[], parentNode: CascaderDropdownNode, valuePath: string, labelPath: string, level: number) => {
    for (let i = 0; i < options.length; i++) {
      const item = options[i];

      const value = item.value.toString().trim();
      const label = item.label.toString().trim();

      const currentValuePath = !valuePath ? value : `${valuePath} ${value}`;
      const currentLabelPath = !labelPath ? label : `${labelPath} ${label}`;

      const node = tree.createNode({
        value,
        label,
        options: {
          disabled: item.disabled,
          shouldFetchOptions: item.shouldFetchOptions,
          ...('type' in item ? {
            dataType: item.dataType,
            choices: item.choices,
            regex: item.regex
          } : {})
        },
        level: level + 1,
        labelPath: currentLabelPath,
        valuePath: currentValuePath,
        type: 'type' in item ? optionTypes.VALUE_SELECTOR : optionTypes.ITEM
      });

      if (i === 0) {
        node.setPrevNode(null);
      } else {
        const prevNode = parentNode.getLastChild();
        if (prevNode) prevNode.setNextNode(node);
        node.setPrevNode(prevNode);
      }

      node.setParent(parentNode);
      parentNode.appendChild(node);

      if ('options' in item && item.options) {
        traverse(item.options, node, currentValuePath, currentLabelPath, level + 1);
      }
    }
  };

  traverse(data, tree, '', '', 0);

  return tree;
};

export const buildSelectionPath = (node: CascaderDropdownNode | null): { selectionPath: CascaderDropdownDataValueType[], foldersSelectionPath: CascaderDropdownDataValueType[] } => {
  const selectionPath: CascaderDropdownDataValueType[] = [];
  const foldersSelectionPath: CascaderDropdownDataValueType[] = [];

  let currentNode: CascaderDropdownNode | null = node;

  while (currentNode && !currentNode.isRoot) {
    selectionPath.unshift({
      label: currentNode.label,
      value: currentNode.value
    });

    if (currentNode.children.length > 0 || currentNode.getType() === optionTypes.VALUE_SELECTOR) {
      foldersSelectionPath.unshift({
        label: currentNode.label,
        value: currentNode.value
      });
    }

    currentNode = currentNode.parent;
  }

  return { selectionPath, foldersSelectionPath };
};

export const stringSearchFlattenedNodes = (
  rootNode: CascaderDropdownRootNode | null,
  searchValue: string
) => {
  if (!rootNode) return [];
  const searchString = searchValue.toLowerCase().trim();
  if (!searchString) return [];

  const foundNodes: CascaderDropdownNode[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [path, lowercasePath] of rootNode.pathMapping) {
    if (lowercasePath.includes(searchString)) {
      const node = rootNode.findNodeByPath(path);
      if (node) foundNodes.push(node);
    }
  }
  return foundNodes;
};

export const findNextFocusableRowNode = (node: CascaderDropdownNode): CascaderDropdownNode | null => {
  let { nextNode } = node;
  while (nextNode?.disabled) {
    nextNode = nextNode.nextNode;
  }
  return nextNode;
};

export const findPrevFocusableRowNode = (node: CascaderDropdownNode): CascaderDropdownNode | null => {
  let { prevNode } = node;
  while (prevNode?.disabled) {
    prevNode = prevNode.prevNode;
  }
  return prevNode;
};
