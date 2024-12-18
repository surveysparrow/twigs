import { Button } from '../button';
import { Flex } from '../flex';
import { CascaderOption } from './cascader';
import { CascaderItem } from './cascader-provider';
import { useCascaderValue } from './use-value';

export const CascaderFooter = ({
  handleChange
}: {
  handleChange: (value: CascaderOption, selectionPath: CascaderItem[]) => void;
}) => {
  const {
    selectionPath,
    componentProps,
    getInputRef,
    selectedNode,
    closePopover
  } = useCascaderValue();

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
        onKeyDown={(e) => {
          if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            const input = getInputRef();
            if (input) {
              input.focus();
            }
          }
        }}
        onClick={() => {
          closePopover();
        }}
      >
        {componentProps.cancelButtonText}
      </Button>
      <Button
        size="md"
        variant="ghost"
        color="primary"
        disabled={!selectedNode}
        onClick={() => {
          if (selectedNode) {
            handleChange(selectedNode.getData(), selectionPath);
          }
        }}
      >
        {componentProps.chooseButtonText}
      </Button>
    </Flex>
  );
};
