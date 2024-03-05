import { $createCodeNode } from '@lexical/code';
import { $setBlocksType } from '@lexical/selection';
import { CodeBlockIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import { $getSelection, $isRangeSelection } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolbarContext } from '../utils';
import { ToolbarButton } from './commons';

export const CodeBlockTool = ({ renderButton }: ToolbarButton) => {
  const format = useToolbarContext((state) => state.format);
  const [editor] = useLexicalComposerContext();

  const active = format === 'code';

  const formatCode = () => {
    editor.update(() => {
      let selection = $getSelection();

      if (selection !== null) {
        if (selection.isCollapsed()) {
          $setBlocksType(selection, () => $createCodeNode());
        } else {
          const textContent = selection.getTextContent();
          const codeNode = $createCodeNode();
          selection.insertNodes([codeNode]);
          selection = $getSelection();
          if ($isRangeSelection(selection)) {
            selection.insertRawText(textContent);
          }
        }
      }
    });
  };

  if (renderButton) {
    return renderButton({ editor, active, onChange: formatCode });
  }

  return (
    <IconButton
      icon={<CodeBlockIcon />}
      variant={active ? 'solid' : 'ghost'}
      color="default"
      onClick={formatCode}
    />
  );
};
