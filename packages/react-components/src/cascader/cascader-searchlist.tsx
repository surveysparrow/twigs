import { forwardRef, useImperativeHandle, useMemo } from 'react';
import { Box } from '../box';
import { CascaderSearchListItem } from './cascader-searchlist-item';
import { useCascaderValue } from './use-value';
import { CascaderOption } from './cascader';

export const CascaderSearchList = forwardRef(({
  searchValue,
  handleChange
}: {
  searchValue: string;
  handleChange: (value: CascaderOption) => void;
}, ref) => {
  const { flattenedData } = useCascaderValue();

  const searchResults = useMemo(() => {
    const searchString = searchValue.toLowerCase();
    const found = flattenedData.filter((item) => item.label.toLowerCase().includes(searchString));

    return found.map((item) => {
      return {
        ...item,
        breadcrumbComponent: (
          <CascaderSearchListItem item={item} searchString={searchValue} />
        )
      };
    });
  }, [flattenedData, searchValue]);

  useImperativeHandle(ref, () => ({
    searchResults
  }), []);

  return (
    <ul>
      {searchResults.map((item) => (
        <Box
          as="li"
          key={item.value}
          css={{
            padding: '$3 $6',
            color: '$neutral800'
          }}
          onClick={() => handleChange({ label: item.label, value: item.value })}
        >
          {item.breadcrumbComponent}
        </Box>
      ))}
    </ul>
  );
});
