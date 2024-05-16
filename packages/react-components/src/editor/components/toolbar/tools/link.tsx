import { $createLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LinkIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { ADD_BLANK_LINK } from '@src/editor/utils/commands';
import clsx from 'clsx';
import {
  $createTextNode,
  $getSelection,
  $insertNodes,
  $isRangeSelection
} from 'lexical';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const LinkTool = ({ renderButton, buttonProps }: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const [active] = useToolbarStore((state) => state.data.isLink);

  const handleClick = () => {
    editor.update(() => {
      const selection = $getSelection();
      /**
       * Handle link insertion when there is no selection (cursor blinking at a single point)
       */
      if (selection?.isCollapsed() && $isRangeSelection(selection)) {
        const newLinkNode = $createLinkNode('https://');

        // Completely empty string is not selectable, so we need to add a space.
        // This space will be trimmed in the editor modal
        newLinkNode.append($createTextNode(' '));

        $insertNodes([newLinkNode]);
        newLinkNode.select();

        editor.dispatchCommand(ADD_BLANK_LINK, undefined);

        return;
      }

      if (!active) {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');
      } else {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
      }
    });
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
