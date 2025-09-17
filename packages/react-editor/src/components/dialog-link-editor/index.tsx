import {
  $isAutoLinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND
} from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import { ADD_BLANK_LINK } from '@src/utils/commands';
import {
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  BaseSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeSelection,
  RangeSelection,
  SELECTION_CHANGE_COMMAND,
  getDOMSelection
} from 'lexical';
import {
  useCallback, useEffect, useRef, useState
} from 'react';
import isURL from 'validator/es/lib/isURL';
import { getSelectedNode } from '@src/utils/get-selected-node';
import { setFloatingElemPositionForLinkEditor } from '@src/utils/set-floating-elem-position-for-link-editor';
import { LinkEditorDialog } from './link-editor-dialog';
import { LinkTooltip } from './link-tooltip';

function useDialogLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement | null,
  options?: DialogLinkEditorOptions
) {
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [isLink, setIsLink] = useState(false);
  const [lastSelection, setLastSelection] = useState<
    RangeSelection | NodeSelection | BaseSelection | null
  >(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [errors, setErrors] = useState({
    text: false,
    url: false
  });

  const isNewLink = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerElem = containerRef.current;

  useEffect(() => {
    function updateToolbar() {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const node = getSelectedNode(selection);
        const linkParent = $findMatchingParent(node, $isLinkNode);
        const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode);
        if (linkParent !== null && autoLinkParent === null) {
          setIsLink(true);
        } else {
          setIsLink(false);
        }
      }
    }
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
        COMMAND_PRIORITY_CRITICAL
      ),
      editor.registerCommand(
        CLICK_COMMAND,
        (payload) => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const node = getSelectedNode(selection);
            const linkNode = $findMatchingParent(node, $isLinkNode);
            if ($isLinkNode(linkNode)) {
              const url = linkNode.getURL();
              setLinkUrl(url);
              setLinkText(linkNode.getTextContent());
            }
            if ($isLinkNode(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), '_blank');
              return true;
            }
          }
          return false;
        },
        COMMAND_PRIORITY_LOW
      )
    );
  }, [editor]);

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkText(parent.getTextContent().trim());
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkText(node.getTextContent().trim());
        setLinkUrl(node.getURL());
      } else {
        setLinkText('');
        setLinkUrl('');
      }
    }

    const nativeSelection = getDOMSelection(editor._window ?? window);
    const { activeElement } = document;

    const rootElement = editor.getRootElement();

    if (
      selection !== null
      && nativeSelection !== null
      && rootElement !== null
      && rootElement.contains(nativeSelection.anchorNode)
      && editor.isEditable()
    ) {
      setTimeout(() => {
        const domRect: DOMRect | undefined = nativeSelection.focusNode?.parentElement?.getBoundingClientRect();
        if (domRect && anchorElem && containerRef.current) {
          setFloatingElemPositionForLinkEditor(
            domRect,
            containerRef.current,
            anchorElem,
            10
          );
        }
      }, 10);
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== 'link-input') {
      setTimeout(() => {
        if (rootElement !== null && anchorElem && containerElem) {
          setFloatingElemPositionForLinkEditor(null, containerElem, anchorElem);
        }
      }, 10);
      setLastSelection(null);
      setLinkUrl('');
    }

    // eslint-disable-next-line consistent-return
    return true;
  }, [anchorElem, editor, setIsLinkEditMode]);

  useEffect(() => {
    if (!isLinkEditMode) {
      isNewLink.current = false;
    }
  }, [isLinkEditMode]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        ADD_BLANK_LINK,
        () => {
          setTimeout(() => {
            setIsLinkEditMode(true);
          }, 40);
          isNewLink.current = true;
          return false;
        },
        COMMAND_PRIORITY_HIGH
      ),

      editor.registerCommand(
        TOGGLE_LINK_COMMAND,
        (payload: string | { url: string } | null) => {
          if (typeof payload === 'string' || payload?.url) {
            setTimeout(() => {
              setIsLinkEditMode(true);
            }, 40);
            isNewLink.current = true;
          } else {
            setIsLinkEditMode(false);
          }
          return false;
        },
        COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false);
            return true;
          }
          return false;
        },
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor, updateLinkEditor, setIsLink, isLink]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  const handleLinkSubmission = ({
    text,
    url
  }: {
    text: string;
    url: string;
  }) => {
    if (lastSelection !== null) {
      const isValidUrl = isURL(url);
      const isValidText = text.trim().length > 0;

      if (isValidUrl && isValidText) {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, {
          url,
          rel: options?.anchorOptions?.rel,
          target: options?.anchorOptions?.target,
          title: options?.anchorOptions?.title
        });
        editor.update(() => {
          if ($isRangeSelection(lastSelection)) {
            const textNode = getSelectedNode(lastSelection);
            if ($isTextNode(textNode)) {
              textNode.setTextContent(text);
            }
          }
        });
        setErrors({
          text: false,
          url: false
        });
        setTimeout(() => {
          setIsLink(false);
          setIsLinkEditMode(false);
        }, 50);
      } else {
        setErrors({
          text: !isValidText,
          url: !isValidUrl
        });
      }
    }
  };

  if (!anchorElem) return null;

  return (
    <>
      {isLink && !isLinkEditMode && (
        <LinkTooltip
          anchorElem={anchorElem}
          containerRef={containerRef}
          handleDelete={() => {
            if (lastSelection !== null) {
              editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
            }
          }}
          handleEdit={() => {
            setIsLinkEditMode(true);
            setIsUpdate(true);
          }}
          linkUrl={linkUrl}
          https={options?.anchorOptions?.https || false}
        />
      )}
      {isLinkEditMode && (
        <LinkEditorDialog
          handleLinkSubmission={handleLinkSubmission}
          linkText={linkText}
          linkUrl={linkUrl}
          open={isLink && isLinkEditMode}
          closeModal={() => {
            setIsLink(false);
            setIsLinkEditMode(false);
            if (isNewLink.current) {
              editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
            }
          }}
          isUpdate={isUpdate}
          setIsLinkEditMode={setIsLinkEditMode}
          textLabel={options?.dialogProps?.textLabel || 'Link text'}
          urlLabel={options?.dialogProps?.urlLabel || 'Link URL'}
          removeLink={() => {
            if (lastSelection !== null) {
              editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
            }
          }}
          errors={errors}
          saveLabel={options?.dialogProps?.saveLabel || 'Save'}
          cancelLabel={options?.dialogProps?.cancelLabel || 'Cancel'}
          updateLabel={options?.dialogProps?.updateLabel || 'Update'}
          title={options?.dialogProps?.title || 'Add Link'}
          errorLabels={options?.dialogProps?.errorLabels}
        />
      )}
    </>
  );
}

export type DialogLinkEditorOptions = {
  dialogProps?: {
    textLabel?: string;
    urlLabel?: string;
    saveLabel?: string;
    cancelLabel?: string;
    updateLabel?: string;
    title?: string;
    errorLabels?: {
      text?: string;
      url?: string;
    };
  };
  anchorOptions?: {
    rel?: string;
    target?: string;
    title?: string;
    https?: boolean;
  };
};

export function DialogLinkEditor({
  anchorElem = document.body,
  options
}: {
  anchorElem?: HTMLElement | null;
  options?: DialogLinkEditorOptions;
}) {
  const [editor] = useLexicalComposerContext();
  return useDialogLinkEditorToolbar(editor, anchorElem, options);
}
