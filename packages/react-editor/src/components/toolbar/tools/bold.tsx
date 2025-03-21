import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { BoldIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@sparrowengg/twigs-react';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const BoldTool = ({ renderButton, buttonProps }: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const [active] = useToolbarStore((state) => state.data.isBold);

  const handleClick = () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<BoldIcon />}
      variant={active ? 'solid' : 'ghost'}
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      color="default"
      onClick={handleClick}
      title={active ? 'Clear bold formatting' : 'Format text to bold'}
      data-tool="bold"
      aria-label={active ? 'Clear bold formatting' : 'Format text to bold'}
      {...buttonProps}
    />
  );
};
