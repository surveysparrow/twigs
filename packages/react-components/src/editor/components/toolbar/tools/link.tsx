import { TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LinkIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const LinkTool = ({ renderButton, buttonProps }: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const [active] = useToolbarStore((state) => state.data.isLink);

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
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      onClick={handleClick}
      title={active ? 'Remove link' : 'Convert to link'}
      aria-label={active ? 'Remove link' : 'Convert to link'}
      {...buttonProps}
    />
  );
};
