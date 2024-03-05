import { CodeIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const CodeTool = ({ renderButton }: ToolbarButton) => {
  const [editor] = useLexicalComposerContext();

  const active = useToolbarContext((state) => state.isCode);
  const handleClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code');
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<CodeIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
    />
  );
};
