import {
  Fragment, ReactNode
} from 'react';
import { Box } from '../box';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { FlattenedData } from './cascader-utils';

const StyledLi = styled('li', {
  padding: '$3 $6',
  color: '$neutral800',
  height: '32px',
  cursor: 'pointer',

  '&:focus-visible': {
    outlineWidth: '1px'
  },

  '&:hover': {
    backgroundColorOpacity: ['$primary500', 0.1]
  },

  variants: {
    focused: {
      true: {
        outline: '1px solid $colors$primary500',
        backgroundColorOpacity: ['$primary500', 0.1],
        outlineOffset: '-1px'
      }
    }
  }
});

export const CascaderSearchListItem = ({
  item,
  isFocused,
  searchString,
  onClick
}: {
  onClick: () => void;
  isFocused: boolean;
  item: FlattenedData;
  searchString: string;
}) => {
  return (
    <StyledLi
      css={{
        padding: '$3 $6',
        color: '$neutral800'
      }}
      onClick={onClick}
      role="option"
      focused={isFocused}
    >
      <ItemContent item={item} searchString={searchString} />
    </StyledLi>
  );
};

export const ItemContent = ({
  item,
  searchString
}: {
  item: FlattenedData;
  searchString: string;
}) => {
  if (item.objectPath.length === 1) {
    return (
      <Text>
        {highLight(item.label, searchString)}
        {item.hasOptions && (
          <>
            <BreadCrumbSeparator />
            ...
          </>
        )}
      </Text>
    );
  }
  if (item.objectPath.length > 3) {
    return (
      <Text>
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
      </Text>
    );
  }

  return (
    <Text>
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
    </Text>
  );
};

const BreadCrumbSeparator = () => <Box as="span">{' > '}</Box>;

const Word = ({ children }: { children: ReactNode }) => (
  <Box as="span">{children}</Box>
);

const highLight = (text: string, searchValue: string) => {
  const searchIndex = text.toLowerCase().indexOf(searchValue.toLowerCase());

  let paddingRight = '0';
  let paddingLeft = '0';

  if (searchIndex === 0 || text[searchIndex - 1] === ' ') {
    paddingLeft = '$1';
  }
  if (
    searchIndex + searchValue.length === text.length
    || text[searchIndex + searchValue.length] === ' '
  ) {
    paddingRight = '$1';
  }

  return (
    <Word>
      {text.slice(0, searchIndex)}
      <Box
        as="span"
        css={{
          fontWeight: '$5',
          backgroundColor: '$primary100',
          borderRadius: '$md',
          paddingLeft,
          paddingRight
        }}
      >
        {text.slice(searchIndex, searchIndex + searchValue.length)}
      </Box>
      {text.slice(searchIndex + searchValue.length)}
    </Word>
  );
};
