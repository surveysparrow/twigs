import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';
import { CascaderOption } from './cascader';
import { CascaderSearchListItem } from './cascader-searchlist-item';
import { useCascaderValue } from './use-value';
import { styled } from '../stitches.config';

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
  handleChange: (value: CascaderOption) => void;
}

export const CascaderSearchList = forwardRef<
  CascaderSearchListRef,
  CascaderSearchListProps
>(({ searchValue, handleChange }, ref) => {
  const { flattenedData } = useCascaderValue();
  const containerRef = useRef<HTMLUListElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const searchResults = useMemo(() => {
    setFocusedIndex(0);
    const searchString = searchValue.toLowerCase();
    const found = flattenedData.filter((item) => item.label.toLowerCase().includes(searchString));

    return found;
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
    handleChange(searchResults[focusedIndex]);
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

  return (
    <StyledUl ref={containerRef} role="listbox" tabIndex={-1}>
      {searchResults.map((item, i) => (
        <CascaderSearchListItem
          onClick={() => handleChange({ label: item.label, value: item.value })}
          item={item}
          searchString={searchValue}
          isFocused={i === focusedIndex}
        />
      ))}
    </StyledUl>
  );
});
