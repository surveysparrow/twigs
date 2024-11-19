import {
  forwardRef, useImperativeHandle, useMemo, useRef
} from 'react';
import { CascaderOption } from './cascader';
import { CascaderSearchListItem } from './cascader-searchlist-item';
import { useCascaderValue } from './use-value';

export interface CascaderSearchListRef {
  focusFirstItem: () => void;
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

  const searchResults = useMemo(() => {
    const searchString = searchValue.toLowerCase();
    const found = flattenedData.filter((item) => item.label.toLowerCase().includes(searchString));

    return found;
  }, [flattenedData, searchValue]);

  const focusFirstItem = () => {
    if (containerRef.current) {
      const firstItem = containerRef.current.querySelector(
        'li'
      ) as HTMLElement | null;
      if (firstItem) {
        firstItem.focus();
      }
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      focusFirstItem
    }),
    []
  );

  return (
    <ul ref={containerRef} role="listbox" tabIndex={-1}>
      {searchResults.map((item, i) => (
        <CascaderSearchListItem
          onClick={() => handleChange({ label: item.label, value: item.value })}
          item={item}
          searchString={searchValue}
          isFirst={i === 0}
        />
      ))}
    </ul>
  );
});
