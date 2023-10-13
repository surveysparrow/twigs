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

import { $isHeadingNode } from '@lexical/rich-text';
import React, {
  FC,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  Bold,
  Format,
  Image,
  Italic,
  OrderedList,
  Underline,
  UnorderedList
} from './buttons';
import { ToolbarContext } from './utils';
import { Flex } from '../../../flex';

type Tools =
  | 'format'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'ordered-list'
  | 'unordered-list'
  | 'link'
  | 'image';

type ToolProps = { editor: LexicalEditor };
type CustomTool = {
  type: Tools;
  renderComponent: (props: ToolProps) => ReactNode;
};

type TextFormats = 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ToolbarProperties = {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isOrderedList: boolean;
  isUnOrderedList: boolean;
  format: TextFormats;
};

type ToolbarTools = Tools[] | CustomTool[];

const LowPriority = 1;

const defaultTools: Tools[] = [
  'format',
  'bold',
  'italic',
  'underline',
  'unordered-list',
  'ordered-list',
  'image'
];

const toolMapping: Partial<Record<Tools, (props: ToolProps) => ReactNode>> = {
  format: Format,
  bold: Bold,
  italic: Italic,
  underline: Underline,
  'unordered-list': UnorderedList,
  'ordered-list': OrderedList,
  image: Image
};

export const ToolbarPlugin: FC<{
  tools?: ToolbarTools;
  children?: ReactNode;
}> & {
  Bold: typeof Bold;
} = ({ tools = defaultTools, children }) => {
  const [editor] = useLexicalComposerContext();

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isOrderedList, setIsOrderedList] = useState(false);
  const [isUnOrderedList, setIsUnOrderedList] = useState(false);
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
          // setBlockType(type);
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
      }
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      // setIsStrikethrough(selection.hasFormat("strikethrough"));
      // setIsCode(selection.hasFormat("code"));

      // Update links
      // const node = getSelectedNode(selection);
      // const parent = node.getParent();
      // if ($isLinkNode(parent) || $isLinkNode(node)) {
      //   setIsLink(true);
      // } else {
      //   setIsLink(false);
      // }
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
          // setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        () => {
          // setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  const toolbarContextValue = useMemo(() => {
    return {
      isBold,
      isItalic,
      isOrderedList,
      isUnderline,
      isUnOrderedList,
      format
    };
  }, [isBold, isItalic, isOrderedList, isUnderline, isUnOrderedList, format]);

  return (
    <ToolbarContext.Provider value={toolbarContextValue}>
      {React.Children.toArray(children).length > 0 ? (
        <>{children}</>
      ) : (
        <Flex>
          {tools.map((_item, i) => {
            if ((_item as CustomTool)?.type) {
              const item = _item as CustomTool;
              return (
                <Fragment key={i}>{item.renderComponent({ editor })}</Fragment>
              );
            }
            const item = _item as Tools;
            const Tool = toolMapping[item];
            if (!Tool) return null;

            return (
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

ToolbarPlugin.Bold = Bold;
