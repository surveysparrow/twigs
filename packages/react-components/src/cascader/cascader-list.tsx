import { prefixClassName } from '@src/utils';
import { ComponentProps, useEffect, useRef } from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { CascaderListItem } from './cascader-list-item';
import { useCascaderValue } from './use-value';

const StyledUl = styled('ul', {
  flex: 1,
  minWidth: '260px',
  paddingTop: '$5',
  position: 'relative',

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
    rootNode, value, selectionPath, listingSelectionPath
  } = useCascaderValue();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (containerRef.current) {
        const selectedItem = containerRef.current!.querySelector(
          '[data-is-selected="true"]'
        ) as HTMLElement | null;

        if (selectedItem) {
          selectedItem.scrollIntoView();
        }
      }
    });
  }, []);

  return (
    <Flex
      ref={containerRef}
      css={{
        overflow: 'auto',
        maxHeight: '320px'
      }}
      className={prefixClassName('cascader__data')}
    >
      <ListContainer withRightBorder={selectionPath.length > 0}>
        {rootNode?.getChildren().map((option, i) => (
          <CascaderListItem
            key={option.value}
            option={option}
            itemIndex={i}
            pathIndex={0}
            isSelected={value?.value === option.value}
          />
        ))}
      </ListContainer>
      {listingSelectionPath.map((sPath, pathIndex) => (
        <ListContainer
          key={`${sPath.value}`}
          withRightBorder={pathIndex < selectionPath.length - 1}
        >
          {rootNode
            ?.findNode(sPath.value)
            ?.getChildren()
            ?.map((option, j) => (
              <CascaderListItem
                key={option.value}
                option={option}
                itemIndex={j}
                pathIndex={pathIndex + 1}
                isSelected={value?.value === option.value}
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
      const containerWidth = containerRef.current.getBoundingClientRect().width;

      if (parentRight < elementLeft + containerWidth / 2) {
        containerRef.current.scrollIntoView();
      }
    }
  }, []);

  return (
    <StyledUl
      {...props}
      ref={containerRef}
      role="group"
      tabIndex={-1}
      className={prefixClassName('cascader__data-list')}
    >
      {children}
    </StyledUl>
  );
};
