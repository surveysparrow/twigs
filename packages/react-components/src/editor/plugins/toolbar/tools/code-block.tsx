import { $createCodeNode } from '@lexical/code';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $setBlocksType } from '@lexical/selection';
import { CodeBlockIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection
} from 'lexical';
import clsx from 'clsx';
import { useToolbarStore } from '../../toolbar-context/store';
import { ToolbarButtonProps } from './commons';

export const CodeBlockTool = ({
  renderButton,
  buttonProps
}: ToolbarButtonProps) => {
  const [editor] = useLexicalComposerContext();
  const format = useToolbarStore((state) => state.data.format);

  const active = format === 'code';

  const formatCode = () => {
    editor.update(() => {
      let selection = $getSelection();

      if (active) {
        $setBlocksType(selection, () => $createParagraphNode());
        return;
      }

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
      className={clsx('twigs-editor-tool-button', {
        'twigs-editor-tool-button--active': active
      })}
      onClick={formatCode}
      title={
        active ? 'Convert code block to paragraph' : 'Convert to code block'
      }
      aria-label={
        active ? 'Convert code block to paragraph' : 'Convert to code block'
      }
      {...buttonProps}
    />
  );
};
