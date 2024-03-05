import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { LinkIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const LinkTool = ({ renderButton }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isLink);
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    if (!active) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<LinkIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
    />
  );
};
