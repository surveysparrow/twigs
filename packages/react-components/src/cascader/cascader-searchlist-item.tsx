import { prefixClassName } from '@src/utils';
import { Fragment, ReactNode } from 'react';
import { Box } from '../box';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CascaderNode } from './cascader-node';

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
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        opacity: 0.6,

        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    }
  }
});

export const CascaderSearchListItem = ({
  item,
  index,
  isFocused,
  searchString,
  onClick
}: {
  onClick: () => void;
  isFocused: boolean;
  item: CascaderNode;
  searchString: string;
  index: number;
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
      className={prefixClassName('cascader__search-list-item')}
      data-index={index}
      disabled={item.disabled}
    >
      <ItemContent item={item} searchString={searchString} />
    </StyledLi>
  );
};

export const ItemContent = ({
  item,
  searchString
}: {
  item: CascaderNode;
  searchString: string;
}) => {
  if (!item.getParent()) {
    return (
      <Text className={prefixClassName('cascader__search-list-text')}>
        {highLight(item.label, searchString)}
        {(item.shouldFetchOptions || item.getChildren().length > 0) && (
          <>
            <BreadCrumbSeparator />
            ...
          </>
        )}
      </Text>
    );
  }

  const ancestors = item.getAncestors();

  if (ancestors.length > 2) {
    return (
      <Text className={prefixClassName('cascader__search-list-text')}>
        <Word>
          {ancestors[0].label}
        </Word>
        <BreadCrumbSeparator />
        <Word>
          ...
        </Word>
        <BreadCrumbSeparator />
        {highLight(
          item.label,
          searchString
        )}
        {(item.shouldFetchOptions || item.getChildren().length > 0) && (
          <>
            <BreadCrumbSeparator />
            ...
          </>
        )}
      </Text>
    );
  }

  return (
    <Text className={prefixClassName('cascader__search-list-text')}>
      {ancestors.map(({ label, value }) => (
        <Fragment key={value}>
          <Word>{label}</Word>
          <BreadCrumbSeparator />
        </Fragment>
      ))}
      {highLight(
        item.label,
        searchString
      )}
      {(item.shouldFetchOptions || item.getChildren().length > 0) && (
        <>
          <BreadCrumbSeparator />
          ...
        </>
      )}
    </Text>
  );
};

const BreadCrumbSeparator = () => (
  <Box
    as="span"
    className={prefixClassName('cascader__search-list-item-separator')}
  >
    {' > '}
  </Box>
);

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
        className={prefixClassName('cascader__search-list-highlighted-text')}
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
