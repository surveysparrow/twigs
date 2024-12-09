import { CascaderOption } from './cascader';
import { CascaderNode } from './cascader-node';
import { CascaderItem } from './cascader-provider';
import { CascaderRootNode } from './cascader-root-node';

export const recursiveFind = (
  data: CascaderOption[],
  value: { value: string; label?: string }
): CascaderOption | null => {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];

    if (item.value === value.value) {
      return item;
    }

    if (item.options) {
      const found = recursiveFind(item.options, value);
      if (found) {
        return found;
      }
    }
  }

  return null;
};

export const buildSelectionPath = (
  node?: CascaderNode | null
): CascaderItem[] => {
  const path: CascaderItem[] = [];

  let currentNode: CascaderNode | undefined | null = node;
  while (currentNode && !currentNode.isRoot) {
    path.unshift({
      value: currentNode.value,
      label: currentNode.label
    });
    currentNode = currentNode.getParent();
  }

  return path;
};

export const buildTree = (
  data: CascaderOption[],
  existingRoot?: CascaderRootNode | null
) => {
  const tree = new CascaderRootNode();

  const traverse = (options: CascaderOption[], parentNode: CascaderNode) => {
    for (let i = 0; i < options.length; i++) {
      const item = options[i];
      const existingNode = existingRoot?.findNode(item.value);
      const node = existingNode
        ? tree.resetNodeWithProperties(existingNode, {
          parent: parentNode
        })
        : tree.createNode(item.value, item.label, {
          disabled: item.disabled,
          shouldFetchOptions: item.shouldFetchOptions
        });

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

  return tree;
};

export const findNextFocusableRowNode = (
  node: CascaderNode
): CascaderNode | null => {
  let { nextNode } = node;

  while (nextNode && nextNode.disabled) {
    nextNode = nextNode.nextNode;
  }

  return nextNode;
};

export const findPrevFocusableRowNode = (
  node: CascaderNode
): CascaderNode | null => {
  let { prevNode } = node;

  while (prevNode && prevNode.disabled) {
    prevNode = prevNode.prevNode;
  }

  return prevNode;
};

export const findNextFocusableColumnNode = (
  node: CascaderNode
): CascaderNode | null => {
  const children = node.getChildren();

  if (!children.length) {
    return null;
  }

  let nextNode: CascaderNode | null = children[0];

  while (nextNode && nextNode.disabled) {
    nextNode = nextNode.nextNode;
  }

  return nextNode;
};

export const findPrevFocusableColumnNode = (
  node: CascaderNode
): CascaderNode | null => {
  const parent = node.getParent();

  if (!parent || parent.isRoot) {
    return null;
  }

  return parent;
};

export const buildBreadcrumbFromValue = (
  value: string,
  rootNode: CascaderRootNode
) => {
  const path: CascaderItem[] = [];

  const node = rootNode.findNode(value);

  if (!node) return path;

  path.push({
    value: node.value,
    label: node.label
  });

  let currentNode: CascaderNode | null = node.getParent();
  while (currentNode) {
    path.unshift({
      value: currentNode.value,
      label: currentNode.label
    });
    currentNode = currentNode.getParent();
  }

  return path;
};

export const stringSearchFlattenedNodes = (
  rootNode: CascaderRootNode | null,
  searchValue: string
) => {
  if (!rootNode) return [];
  const searchString = searchValue.toLowerCase();
  const allNodes = rootNode.getFlattenedNodes();

  const found = allNodes.filter((node) => node.label.toLowerCase().includes(searchString));

  return found;
};
