import { CascaderOption } from './cascader';
import { CascaderNode } from './cascader-node';
import { SelectionPath } from './cascader-provider';
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
): SelectionPath[] => {
  const path: SelectionPath[] = [];

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

export interface FlattenedData {
  label: string;
  value: string;
  objectPath: { label: string; value: string }[];
  path: string;
  hasOptions: boolean;
}

export const flattenDataWithPath = (
  data: CascaderOption[]
): FlattenedData[] => {
  const flattened: FlattenedData[] = [];

  const traverse = (
    options: CascaderOption[],
    {
      objectPath,
      path
    }: { objectPath: FlattenedData['objectPath']; path: string }
  ) => {
    for (let i = 0; i < options.length; i++) {
      const item = options[i];

      const p = path ? `${path}.[${i}]` : `[${i}]`;
      const objPath = [
        ...objectPath,
        {
          label: item.label,
          value: item.value
        }
      ];

      flattened.push({
        label: item.label,
        value: item.value,
        objectPath: objPath,
        path: p,
        hasOptions: !!item.options?.length
      });

      if (item.options) {
        traverse(item.options, {
          objectPath: objPath,
          path: p
        });
      }
    }
  };

  traverse(data, {
    path: '',
    objectPath: []
  });

  return flattened;
};

export const makeBreadcrumbFromValue = (
  value: string,
  rootNode: CascaderRootNode
) => {
  const path: SelectionPath[] = [];

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

export const stringSearchFlattenedData = (
  data: FlattenedData[],
  searchValue: string
): FlattenedData[] => {
  const searchString = searchValue.toLowerCase();
  const found = data.filter((item) => item.label.toLowerCase().includes(searchString));

  return found;
};
