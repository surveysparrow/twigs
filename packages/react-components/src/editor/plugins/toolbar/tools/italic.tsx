import { ItalicsIcon } from '@sparrowengg/twigs-react-icons';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { IconButton } from '@src/button';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const ItalicTool = ({ renderButton }: ToolbarButton) => {
  const [editor] = useLexicalComposerContext();
  const active = useToolbarContext((state) => state.isItalic);

  const handleClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<ItalicsIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
    />
  );
};
