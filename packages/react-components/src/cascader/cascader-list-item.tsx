import { ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { prefixClassName } from '@src/utils';
import React, { KeyboardEvent, useMemo } from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CascaderNode } from './cascader-node';
import { useCascaderValue } from './use-value';

const StyledItem = styled('li', {
  padding: '$3 $6',
  height: '32px',
  outlineColor: '$primary500',
  outlineOffset: '-1px',

  '&:hover': {
    backgroundColorOpacity: ['$primary500', 0.1]
  },

  '&:focus-visible': {
    outlineWidth: '1px'
  },

  variants: {
    highlight: {
      default: {},
      'current-selection': {
        backgroundColorOpacity: ['$primary500', 0.15]
      },
      'previous-selection': {
        backgroundColorOpacity: ['$primary500', 0.06]
      }
    },
    focused: {
      true: {
        outline: '1px solid $colors$primary500',
        backgroundColorOpacity: ['$primary500', 0.1]
      }
    }
  }
});

export const CascaderListItem = ({
  option,
  pathIndex,
  itemIndex,
  isSelected
}: {
  option: CascaderNode;
  pathIndex: number;
  itemIndex: number;
  isSelected: boolean;
}) => {
  const {
    rootNode,
    focusedItem,
    selectionPath,
    handleChange,
    closePopover,
    setSelectedNode,
    setFocusedItem,
    getInputRef
  } = useCascaderValue();

  const hasOptions = option.getChildren()?.length > 0;

  const handleSelection = (isMouseClick = false) => {
    const node = rootNode?.findNode(option.value);
    if (!node) return;

    setSelectedNode(node);
    setFocusedItem({
      node,
      isMouseClick
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const input = getInputRef();
    if (input) {
      input.focus();
    }
    handleSelection(true);
  };

  const highlight = useMemo(() => {
    if (
      selectionPath[pathIndex]?.value === option.value
      && pathIndex === selectionPath.length - 1
    ) {
      return 'current-selection';
    }

    if (selectionPath[pathIndex]?.value === option.value) {
      return 'previous-selection';
    }

    return 'default';
  }, [selectionPath, pathIndex, itemIndex]);

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case ' ': {
        handleSelection();
        break;
      }
      case 'Enter': {
        handleSelection();
        handleChange(option);
        closePopover();
        break;
      }
      default: {
        break;
      }
    }
  };

  const inSelection = selectionPath[pathIndex]?.value === option.value;

  return (
    <StyledItem
      key={option.value}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      highlight={highlight}
      data-is-selected={isSelected}
      data-in-selection={inSelection}
      data-value={option.value}
      role="treeitem"
      aria-selected={selectionPath.at(-1)?.value === option.value}
      aria-expanded={hasOptions && inSelection ? 'true' : 'false'}
      focused={focusedItem?.node?.value === option.value && !focusedItem.isMouseClick}
      className={prefixClassName('cascader__list-item')}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{
          width: '100%'
        }}
        className={prefixClassName('cascader__list-item-content')}
      >
        <Text className={prefixClassName('cascader__list-item-text')}>
          {option.label}
        </Text>
        {hasOptions && (
          <ChevronRightIcon
            size={20}
            className={prefixClassName('cascader__list-item-icon')}
          />
        )}
      </Flex>
    </StyledItem>
  );
};
