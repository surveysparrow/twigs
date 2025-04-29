import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHeadingNode, HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  IconButton
} from '@sparrowengg/twigs-react';
import { TextFormatIcon } from '@sparrowengg/twigs-react-icons';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection
} from 'lexical';
import React, { ComponentProps } from 'react';
import { useToolbarStore } from '../../toolbar-context/store';
import { TextFormats } from '../../toolbar-context/utils';
import { RenderButtonProps, ToolbarButtonProps } from './commons';

const formatMapping = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6'
} as const;

export type FormatToolProps = Omit<ToolbarButtonProps, 'renderButton'> & {
  renderButton?: (
    props: Omit<RenderButtonProps, 'onChange' | 'active'> & {
      onChange: (type: keyof typeof formatMapping) => void;
      active: TextFormats;
    }
  ) => React.ReactNode;
  dropdownMenuProps?: Partial<ComponentProps<typeof DropdownMenu>>;
  dropdownMenuTriggerProps?: Partial<
    ComponentProps<typeof DropdownMenuTrigger>
  >;
  dropdownMenuTriggerButtonProps?: Partial<ComponentProps<typeof IconButton>>;
  dropdownMenuContentProps?: Partial<
    ComponentProps<typeof DropdownMenuContent>
  >;
  dropdownMenuItemProps?:
    | Partial<ComponentProps<typeof DropdownMenuItem>>
    | ((args: {
        type: keyof typeof formatMapping;
        formatText: (formatType: keyof typeof formatMapping) => void;
      }) => Partial<ComponentProps<typeof DropdownMenuItem>>);
  renderDropdownTrigger?: () => React.ReactNode;
};

export const FormatTool = ({
  renderButton,
  dropdownMenuProps,
  dropdownMenuContentProps,
  dropdownMenuItemProps,
  dropdownMenuTriggerProps,
  dropdownMenuTriggerButtonProps,
  renderDropdownTrigger
}: FormatToolProps) => {
  const [editor] = useLexicalComposerContext();
  const [format] = useToolbarStore((state) => state.data.format);

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
    return renderButton({ editor, active: format, onChange: formatText });
  }

  return (
    <DropdownMenu {...dropdownMenuProps}>
      <DropdownMenuTrigger asChild {...dropdownMenuTriggerProps}>
        {renderDropdownTrigger ? (
          renderDropdownTrigger()
        ) : (
          <IconButton
            icon={<TextFormatIcon />}
            variant="ghost"
            color="default"
            className="twigs-editor-tool-button"
            data-tool="format"
            {...dropdownMenuTriggerButtonProps}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="twigs-editor-toolbar__format-options"
        {...dropdownMenuContentProps}
      >
        <DropdownMenuItem
          onClick={formatParagraph}
          {...(typeof dropdownMenuItemProps === 'function'
            ? dropdownMenuItemProps({ type: 'paragraph', formatText })
            : dropdownMenuItemProps)}
        >
          {paragraph}
        </DropdownMenuItem>
        {(Object.keys(headings) as unknown as (keyof typeof headings)[]).map(
          (item) => (
            <DropdownMenuItem
              onClick={() => formatHeading(item)}
              key={item}
              {...(typeof dropdownMenuItemProps === 'function'
                ? dropdownMenuItemProps({ type: item, formatText })
                : dropdownMenuItemProps)}
            >
              {formatMapping[item]}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
