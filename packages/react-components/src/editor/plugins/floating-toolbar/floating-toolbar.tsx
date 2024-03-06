import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import { Box } from '@src/box';
import { Flex } from '@src/flex';
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
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import { getDOMRangeRect } from '../../utils/get-dom-range-rect';
import { getSelectedNode } from '../../utils/get-selected-node';
import { setFloatingElemPosition } from '../../utils/set-floating-elem-position';
import { DefaultToolbarTools } from '../toolbar/toolbar';
import {
  BoldTool,
  ItalicTool,
  LinkTool,
  UnderlineTool
} from '../toolbar/tools';

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

export type FloatingToolbarTools = DefaultFloatingToolbarTools[] | CustomTool[];

const defaultTools: DefaultFloatingToolbarTools[] = [
  'bold',
  'italic',
  'underline',
  'link'
];

const toolMapping = {
  bold: BoldTool,
  italic: ItalicTool,
  underline: UnderlineTool,
  link: LinkTool
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
  tools?: FloatingToolbarTools;
}): React.JSX.Element => {
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

      setFloatingElemPosition(rangeRect, popupCharStylesEditorElem, anchorElem);
    }
  }, [editor, anchorElem]);

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
        backgroundColor: '$black900',
        borderRadius: '$md',
        display: 'flex',

        '&::after': {
          content: '',
          position: 'absolute',
          top: '-8px',
          left: '8px',
          width: '0',
          height: '0',
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderBottom: '8px solid $black900'
        },

        '&.position--top::after': {
          top: 'auto',
          bottom: '-8px',
          borderBottom: 'none',
          borderTop: '8px solid $black900'
        },
        '.twigs-editor-tool-button': {
          backgroundColor: 'transparent',
          color: '$neutral100',

          '&:hover': {
            backgroundColorOpacity: ['$white100', 0.2],
            color: '$neutral100'
          },

          '&--active': {
            backgroundColorOpacity: ['$white100', 0.3]
          }
        }
      }}
    >
      {children ? (
        <>{children}</>
      ) : (
        <Flex
          css={{
            alignItems: 'center',
            padding: '$2'
          }}
        >
          {tools.map((_item, i) => {
            if (_item.component) {
              const item = _item as CustomTool;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={i}>{item.renderComponent({ editor })}</Fragment>
              );
            }

            const item = _item as DefaultFloatingToolbarTools;
            const Tool = toolMapping[item];
            if (!Tool) return null;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={i}>
                <Tool />
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

  if (!isText || !anchorElem) {
    return null;
  }

  return createPortal(
    <TextFormatFloatingToolbar
      editor={editor}
      anchorElem={anchorElem}
      tools={tools}
    />,
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
