import React, {
  Fragment, ReactNode, useEffect, useRef
} from 'react';
import { Box } from '../box';
import { FlattenedData } from './cascader-utils';
import { styled } from '../stitches.config';
import { Text } from '../text';

const StyledLi = styled('li', {
  padding: '$3 $6',
  color: '$neutral800',
  height: '32px',
  outlineColor: '$primary500',
  outlineOffset: '-1px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColorOpacity: ['$primary500', 0.1]
  },

  '&:focus-visible': {
    outlineWidth: '1px'
  }
});

export const CascaderSearchListItem = ({
  item,
  isFirst,
  searchString,
  onClick
}: {
  onClick: () => void;
  item: FlattenedData;
  searchString: string;
  isFirst?: boolean;
}) => {
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isFirst) {
      liRef.current?.setAttribute('tabIndex', '0');
    } else {
      liRef.current?.setAttribute('tabIndex', '-1');
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case 'ArrowDown': {
        const nextSibling = liRef.current
          ?.nextElementSibling as HTMLLIElement | null;
        if (nextSibling) {
          liRef.current?.removeAttribute('tabIndex');
          nextSibling.setAttribute('tabIndex', '0');
          nextSibling.focus();
        }
        break;
      }
      case 'ArrowUp': {
        const previousSibling = liRef.current
          ?.previousElementSibling as HTMLLIElement | null;
        if (previousSibling) {
          liRef.current?.setAttribute('tabIndex', '-1');
          previousSibling.setAttribute('tabIndex', '0');
          previousSibling.focus();
        }
        break;
      }
      case 'Enter':
      case ' ': {
        onClick();
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <StyledLi
      css={{
        padding: '$3 $6',
        color: '$neutral800'
      }}
      onClick={onClick}
      ref={liRef}
      onKeyDown={handleKeyDown}
      role="option"
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
