import { get } from 'lodash-es';
import { ComponentProps, useEffect, useRef } from 'react';
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

export const CascaderList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    data, currentValue, selectionPath, listingSelectionPath
  } = useCascaderValue();

  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        const selectedItem = containerRef.current!.querySelector(
          '[data-is-selected="true"]'
        ) as HTMLElement | null;

        if (selectedItem) {
          selectedItem.scrollIntoView();
        }
      });
    }
  }, []);

  return (
    <Flex
      ref={containerRef}
      css={{
        overflow: 'auto',
        maxHeight: '320px'
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
};

const ListContainer = ({
  children,
  ...props
}: ComponentProps<typeof StyledUl>) => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentNode as HTMLElement;
      const elementLeft = containerRef.current.getBoundingClientRect().left;
      const parentRight = parent.getBoundingClientRect().width;

      if (
        parentRight
        < elementLeft + containerRef.current.getBoundingClientRect().width / 2
      ) {
        containerRef.current.scrollIntoView();
      }
    }
  }, []);

  return (
    <StyledUl {...props} ref={containerRef} role="group" tabIndex={-1}>
      {children}
    </StyledUl>
  );
};
