import { get } from 'lodash-es';
import { Flex } from '../flex';
import { CascaderListItem } from './cascader-list-item';
import { useCascaderValue } from './use-value';
import { styled } from '../stitches.config';

const StyledUl = styled('ul', {
  flex: 1,

  variants: {
    withRightBorder: {
      true: {
        borderRight: '1px solid $colors$neutral100'
      }
    }
  }
});

export const CascaderList = () => {
  const { data, selectionPath, listingSelectionPath } = useCascaderValue();
  return (
    <Flex>
      <StyledUl withRightBorder={selectionPath.length > 0}>
        {data?.map((option, i) => (
          <CascaderListItem
            key={option.value}
            option={option}
            itemIndex={i}
            pathIndex={0}
          />
        ))}
      </StyledUl>
      {listingSelectionPath.map((sPath, pathIndex) => (
        <StyledUl
          key={`${sPath.path}`}
          withRightBorder={pathIndex < selectionPath.length - 1}
        >
          {get(data, sPath.path)?.options?.map((option, j) => (
            <CascaderListItem
              key={option.value}
              option={option}
              itemIndex={j}
              pathIndex={pathIndex + 1}
            />
          ))}
        </StyledUl>
      ))}
    </Flex>
  );
};
