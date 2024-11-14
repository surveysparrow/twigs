import { Fragment, ReactNode } from 'react';
import { Box } from '../box';
import { FlattenedData } from './cascader-utils';

export const CascaderSearchListItem = ({
  item,
  searchString
}: {
  item: FlattenedData;
  searchString: string;
}) => {
  if (item.objectPath.length === 1) {
    return (
      <Box>
        {highLight(item.label, searchString)}
        {item.hasOptions && (
          <>
            <BreadCrumbSeparator />
            ...
          </>
        )}
      </Box>
    );
  }
  if (item.objectPath.length > 3) {
    return (
      <Box>
        <Word>
          {item.objectPath[0].label}
          ...
        </Word>
        <BreadCrumbSeparator />
        {highLight(
          item.objectPath[item.objectPath.length - 1].label,
          searchString
        )}
        {item.hasOptions && (
          <>
            <BreadCrumbSeparator />
            ...
          </>
        )}
      </Box>
    );
  }

  return (
    <Box>
      {item.objectPath.slice(0, -1).map(({ label, value }) => (
        <Fragment key={value}>
          <Word>{label}</Word>
          <BreadCrumbSeparator />
        </Fragment>
      ))}
      {highLight(
        item.objectPath[item.objectPath.length - 1].label,
        searchString
      )}
      {item.hasOptions && (
        <>
          <BreadCrumbSeparator />
          ...
        </>
      )}
    </Box>
  );
};

const BreadCrumbSeparator = () => <Box as="span">{' > '}</Box>;

const Word = ({ children }: { children: ReactNode }) => (
  <Box as="span">{children}</Box>
);

const highLight = (text: string, searchValue: string) => {
  const searchIndex = text.toLowerCase().indexOf(searchValue.toLowerCase());

  return (
    <Word>
      {text.slice(0, searchIndex)}
      <Box
        as="span"
        css={{
          fontWeight: '$5',
          backgroundColor: '$primary100',
          borderRadius: '$md'
        }}
      >
        {text.slice(searchIndex, searchIndex + searchValue.length)}
      </Box>
      {text.slice(searchIndex + searchValue.length)}
    </Word>
  );
};
