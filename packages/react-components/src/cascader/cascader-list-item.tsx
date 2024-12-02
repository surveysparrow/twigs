import { ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import React, { KeyboardEvent, useMemo } from 'react';
import { prefixClassName } from '@src/utils';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CascaderOption } from './cascader';
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
  option: CascaderOption;
  pathIndex: number;
  itemIndex: number;
  isSelected: boolean;
}) => {
  const {
    focusedItem,
    selectionPath,
    handleChange,
    closePopover,
    setSelectionPath,
    setFocusedItem,
    getInputRef
  } = useCascaderValue();

  const hasOptions = option.options?.length;

  const handleSelection = () => {
    if (pathIndex === 0) {
      setSelectionPath([
        {
          value: option.value,
          path: `[${itemIndex}]`
        }
      ]);
      setFocusedItem({
        value: option.value,
        itemIndex,
        objectPath: '',
        isMouseClick: true
      });
    } else {
      setSelectionPath([
        ...selectionPath.slice(0, pathIndex),
        {
          value: option.value,
          path: `${selectionPath[pathIndex - 1].path}.options[${itemIndex}]`
        }
      ]);
      setFocusedItem({
        value: option.value,
        itemIndex,
        objectPath: `${selectionPath[pathIndex - 1].path}.options`,
        isMouseClick: true
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const input = getInputRef();
    if (input) {
      input.focus();
    }
    handleSelection();
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
      focused={focusedItem?.value === option.value && !focusedItem.isMouseClick}
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
