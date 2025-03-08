import { Box } from '@src/box';
import { useEffect, useRef } from 'react';
import { prefixClassName } from '@src/utils';
import { CascaderDropdownItem } from './cascader-dropdown-item';
import { useCascaderDropdownContext } from './use-value';

export const CascaderDropdownList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { rootNode, foldersSelectionPath } = useCascaderDropdownContext();

  useEffect(() => {
    if (containerRef.current) {
      const selectedItem = containerRef.current.querySelector('[data-is-selected="true"]');
      if (selectedItem) selectedItem.scrollIntoView();
    }
  }, []);

  return (
    <Box
      as="ul"
      css={{ paddingTop: '$4', paddingBottom: '$4' }}
      ref={containerRef}
      tabIndex={-1}
      className={prefixClassName('cascader-dropdown__list')}
    >
      {foldersSelectionPath.length === 0 && rootNode.children.map((child) => (
        <CascaderDropdownItem key={child.value} node={child} />
      ))}
      {foldersSelectionPath.length > 0 && rootNode.findNode(foldersSelectionPath.at(-1)?.value)?.children.map((child) => (
        <CascaderDropdownItem key={child.value} node={child} />
      ))}
    </Box>
  );
};
