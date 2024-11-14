import { get } from 'lodash-es';
import { useContext } from 'react';
import { CascaderOption } from './cascader';
import { CascaderContext } from './cascader-provider';

export const useCascaderValue = () => {
  const context = useContext(CascaderContext);

  let listingSelectionPath = context.selectionPath;

  const lastItem = get(
    context.data,
    context.selectionPath[context.selectionPath.length - 1]?.path
  ) as CascaderOption;

  if (!lastItem?.options) {
    listingSelectionPath = context.selectionPath.slice(0, -1);
  }

  return {
    data: context.data,
    selectionPath: context.selectionPath,
    listingSelectionPath,
    flattenedData: context.flattenedData,
    setSelectionPath: context.setSelectionPath
  };
};
