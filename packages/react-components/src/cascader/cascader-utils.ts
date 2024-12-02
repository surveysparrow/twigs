import { get } from 'lodash-es';
import { CascaderOption } from './cascader';
import { FocusedItem, SelectionPath } from './cascader-provider';

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
  data: CascaderOption[],
  value: string
): SelectionPath[] => {
  let pathString = '';
  const path: SelectionPath[] = [];

  const traverse = (options: CascaderOption[], parentPath: string) => {
    for (let i = 0; i < options.length; i++) {
      const item = options[i];

      const p = parentPath ? `${parentPath}.options[${i}]` : `[${i}]`;

      if (item.value === value) {
        pathString = p;
        return;
      }

      if (item.options) {
        traverse(item.options, p);
      }
    }
  };

  traverse(data, '');

  if (!pathString) {
    return path;
  }

  let lastDotIndex = pathString.indexOf('.');
  lastDotIndex = lastDotIndex === -1 ? pathString.length : lastDotIndex;
  let loop = true;
  while (loop) {
    if (lastDotIndex === pathString.length) {
      loop = false;
    }
    const pathStringSlice = pathString.substring(0, lastDotIndex);
    const pathData = get(data, pathStringSlice);

    path.push({
      path: pathStringSlice,
      value: pathData.value
    });

    lastDotIndex = pathString.indexOf('.', lastDotIndex + 1);
    lastDotIndex = lastDotIndex === -1 ? pathString.length : lastDotIndex;
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

export const convertSelectionPathToFocusedItem = (
  selectionPath: SelectionPath[]
): FocusedItem | null => {
  const lastPath = selectionPath.at(-1);
  if (!lastPath) {
    return null;
  }

  const objectPath = lastPath.path.substring(0, lastPath.path.lastIndexOf('['));
  const index = parseInt(
    lastPath.path.substring(
      lastPath.path.lastIndexOf('[') + 1,
      lastPath.path.lastIndexOf(']')
    ),
    10
  );

  return {
    value: lastPath.value,
    itemIndex: index,
    objectPath
  };
};

export const makeBreadcrumbFromValue = (
  value: string,
  data: CascaderOption[]
) => {
  const path: { label: string; value: string }[] = [];

  const buildArray = (
    cascaderData: CascaderOption[],
    searchValue: string
  ): CascaderOption | null => {
    for (let i = 0; i < cascaderData.length; i++) {
      const item = cascaderData[i];

      path.push({
        label: item.label,
        value: item.value
      });

      if (item.value === searchValue) {
        return item;
      }

      if (item.options) {
        const found = buildArray(item.options, searchValue);
        if (found) {
          return found;
        }
      }

      path.pop();
    }

    return null;
  };

  buildArray(data, value);

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
