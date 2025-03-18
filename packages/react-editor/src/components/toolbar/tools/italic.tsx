import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { IconButton } from '@sparrowengg/twigs-react';
import { ItalicsIcon } from '@sparrowengg/twigs-react-icons';
import clsx from 'clsx';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const ItalicTool = ({
  renderButton,
  buttonProps
}: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const [active] = useToolbarStore((state) => state.data.isItalic);

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
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      onClick={handleClick}
      title={active ? 'Clear italics formatting' : 'Format text to italics'}
      aria-label={
        active ? 'Clear italics formatting' : 'Format text to italics'
      }
      {...buttonProps}
    />
  );
};
