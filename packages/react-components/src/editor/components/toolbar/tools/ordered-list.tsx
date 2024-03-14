import {
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OrderedListIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const OrderedListTool = ({
  renderButton,
  buttonProps
}: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const active = useToolbarStore((state) => state.data.isOrderedList);

  const handleClick = () => {
    if (!active) {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<OrderedListIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      onClick={handleClick}
      title={
        active
          ? 'Change formatting from ordered list to paragraph'
          : 'Change formatting to ordered list'
      }
      aria-label={
        active
          ? 'Change formatting from ordered list to paragraph'
          : 'Change formatting to ordered list'
      }
      {...buttonProps}
    />
  );
};
