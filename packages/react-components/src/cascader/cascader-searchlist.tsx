import { prefixClassName } from '@src/utils';
import { debounce } from 'lodash-es';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { styled } from '../stitches.config';
import { CascaderOption } from './cascader';
import { CascaderItem } from './cascader-provider';
import { CascaderSearchListItem } from './cascader-searchlist-item';
import {
  buildBreadcrumbFromValue,
  buildSelectionPath,
  stringSearchFlattenedNodes
} from './cascader-utils';
import { useCascaderValue } from './use-value';

const StyledUl = styled('ul', {
  maxHeight: '320px',
  overflowY: 'auto'
});

const StyledLoadingIndicator = styled('li', {
  padding: '$3 $6',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$neutral800',
  fontSize: '$sm',
  lineHeight: '$sm'
});

export interface CascaderSearchListRef {
  focusNextItem: () => void;
  focusPreviousItem: () => void;
  handleSelect: () => void;
}

interface CascaderSearchListProps {
  searchValue: string;
  handleChange: (value: CascaderOption, selectionPath: CascaderItem[]) => void;
}

export const CascaderSearchList = forwardRef<
  CascaderSearchListRef,
  CascaderSearchListProps
>(({ searchValue, handleChange }, ref) => {
  const {
    id, data, componentProps, rootNode
  } = useCascaderValue();

  const containerRef = useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);

  const searchResults = useMemo(() => {
    setFocusedIndex(0);
    return stringSearchFlattenedNodes(rootNode, searchValue);
  }, [rootNode, searchValue]);

  const fetchResults = useCallback(
    debounce(
      (
        searchString: string,
        fetchSearchResults = componentProps.fetchSearchOptions
      ) => {
        setSearchResultsLoading(true);
        fetchSearchResults(searchString).finally(() => {
          setSearchResultsLoading(false);
        });
      }
    ),
    []
  );

  useEffect(() => {
    if (searchValue.trim() && componentProps.fetchSearchOptions) {
      fetchResults(searchValue, componentProps.fetchSearchOptions);
    }
  }, [searchValue, componentProps.fetchSearchOptions]);

  const focusNextItem = () => {
    let nextIndex = focusedIndex + 1;
    let nextItem = searchResults[nextIndex];
    while (nextItem && nextItem.disabled) {
      nextItem = searchResults[nextIndex + 1];
      nextIndex++;
    }
    if (nextItem) {
      setFocusedIndex(nextIndex);
    }
  };

  const focusPreviousItem = () => {
    let prevIndex = focusedIndex - 1;
    let prevItem = searchResults[prevIndex];
    while (prevItem && prevItem.disabled) {
      prevItem = searchResults[prevIndex - 1];
      prevIndex--;
    }
    if (prevItem) {
      setFocusedIndex(prevIndex);
    }
  };

  const handleSelect = () => {
    if (searchResults[focusedIndex].disabled) return;
    handleChange(
      searchResults[focusedIndex].getData(),
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
          onClick={() => {
            if (item.disabled) return;
            handleChange(
              item.getData(),
              buildSelectionPath(rootNode?.findNode(item.value))
            );
          }}
          item={item}
          searchString={searchValue}
          isFocused={i === focusedIndex}
          index={i}
        />
      ))}
      {searchResultsLoading && (
        <StyledLoadingIndicator
          role="presentation"
          className={prefixClassName('cascader__search-loading-indicator')}
        >
          {componentProps.searchLoadingIndicator}
        </StyledLoadingIndicator>
      )}
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
