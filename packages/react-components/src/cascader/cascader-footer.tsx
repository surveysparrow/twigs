import { get } from 'lodash-es';
import { Button } from '../button';
import { Flex } from '../flex';
import { useCascaderValue } from './use-value';
import { CascaderOption } from './cascader';

export const CascaderFooter = ({
  handleChange
}: {
  handleChange: (value: CascaderOption) => void;
}) => {
  const { data, selectionPath, closePopover } = useCascaderValue();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      css={{
        padding: '$4 $6',
        width: '100%',
        borderTop: '1px solid $colors$neutral100'
      }}
    >
      <Button
        size="md"
        variant="ghost"
        color="default"
        onClick={() => {
          closePopover();
        }}
      >
        Cancel
      </Button>
      <Button
        size="md"
        variant="ghost"
        color="primary"
        onClick={() => {
          if (selectionPath.length > 0) {
            const selectedItem = get(data, selectionPath.at(-1)!.path);
            handleChange(selectedItem);
          }
        }}
      >
        Choose
      </Button>
    </Flex>
  );
};
