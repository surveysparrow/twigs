import { BoldIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const BoldTool = ({ renderButton }: ToolbarButton) => {
  const [editor] = useLexicalComposerContext();

  const active = useToolbarContext((state) => state.isBold);
  const handleClick = () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<BoldIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
    />
  );
};
