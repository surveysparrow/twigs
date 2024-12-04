import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import { prefixClassName } from '@src/utils';
import { createPortal } from 'react-dom';
import { CascaderOption } from './cascader';
import { CascaderSearchListItem } from './cascader-searchlist-item';
import { useCascaderValue } from './use-value';
import { styled } from '../stitches.config';
import {
  buildBreadcrumbFromValue,
  buildSelectionPath,
  stringSearchFlattenedData
} from './cascader-utils';
import { SelectionPath } from './cascader-provider';

const StyledUl = styled('ul', {
  maxHeight: '320px',
  overflowY: 'auto'
});

export interface CascaderSearchListRef {
  focusNextItem: () => void;
  focusPreviousItem: () => void;
  handleSelect: () => void;
}

interface CascaderSearchListProps {
  searchValue: string;
  handleChange: (value: CascaderOption, selectionPath: SelectionPath[]) => void;
}

export const CascaderSearchList = forwardRef<
  CascaderSearchListRef,
  CascaderSearchListProps
>(({ searchValue, handleChange }, ref) => {
  const {
    id, data, rootNode, flattenedData
  } = useCascaderValue();

  const containerRef = useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const searchResults = useMemo(() => {
    setFocusedIndex(0);
    return stringSearchFlattenedData(flattenedData, searchValue);
  }, [flattenedData, searchValue]);

  const focusNextItem = () => {
    if (focusedIndex < searchResults.length - 1) {
      setFocusedIndex(focusedIndex + 1);
    }
  };

  const focusPreviousItem = () => {
    if (focusedIndex > 0) {
      setFocusedIndex(focusedIndex - 1);
    }
  };

  const handleSelect = () => {
    handleChange(
      searchResults[focusedIndex],
      buildSelectionPath(rootNode?.findNode(searchResults[focusedIndex].value))
    );
  };

  useImperativeHandle(
    ref,
    () => ({
      handleSelect,
      focusNextItem,
      focusPreviousItem
    }),
    [focusedIndex]
  );

  useEffect(() => {
    if (containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const focusedItem = containerRef.current.querySelector(
        `[data-index="${focusedIndex}"]`
      );
      if (focusedItem) {
        const focusedItemBounds = focusedItem.getBoundingClientRect();

        if (
          focusedItemBounds.top < containerBounds.top
          || focusedItemBounds.bottom > containerBounds.bottom
        ) {
          focusedItem.scrollIntoView({
            block: 'nearest'
          });
        }
      }
    }
  }, [focusedIndex]);

  const liveElement = useMemo(
    () => document.querySelector(`[id="cascader-${id}-live-region"]`),
    [id]
  );

  const focusedItemBreadcrumb = useMemo(() => {
    const item = searchResults[focusedIndex];
    const path = buildBreadcrumbFromValue(item.value, rootNode!);

    return {
      breadcrumb: path.map(({ label }) => label).join(' > '),
      length: path.length
    };
  }, [focusedIndex, data]);

  return (
    <StyledUl
      ref={containerRef}
      role="listbox"
      tabIndex={-1}
      className={prefixClassName('cascader__search-list')}
    >
      {searchResults.map((item, i) => (
        <CascaderSearchListItem
          onClick={() => handleChange(
            { label: item.label, value: item.value },
            buildSelectionPath(rootNode?.findNode(item.value))
          )}
          item={item}
          searchString={searchValue}
          isFocused={i === focusedIndex}
          index={i}
        />
      ))}
      {liveElement
        && searchResults.length > 0
        && createPortal(
          <>
            <span>
              {`${searchResults[focusedIndex].label}${
                focusedItemBreadcrumb.length > 1
                  ? `(${focusedItemBreadcrumb.breadcrumb})`
                  : ''
              } ${focusedIndex + 1} of ${searchResults.length}`}
            </span>
            <span>
              Use Up and Down arrow keys to navigate. Press Space or Enter to
              select an option
            </span>
          </>,
          liveElement
        )}
    </StyledUl>
  );
});
