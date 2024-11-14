import { ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { useMemo } from 'react';
import { Flex } from '../flex';
import { styled } from '../stitches.config';
import { Text } from '../text';
import { CascaderOption } from './cascader';
import { useCascaderValue } from './use-value';

const StyledItem = styled('li', {
  padding: '$3 $6',
  height: '32px',

  '&:hover': {
    backgroundColorOpacity: ['$primary500', 0.1]
  },

  variants: {
    highlight: {
      default: {},
      'current-selection': {
        backgroundColorOpacity: ['$primary500', 0.15]
      },
      'previous-selection': {
        backgroundColorOpacity: ['$primary500', 0.06]
      }
    }
  }
});

export const CascaderListItem = ({
  option,
  pathIndex,
  itemIndex
}: {
  option: CascaderOption;
  pathIndex: number;
  itemIndex: number;
}) => {
  const { selectionPath, setSelectionPath } = useCascaderValue();

  const highlight = useMemo(() => {
    if (
      selectionPath[pathIndex]?.value === option.value
      && pathIndex === selectionPath.length - 1
    ) {
      return 'current-selection';
    }

    if (selectionPath[pathIndex]?.value === option.value) {
      return 'previous-selection';
    }

    return 'default';
  }, [selectionPath, pathIndex, itemIndex]);

  return (
    <StyledItem
      key={option.value}
      onClick={() => {
        if (pathIndex === 0) {
          setSelectionPath([
            {
              value: option.value,
              path: `${itemIndex}`
            }
          ]);
        } else {
          setSelectionPath([
            ...selectionPath.slice(0, pathIndex),
            {
              value: option.value,
              path: `${selectionPath[pathIndex - 1].path}.options[${itemIndex}]`
            }
          ]);
        }
      }}
      highlight={highlight}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{
          width: '100%'
        }}
      >
        <Text>{option.label}</Text>
        {option.options?.length && <ChevronRightIcon size={20} />}
      </Flex>
    </StyledItem>
  );
};
