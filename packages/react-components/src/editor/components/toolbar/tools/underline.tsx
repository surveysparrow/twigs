import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { UnderlineIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const UnderlineTool = ({
  renderButton,
  buttonProps
}: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const [active] = useToolbarStore((state) => state.data.isUnderline);

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
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      title={active ? 'Remove underline' : 'Add underline'}
      aria-label={active ? 'Remove underline' : 'Add underline'}
      {...buttonProps}
    />
  );
};
