import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { CodeIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@sparrowengg/twigs-react';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const CodeTool = ({ renderButton, buttonProps }: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const [active] = useToolbarStore((state) => state.data.isCode);

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
      data-tool="code"
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      title={
        active ? 'Clear inline code formatting' : 'Format text to inline code'
      }
      aria-label={
        active ? 'Clear inline code formatting' : 'Format text to inline code'
      }
      {...buttonProps}
    />
  );
};
