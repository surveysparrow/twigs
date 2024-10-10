import { INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { UnorderedListIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps, formatParagraph } from './commons';

export const UnorderedListTool = ({
  renderButton,
  buttonProps
}: ToolbarButtonProps) => {
  const [active] = useToolbarStore((state) => state.data.isUnOrderedList);
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    if (!active) {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      formatParagraph(editor);
    }
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: handleClick });
  }

  return (
    <IconButton
      icon={<UnorderedListIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={handleClick}
      title={
        active
          ? 'Change formatting from unordered list to paragraph'
          : 'Change formatting to unordered list'
      }
      aria-label={
        active
          ? 'Change formatting from unordered list to paragraph'
          : 'Change formatting to unordered list'
      }
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      {...buttonProps}
    />
  );
};
