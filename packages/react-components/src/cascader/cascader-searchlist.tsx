import { useMemo } from 'react';
import { Box } from '../box';
import { CascaderSearchListItem } from './cascader-searchlist-item';
import { useCascaderValue } from './use-value';

export const CascaderSearchList = ({
  searchValue
}: {
  searchValue: string;
}) => {
  const { flattenedData } = useCascaderValue();

  const searchableList = useMemo(() => {
    return flattenedData.map((item) => ({
      label: item.label,
      value: item.value,
      objectPath: item.objectPath,
      path: item.path,
      breadcrumb: item.objectPath.map(({ label }) => label).join(' > '),
      hasOptions: item.hasOptions
    }));
  }, [flattenedData]);

  const searchResults = useMemo(() => {
    const searchString = searchValue.toLowerCase();
    const found = searchableList.filter((item) => item.label.toLowerCase().includes(searchString));

    return found.map((item) => {
      return {
        ...item,
        breadcrumbComponent: (
          <CascaderSearchListItem item={item} searchString={searchValue} />
        )
      };
    });
  }, [searchableList, searchValue]);

  return (
    <Box>
      {searchResults.map((item) => (
        <Box
          key={item.value}
          css={{
            padding: '$3 $6',
            color: '$neutral800'
          }}
        >
          {item.breadcrumbComponent}
        </Box>
      ))}
    </Box>
  );
};
