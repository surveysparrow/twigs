import { $isCodeNode } from '@lexical/code';
import { $isLinkNode } from '@lexical/link';
import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  mergeRegister
} from '@lexical/utils';
import {
  $getSelection,
  $isElementNode,
  $isParagraphNode,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  ElementFormatType,
  SELECTION_CHANGE_COMMAND
} from 'lexical';
import { ReactNode, useCallback, useEffect } from 'react';
import { getSelectedNode } from '../../utils/get-selected-node';
import { useToolbarStore, ToolbarStoreProvider } from './store';
import { TextAlignments, textAlignments } from './utils';

const LowPriority = 1;

export const ToolbarContextPlugin = ({
  children
}: {
  children?: ReactNode;
}) => {
  return (
    <ToolbarStoreProvider>
      <ToolbarContextConsumer>{children}</ToolbarContextConsumer>
    </ToolbarStoreProvider>
  );
};

export const ToolbarContextConsumer = ({
  children
}: {
  children?: ReactNode;
}) => {
  const [editor] = useLexicalComposerContext();
  const updateData = useToolbarStore((state) => state.updateData);

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
            updateData({
              isUnOrderedList: true,
              isOrderedList: false
            });
          } else if (type === 'ol') {
            updateData({
              isUnOrderedList: false,
              isOrderedList: true
            });
          }
        } else {
          updateData({
            isUnOrderedList: false,
            isOrderedList: false
          });
        }

        if ($isHeadingNode(element)) {
          const headingTag = element.getTag();
          updateData({
            format: headingTag
          });
        }

        if ($isParagraphNode(element)) {
          updateData({
            format: 'paragraph'
          });
        }

        if ($isCodeNode(element)) {
          updateData({
            format: 'code'
          });
        }
      }

      // Update text format
      updateData({
        isBold: selection.hasFormat('bold'),
        isItalic: selection.hasFormat('italic'),
        isUnderline: selection.hasFormat('underline'),
        isStrikethrough: selection.hasFormat('strikethrough'),
        isSubscript: selection.hasFormat('subscript'),
        isSuperscript: selection.hasFormat('superscript'),
        isCode: selection.hasFormat('code')
      });
      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();

      if ($isLinkNode(parent) || $isLinkNode(node)) {
        updateData({
          isLink: true
        });
      } else {
        updateData({
          isLink: false
        });
      }

      let matchingParent;
      if ($isLinkNode(parent)) {
        // If node is a link, we need to fetch the parent paragraph node to set format
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }

      let formatType: ElementFormatType | null | undefined = null;
      if ($isElementNode(matchingParent)) {
        formatType = matchingParent.getFormatType();
      } else if ($isElementNode(node)) {
        formatType = node.getFormatType();
      } else {
        formatType = parent?.getFormatType();
      }

      updateData({
        textAlign: textAlignments.includes(formatType as any)
          ? (formatType as TextAlignments)
          : 'left'
      });
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

  return children;
};
