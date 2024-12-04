import { Button } from '../button';
import { Flex } from '../flex';
import { CascaderOption } from './cascader';
import { SelectionPath } from './cascader-provider';
import { useCascaderValue } from './use-value';

export const CascaderFooter = ({
  handleChange
}: {
  handleChange: (value: CascaderOption, selectionPath: SelectionPath[]) => void;
}) => {
  const { selectionPath, selectedNode, closePopover } = useCascaderValue();

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
        disabled={!selectedNode}
        onClick={() => {
          if (selectionPath.length > 0) {
            const selectedItem = selectionPath[selectionPath.length - 1];
            handleChange(selectedItem, selectionPath);
          }
        }}
      >
        Choose
      </Button>
    </Flex>
  );
};
