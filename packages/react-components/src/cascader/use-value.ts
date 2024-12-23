import { useContext } from 'react';
import { CascaderContext } from './cascader-provider';

export const useCascaderValue = () => {
  const context = useContext(CascaderContext);

  let listingSelectionPath = context.selectionPath;

  const lastItem = context.rootNode?.findNode(listingSelectionPath.at(-1)?.value);

  if (!lastItem?.getChildren().length) {
    listingSelectionPath = context.selectionPath.slice(0, -1);
  }

  return {
    ...context,
    listingSelectionPath
  };
};
