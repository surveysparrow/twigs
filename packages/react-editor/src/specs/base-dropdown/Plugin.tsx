/* eslint-disable no-alert */
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isTextNode } from 'lexical';
import { EditorLookupDropdownBase } from '@src/components';
import { getPossibleQueryMatch } from './node';

export const SlashesPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const commands = [
    { label: 'Show alert', value: 'show-alert' },
    { label: 'Show prompt', value: 'show-prompt' },
    { label: 'Show confirm', value: 'show-confirm' }
  ];

  return (
    <EditorLookupDropdownBase
      getResults={(searchString) => {
        return commands.filter((command) => command.label
          .toLowerCase()
          .includes((searchString || '').toLowerCase()));
      }}
      triggerFunction={(text) => getPossibleQueryMatch(text)}
      onMenuItemSelect={(item, closeMenu) => {
        let promptValue: string | null = '';
        // Perform different action based on the selected command
        if (item.data.value === 'show-alert') {
          alert('Alert!');
        } else if (item.data.value === 'show-prompt') {
          promptValue = 'User prompt'; // Playwright doesnt show prompts prompt('Prompt!');
        } else if (item.data.value === 'show-confirm') {
          window.confirm('Confirm!');
        }
        // You can also make changes to the editor content based on a command
        // This can also include inserting custom nodes, such as MentionNode
        editor.update(() => {
          const selection = $getSelection();
          const nodes = selection?.getNodes();
          if (nodes?.[0] && $isTextNode(nodes[0])) {
            if (promptValue) {
              nodes[0].setTextContent(promptValue);
            } else {
              nodes[0].setTextContent('');
            }
          }
        });
        closeMenu?.();
        // Return true means that we don't want to perform the default action after menu item selection
        return true;
      }}
    />
  );
};
