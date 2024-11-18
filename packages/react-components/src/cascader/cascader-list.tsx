import { get } from 'lodash-es';
import {
  ComponentProps,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { CascaderListItem } from './cascader-list-item';
import { useCascaderValue } from './use-value';

const StyledUl = styled('ul', {
  flex: 1,
  minWidth: '260px',

  variants: {
    withRightBorder: {
      true: {
        borderRight: '1px solid $colors$neutral100'
      }
    }
  }
});

export interface CascaderListRef {
  focusFirstItem: () => void;
}

export const CascaderList = forwardRef<CascaderListRef>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    data, currentValue, selectionPath, listingSelectionPath
  } = useCascaderValue();

  const focusFirstItem = () => {
    if (containerRef.current) {
      const selectedItem = containerRef.current.querySelector(
        '[data-is-selected="true"]'
      ) as HTMLElement | null;

      if (selectedItem) {
        selectedItem.focus();
        return;
      }

      const firstItem = containerRef.current.querySelector(
        'ul li'
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

  useEffect(() => {
    if (containerRef.current) {
      const selectedItem = containerRef.current.querySelector(
        '[data-is-selected="true"]'
      ) as HTMLElement | null;

      if (selectedItem) {
        requestAnimationFrame(() => {
          selectedItem.scrollIntoView({
            behavior: 'instant'
          });
        });
      }
    }
  }, []);

  return (
    <Flex
      ref={containerRef}
      css={{
        overflow: 'auto'
      }}
    >
      <ListContainer withRightBorder={selectionPath.length > 0}>
        {data?.map((option, i) => (
          <CascaderListItem
            key={option.value}
            option={option}
            itemIndex={i}
            pathIndex={0}
            isSelected={currentValue?.value === option.value}
          />
        ))}
      </ListContainer>
      {listingSelectionPath.map((sPath, pathIndex) => (
        <ListContainer
          key={`${sPath.path}`}
          withRightBorder={pathIndex < selectionPath.length - 1}
        >
          {get(data, sPath.path)?.options?.map((option, j) => (
            <CascaderListItem
              key={option.value}
              option={option}
              itemIndex={j}
              pathIndex={pathIndex + 1}
              isSelected={currentValue?.value === option.value}
            />
          ))}
        </ListContainer>
      ))}
    </Flex>
  );
});

const ListContainer = ({
  children,
  ...props
}: ComponentProps<typeof StyledUl>) => {
  const { shouldFocusFirstItemInList, setShouldFocusFirstItemInList } = useCascaderValue();
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (shouldFocusFirstItemInList && containerRef.current) {
      containerRef.current.querySelector('li')?.focus();
      setShouldFocusFirstItemInList(false);
    }
  }, []);

  return (
    <StyledUl {...props} ref={containerRef}>
      {children}
    </StyledUl>
  );
};
