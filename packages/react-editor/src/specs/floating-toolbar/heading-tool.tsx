import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection } from 'lexical';
import { $createHeadingNode } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';

export const HeadingTool = () => {
  const [editor] = useLexicalComposerContext();

  return (
    <button
      type="button"
      onClick={() => {
        editor.update(() => {
          const selection = $getSelection();

          if ($isRangeSelection(selection)) {
            $setBlocksType(selection, () => $createHeadingNode('h2'));
          }
        });
      }}
    >
      h2
    </button>
  );
};
