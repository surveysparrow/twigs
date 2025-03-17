import { Text } from '@src/text';
import { prefixClassName } from '@src/utils';
import { ChevronRightIcon } from '@sparrowengg/twigs-react-icons';
import { Box } from '@src/box';
import { useCascaderDropdownContext } from './use-value';
import { CascaderDropdownNode } from './cascader-dropdown-node';
import { StyledItem } from './styled/StyledItem';
import { optionTypes } from './helpers/cascader-dropdown-constants';

export const CascaderDropdownItem = ({ node }: { node: CascaderDropdownNode }) => {
  const {
    selectedNode, setSelectedNode, setFocusedNode, focusedNode, handleChange
  } = useCascaderDropdownContext();

  const selectNode = () => {
    if (node.getChildren().length === 0 && node.getType() !== optionTypes.VALUE_SELECTOR) {
      handleChange(node);
      return;
    }
    setSelectedNode(node);
    setFocusedNode(node.getChildren().at(0) ?? node);
  };

  const onMouseEnter = () => {
    setFocusedNode(node);
  };

  const onClick = () => {
    selectNode();
  };

  return (
    <StyledItem
      className={prefixClassName('cascader-dropdown__item')}
      onClick={onClick}
      hovered={focusedNode?.value === node.value}
      data-is-focused={focusedNode?.value === node.value}
      data-is-selected={selectedNode?.value === node.value}
      selected={selectedNode?.value === node.value}
      onMouseEnter={onMouseEnter}
      css={{
        justifyContent: 'space-between'
      }}
    >
      <Text css={{ color: '$neutral900' }} className={prefixClassName('cascader-dropdown__item-text')}>{node.label}</Text>
      {(node.getChildren().length > 0 || node.getType() === optionTypes.VALUE_SELECTOR) && (
        <Box
          css={{
            lineHeight: '0', color: '$neutral600', minWidth: '$5'
          }}
          className={prefixClassName('cascader-dropdown__item-icon')}
        >
          <ChevronRightIcon size={20} />
        </Box>
      )}
    </StyledItem>
  );
};
