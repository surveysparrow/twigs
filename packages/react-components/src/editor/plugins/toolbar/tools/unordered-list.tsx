import {
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND
} from '@lexical/list';
import { UnorderedListIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const UnorderedListTool = ({ renderButton }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isUnOrderedList);
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    if (!active) {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<UnorderedListIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
    />
  );
};
