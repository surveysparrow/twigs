import { UnderlineIcon } from '@sparrowengg/twigs-react-icons';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { IconButton } from '@src/button';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const UnderlineTool = ({ renderButton }: ToolbarButton) => {
  const active = useToolbarContext((state) => state.isUnderline);
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<UnderlineIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
    />
  );
};
