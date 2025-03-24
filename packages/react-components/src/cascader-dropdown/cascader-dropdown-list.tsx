import { Box } from '@src/box';
import { useEffect, useRef } from 'react';
import { prefixClassName } from '@src/utils';
import { CascaderDropdownItem } from './cascader-dropdown-item';
import { useCascaderDropdownContext } from './use-value';
import { optionTypes, initialFilterValueSelectorValue } from './helpers/cascader-dropdown-constants';
import CascaderDropdownValueSelector from './cascader-dropdown-value-selector';

export const CascaderDropdownList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    rootNode, foldersSelectionPath, selectedNode, focusPreviousColumn, handleChange
  } = useCascaderDropdownContext();

  useEffect(() => {
    if (containerRef.current) {
      const selectedItem = containerRef.current.querySelector('[data-is-selected="true"]');
      if (selectedItem) selectedItem.scrollIntoView();
    }
  }, []);

  if (selectedNode?.getType() === optionTypes.VALUE_SELECTOR) {
    return (
      <CascaderDropdownValueSelector
        hasOperator={false}
        onApply={(value) => {
          handleChange(selectedNode, {
            ...initialFilterValueSelectorValue,
            [selectedNode.options.dataType]: value
          });
        }}
        onCancel={focusPreviousColumn}
        selectedNode={selectedNode}
      />
    );
  }

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
