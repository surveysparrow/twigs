import { $isLinkNode } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isParagraphNode,
  $isRangeSelection,
  $isTextNode,
  COMMAND_PRIORITY_LOW,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND
} from 'lexical';
import React, {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { Box } from '../../../box';
import { getDOMRangeRect } from '../../utils/getDOMRangeRect';
import { getSelectedNode } from '../../utils/getSelectedNode';
import { setFloatingElemPosition } from '../../utils/setFloatingElemPosition';
import { DefaultToolbarTools } from '../toolbar/toolbar';
import {
  Bold,
  Italic,
  Link,
  Strikethrough,
  Subscript,
  Superscript,
  Underline
} from './tools';
import { FloatingToolbarContext, useFloatingToolbarContext } from './utils';
import { Flex } from '../../../flex';

type DefaultFloatingToolbarTools = Extract<
  DefaultToolbarTools,
  | 'bold'
  | 'italic'
  | 'underline'
  | 'link'
  | 'strikethrough'
  | 'subscript'
  | 'superscript'
>;

type ToolProps = { editor: LexicalEditor };

type CustomTool = {
  renderComponent: (props: ToolProps) => ReactNode;
};

const defaultTools: DefaultFloatingToolbarTools[] = [
  'bold',
  'italic',
  'underline',
  'link',
  'strikethrough',
  'subscript',
  'superscript'
];

const toolMapping: Partial<
  Record<DefaultFloatingToolbarTools, (props: ToolProps) => ReactNode>
> = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
  link: Link,
  strikethrough: Strikethrough,
  subscript: Subscript,
  superscript: Superscript
};

export type FloatingToolbarProperties = {
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isLink: boolean;
  isStrikethrough: boolean;
  isSubscript: boolean;
  isSuperscript: boolean;
};

const TextFormatFloatingToolbar = ({
  editor,
  anchorElem,
  children,
  tools = defaultTools
}: {
  editor: LexicalEditor;
  anchorElem: HTMLElement;
  children?: ReactNode;
  tools?: DefaultFloatingToolbarTools[] | CustomTool[];
}): React.JSX.Element => {
  const isLink = useFloatingToolbarContext((state) => state.isLink);
  const popupCharStylesEditorRef = useRef<HTMLDivElement | null>(null);

  function mouseMoveListener(e: MouseEvent) {
    if (
      popupCharStylesEditorRef?.current
      && (e.buttons === 1 || e.buttons === 3)
    ) {
      if (popupCharStylesEditorRef.current.style.pointerEvents !== 'none') {
        const x = e.clientX;
        const y = e.clientY;
        const elementUnderMouse = document.elementFromPoint(x, y);

        if (!popupCharStylesEditorRef.current.contains(elementUnderMouse)) {
          // Mouse is not over the target element => not a normal click, but probably a drag
          popupCharStylesEditorRef.current.style.pointerEvents = 'none';
        }
      }
    }
  }
  function mouseUpListener() {
    if (popupCharStylesEditorRef?.current) {
      if (popupCharStylesEditorRef.current.style.pointerEvents !== 'auto') {
        popupCharStylesEditorRef.current.style.pointerEvents = 'auto';
      }
    }
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (popupCharStylesEditorRef?.current) {
      document.addEventListener('mousemove', mouseMoveListener);
      document.addEventListener('mouseup', mouseUpListener);

      return () => {
        document.removeEventListener('mousemove', mouseMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
      };
    }
  }, [popupCharStylesEditorRef]);

  const updateTextFormatFloatingToolbar = useCallback(() => {
    const selection = $getSelection();

    const popupCharStylesEditorElem = popupCharStylesEditorRef.current;
    const nativeSelection = window.getSelection();

    if (popupCharStylesEditorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();
    if (
      selection !== null
      && nativeSelection !== null
      && !nativeSelection.isCollapsed
      && rootElement !== null
      && rootElement.contains(nativeSelection.anchorNode)
    ) {
      const rangeRect = getDOMRangeRect(nativeSelection, rootElement);

      setFloatingElemPosition(
        rangeRect,
        popupCharStylesEditorElem,
        anchorElem,
        isLink
      );
    }
  }, [editor, anchorElem, isLink]);

  useEffect(() => {
    const scrollerElem = anchorElem.parentElement;

    const update = () => {
      editor.getEditorState().read(() => {
        updateTextFormatFloatingToolbar();
      });
    };

    window.addEventListener('resize', update);
    if (scrollerElem) {
      scrollerElem.addEventListener('scroll', update);
    }

    return () => {
      window.removeEventListener('resize', update);
      if (scrollerElem) {
        scrollerElem.removeEventListener('scroll', update);
      }
    };
  }, [editor, updateTextFormatFloatingToolbar, anchorElem]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateTextFormatFloatingToolbar();
    });
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateTextFormatFloatingToolbar();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateTextFormatFloatingToolbar();
          return false;
        },
        COMMAND_PRIORITY_LOW
      )
    );
  }, [editor, updateTextFormatFloatingToolbar]);

  return (
    <Box
      ref={popupCharStylesEditorRef}
      css={{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '$white700',
        borderRadius: '$md',
        display: 'flex'
      }}
    >
      {React.Children.toArray(children).length > 0 ? (
        <>{children}</>
      ) : (
        <Flex>
          {tools.map((_item, i) => {
            if (_item.component) {
              const item = _item as CustomTool;
              return (
                <Fragment key={i}>{item.renderComponent({ editor })}</Fragment>
              );
            }

            const item = _item as DefaultFloatingToolbarTools;
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
    </Box>
  );
};

function useFloatingTextFormatToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement,
  tools?: DefaultFloatingToolbarTools[] | CustomTool[]
) {
  const [isText, setIsText] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);

  const updatePopup = useCallback(() => {
    editor.getEditorState().read(() => {
      // Should not to pop up the floating toolbar when using IME input
      if (editor.isComposing()) {
        return;
      }
      const selection = $getSelection();
      const nativeSelection = window.getSelection();
      const rootElement = editor.getRootElement();

      if (
        nativeSelection !== null
        && (!$isRangeSelection(selection)
          || rootElement === null
          || !rootElement.contains(nativeSelection.anchorNode))
      ) {
        setIsText(false);
        return;
      }

      if (!$isRangeSelection(selection)) {
        return;
      }

      const node = getSelectedNode(selection);

      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsSubscript(selection.hasFormat('subscript'));
      setIsSuperscript(selection.hasFormat('superscript'));

      // Update links
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (selection.getTextContent() !== '') {
        setIsText($isTextNode(node) || $isParagraphNode(node));
      } else {
        setIsText(false);
      }

      const rawTextContent = selection.getTextContent().replace(/\n/g, '');
      if (!selection.isCollapsed() && rawTextContent === '') {
        setIsText(false);
      }
    });
  }, [editor]);

  useEffect(() => {
    document.addEventListener('selectionchange', updatePopup);
    return () => {
      document.removeEventListener('selectionchange', updatePopup);
    };
  }, [updatePopup]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(() => {
        updatePopup();
      }),
      editor.registerRootListener(() => {
        if (editor.getRootElement() === null) {
          setIsText(false);
        }
      })
    );
  }, [editor, updatePopup]);

  const floatingToolbarContextValue: FloatingToolbarProperties = useMemo(() => {
    return {
      isBold,
      isItalic,
      isLink,
      isStrikethrough,
      isSubscript,
      isSuperscript,
      isUnderline
    };
  }, []);

  if (!isText || !anchorElem) {
    return null;
  }

  return createPortal(
    <FloatingToolbarContext.Provider value={floatingToolbarContextValue}>
      <TextFormatFloatingToolbar
        editor={editor}
        anchorElem={anchorElem}
        tools={tools}
      />
    </FloatingToolbarContext.Provider>,
    anchorElem
  );
}

export const FloatingToolbar = ({
  anchorElem = document.body,
  tools
}: {
  anchorElem?: HTMLElement;
  tools?: DefaultFloatingToolbarTools[] | CustomTool[];
}) => {
  const [editor] = useLexicalComposerContext();
  return useFloatingTextFormatToolbar(editor, anchorElem, tools);
};
