import { ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { KeyboardEvent, useMemo } from 'react';
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
    selectionPath,
    handleChange,
    setPopoverOpen,
    setShouldFocusFirstItemInList,
    setSelectionPath
  } = useCascaderValue();

  const hasOptions = option.options?.length;

  const handleSelection = () => {
    if (pathIndex === 0) {
      setSelectionPath([
        {
          value: option.value,
          path: `${itemIndex}`
        }
      ]);
    } else {
      setSelectionPath([
        ...selectionPath.slice(0, pathIndex),
        {
          value: option.value,
          path: `${selectionPath[pathIndex - 1].path}.options[${itemIndex}]`
        }
      ]);
    }
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
      case 'ArrowRight': {
        if (!hasOptions) break;

        const selectionPathValues = selectionPath.map((item) => item.value);

        if (selectionPathValues.includes(option.value)) {
          const currentElement = e.currentTarget as HTMLLIElement;
          const parentElement = currentElement.parentElement as HTMLUListElement;
          const parentsNextSibling = parentElement.nextElementSibling as HTMLUListElement | null;

          const liInSelection = parentsNextSibling?.querySelector(
            '[data-in-selection="true"]'
          ) as HTMLLIElement | null;
          if (liInSelection) {
            liInSelection.focus();
          } else {
            const firstLi = parentsNextSibling?.firstElementChild as HTMLLIElement | null;
            firstLi?.focus();
          }
        } else {
          setShouldFocusFirstItemInList(true);
          handleSelection();
        }

        break;
      }
      case 'ArrowLeft': {
        const currentElement = e.currentTarget as HTMLLIElement;
        const parentElement = currentElement.parentElement as HTMLUListElement;

        const parentsPreviousSibling = parentElement.previousElementSibling as HTMLUListElement | null;
        if (parentsPreviousSibling) {
          const activeLi = parentsPreviousSibling.querySelector(
            '[data-in-selection="true"]'
          ) as HTMLLIElement | null;
          if (activeLi) {
            activeLi.focus();
          } else {
            (
              parentsPreviousSibling.lastElementChild as HTMLLIElement | null
            )?.focus();
          }
        }
        break;
      }
      case 'ArrowDown': {
        const currentElement = e.currentTarget as HTMLLIElement;
        if (currentElement.nextElementSibling) {
          (currentElement.nextElementSibling as HTMLLIElement).focus();
        }
        break;
      }
      case 'ArrowUp': {
        const currentElement = e.currentTarget as HTMLLIElement;
        if (currentElement.previousElementSibling) {
          (currentElement.previousElementSibling as HTMLLIElement).focus();
        }
        break;
      }
      case ' ': {
        handleSelection();
        break;
      }
      case 'Enter': {
        handleSelection();
        handleChange(option);
        setPopoverOpen(false);
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
      onClick={handleSelection}
      onKeyDown={handleKeyDown}
      highlight={highlight}
      data-is-selected={isSelected}
      data-in-selection={inSelection}
      tabIndex={
        isSelected || selectionPath.at(-1)?.value === option.value ? 0 : -1
      }
      data-value={option.value}
      role="treeitem"
      aria-selected={selectionPath.at(-1)?.value === option.value}
      aria-expanded={hasOptions && inSelection ? 'true' : 'false'}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{
          width: '100%'
        }}
      >
        <Text>{option.label}</Text>
        {hasOptions && <ChevronRightIcon size={20} />}
      </Flex>
    </StyledItem>
  );
};
