import React from 'react';
import { HeadingTagType, $createHeadingNode } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@src/dropdown';
import { TextFormatIcon } from '@sparrowengg/twigs-react-icons';
import { IconButton } from '@src/button';
import {
  $getSelection,
  $isRangeSelection,
  $createParagraphNode
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ToolbarButtonProps, RenderButtonProps } from './commons';
import { useToolbarStore } from '../../toolbar-context/store';
import { TextFormats } from '../../toolbar-context/utils';

const formatMapping = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6'
} as const;

export const FormatTool = ({
  renderButton
}: Omit<ToolbarButtonProps, 'renderButton'> & {
  renderButton?: (
    props: Omit<RenderButtonProps, 'onChange' | 'active'> & {
      onChange: (type: keyof typeof formatMapping) => void;
      active: TextFormats;
    }
  ) => React.ReactNode;
}) => {
  const [editor] = useLexicalComposerContext();
  const format = useToolbarStore((state) => state.data.format);

  const formatText = (type: keyof typeof formatMapping) => {
    if (type === 'paragraph') {
      formatParagraph();
    } else {
      formatHeading(type);
    }
  };

  const formatHeading = (headingSize: HeadingTagType) => {
    if (headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const { paragraph, ...headings } = formatMapping;

  if (renderButton) {
    renderButton({ editor, active: format, onChange: formatText });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton
          icon={<TextFormatIcon />}
          variant="ghost"
          color="default"
          className="twigs-editor-tool-button"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={formatParagraph}>
          {paragraph}
        </DropdownMenuItem>
        {(Object.keys(headings) as unknown as (keyof typeof headings)[]).map(
          (item) => (
            <DropdownMenuItem onClick={() => formatHeading(item)} key={item}>
              {formatMapping[item]}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
