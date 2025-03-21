import { toggleLink } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  COMMAND_PRIORITY_HIGH,
  PASTE_COMMAND
} from 'lexical';
import { useEffect } from 'react';
import isURL from 'validator/lib/isURL';

export const ConvertSelectionToLinkOnPastePlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      PASTE_COMMAND,
      (event: ClipboardEvent) => {
        const text = event.clipboardData?.getData('text/plain')!;
        const selection = $getSelection();

        if (
          isURL(text || '')
          && $isRangeSelection(selection)
          && !selection.isCollapsed()
        ) {
          if (!selection.getNodes().some((node) => $isElementNode(node))) {
            toggleLink(text);
            event.preventDefault();
            return true;
          }
        }
        return false;
      },
      COMMAND_PRIORITY_HIGH
    );
  }, []);

  return null;
};
