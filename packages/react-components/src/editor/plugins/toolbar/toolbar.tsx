import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isParagraphNode,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND
} from 'lexical';

import { $isCodeNode } from '@lexical/code';
import { $isLinkNode } from '@lexical/link';
import { $isHeadingNode } from '@lexical/rich-text';
import React, {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Flex } from '../../../flex';
import { getSelectedNode } from '../../utils/get-selected-node';
import {
  BoldTool,
  CodeBlockTool,
  CodeTool,
  FormatTool,
  ItalicTool,
  LinkTool,
  OrderedListTool,
  UnderlineTool,
  UnorderedListTool
} from './tools';
import { ToolbarContext } from './utils';

export type DefaultToolbarTools =
  | 'format'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'ordered-list'
  | 'unordered-list'
  | 'link'
  | 'codeblock'
  | 'code';

type ToolProps = { editor: LexicalEditor };
type CustomTool = {
  renderComponent: (props: ToolProps) => ReactNode;
};

type TextFormats =
  | 'paragraph'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'code';

export type ToolbarProperties = {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isOrderedList: boolean;
  isUnOrderedList: boolean;
  isLink: boolean;
  isStrikethrough: boolean;
  isSubscript: boolean;
  isSuperscript: boolean;
  isCode: boolean;
  format: TextFormats;
};

export type ToolbarTools = DefaultToolbarTools[] | CustomTool[];

const LowPriority = 1;

const defaultTools: DefaultToolbarTools[] = [
  'format',
  'bold',
  'italic',
  'underline',
  'unordered-list',
  'ordered-list',
  'link',
  'codeblock',
  'code'
];

const toolMapping: Partial<
  Record<DefaultToolbarTools, (props: ToolProps) => ReactNode>
> = {
  format: FormatTool,
  bold: BoldTool,
  italic: ItalicTool,
  underline: UnderlineTool,
  'unordered-list': UnorderedListTool,
  'ordered-list': OrderedListTool,
  codeblock: CodeBlockTool,
  code: CodeTool,
  link: LinkTool
};

export const ToolbarPlugin = ({
  tools = defaultTools,
  children
}: {
  tools?: ToolbarTools;
  children?: ReactNode;
}) => {
  const [editor] = useLexicalComposerContext();

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isOrderedList, setIsOrderedList] = useState(false);
  const [isUnOrderedList, setIsUnOrderedList] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [format, setFormat] = useState<TextFormats>('paragraph');

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element = anchorNode.getKey() === 'root'
        ? anchorNode
        : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          if (type === 'ul') {
            setIsUnOrderedList(true);
            setIsOrderedList(false);
          } else if (type === 'ol') {
            setIsOrderedList(true);
            setIsUnOrderedList(false);
          }
        } else {
          setIsOrderedList(false);
          setIsUnOrderedList(false);
        }

        if ($isHeadingNode(element)) {
          const headingTag = element.getTag();
          setFormat(headingTag);
        }

        if ($isParagraphNode(element)) {
          setFormat('paragraph');
        }

        if ($isCodeNode(element)) {
          setFormat('code');
        }
      }
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsSubscript(selection.hasFormat('subscript'));
      setIsSuperscript(selection.hasFormat('superscript'));
      setIsCode(selection.hasFormat('code'));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        () => {
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        () => {
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  const toolbarContextValue: ToolbarProperties = useMemo(() => {
    return {
      isBold,
      isItalic,
      isOrderedList,
      isUnderline,
      isUnOrderedList,
      format,
      isLink,
      isStrikethrough,
      isSubscript,
      isSuperscript,
      isCode
    };
  }, [
    isBold,
    isItalic,
    isOrderedList,
    isUnderline,
    isUnOrderedList,
    format,
    isLink,
    isStrikethrough,
    isSubscript,
    isSuperscript,
    isCode
  ]);

  return (
    <ToolbarContext.Provider value={toolbarContextValue}>
      {React.Children.toArray(children).length > 0 ? (
        <>{children}</>
      ) : (
        <Flex>
          {tools.map((_item, i) => {
            if ((_item as CustomTool)?.renderComponent) {
              const item = _item as CustomTool;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={i}>{item.renderComponent({ editor })}</Fragment>
              );
            }

            const item = _item as DefaultToolbarTools;
            const Tool = toolMapping[item];
            if (!Tool) return null;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={i}>
                <Tool editor={editor} />
              </Fragment>
            );
          })}
        </Flex>
      )}
    </ToolbarContext.Provider>
  );
};
