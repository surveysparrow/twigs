import { get } from 'lodash-es';
import { Box } from '../box';
import { Flex } from '../flex';
import { Text } from '../text';
import { useCascaderValue } from './use-value';

export const CascaderBreadCrumb = () => {
  const { data, currentValueSelectionPath } = useCascaderValue();
  if (currentValueSelectionPath.length === 0) {
    return null;
  }

  return (
    <Flex>
      {currentValueSelectionPath.slice(0, -1).map((path, index) => {
        return (
          <Text
            size="sm"
            css={{
              color: '$neutral800'
            }}
            key={path.value}
          >
            {get(data, path.path)?.label}
            {index < currentValueSelectionPath.length - 2 && (
              <Box as="span" css={{ padding: '0 $1' }}>
                {'>'}
              </Box>
            )}
          </Text>
        );
      })}
    </Flex>
  );
};
