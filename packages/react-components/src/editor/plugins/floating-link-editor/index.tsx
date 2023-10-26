import {
  $isAutoLinkNode,
  $isLinkNode,
  TOGGLE_LINK_COMMAND
} from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isRangeSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  GridSelection,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  NodeSelection,
  RangeSelection,
  SELECTION_CHANGE_COMMAND
} from 'lexical';
import * as React from 'react';
import {
  Dispatch, useCallback, useEffect, useRef, useState
} from 'react';
import { createPortal } from 'react-dom';

import { getSelectedNode } from '../../utils/getSelectedNode';
import { setFloatingElemPositionForLinkEditor } from '../../utils/setFloatingElemPositionForLinkEditor';
// import { sanitizeUrl } from '../../utils/url';
import { Box } from '../../../box';
import { Button } from '../../../button';
import { Flex } from '../../../flex';
import { FormInput } from '../../../input';

const FloatingLinkEditor = ({
  editor,
  isLink,
  anchorElem,
  editedLinkUrl,
  editedLinkText,
  setIsLink,
  setEditedLinkUrl,
  setEditedLinkText
}: {
  editor: LexicalEditor;
  isLink: boolean;
  anchorElem: HTMLElement;
  editedLinkUrl: string;
  editedLinkText: string;
  setIsLink: Dispatch<boolean>;
  setEditedLinkUrl: Dispatch<string>;
  setEditedLinkText: Dispatch<string>;
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [linkUrl, setLinkUrl] = useState('');

  const [lastSelection, setLastSelection] = useState<
    RangeSelection | GridSelection | NodeSelection | null
  >(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState(false);

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setEditedLinkText(parent.getTextContent());
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setEditedLinkText(node.getTextContent());
        setLinkUrl(node.getURL());
      } else {
        setEditedLinkText('');
        setLinkUrl('');
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const { activeElement } = document;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();

    if (
      selection !== null
      && nativeSelection !== null
      && rootElement !== null
      && rootElement.contains(nativeSelection.anchorNode)
      && editor.isEditable()
    ) {
      const domRect: DOMRect | undefined = nativeSelection.focusNode?.parentElement?.getBoundingClientRect();
      if (domRect) {
        domRect.y += 40;
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem);
      }
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== 'link-input') {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem);
      }
      setLastSelection(null);
      setIsLinkEditMode(false);
      setLinkUrl('');
    }

    // eslint-disable-next-line consistent-return
    return true;
  }, [anchorElem, editor, setIsLinkEditMode]);

  useEffect(() => {
    const scrollerElem = anchorElem.parentElement;

    const update = () => {
      editor.getEditorState().read(() => {
        updateLinkEditor();
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
  }, [anchorElem.parentElement, editor, updateLinkEditor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

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

  useEffect(() => {
    if (isLinkEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLinkEditMode, isLink]);

  const monitorInputInteraction = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLinkSubmission();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setIsLinkEditMode(false);
    }
  };

  const handleLinkSubmission = () => {
    if (lastSelection !== null) {
      if (linkUrl !== '') {
        // editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, { url: editedLinkUrl });
        editor.update(() => {
          if ($isRangeSelection(lastSelection)) {
            const text = getSelectedNode(lastSelection);
            text.setTextContent(editedLinkText);
          }
        });
      }
      setIsLink(false);
      setIsLinkEditMode(false);
    }
  };

  return (
    <Box
      ref={editorRef}
      className="link-editor"
      css={{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '$white900',
        width: 400,
        borderRadius: '$md'
      }}
    >
      {!isLink ? null : (
        <Box
          css={{
            padding: '$4'
          }}
        >
          <Box>
            <FormInput
              label="Label"
              ref={inputRef}
              onChange={(event) => {
                setEditedLinkText(event.target.value);
              }}
              onKeyDown={(event) => {
                monitorInputInteraction(event);
              }}
              value={editedLinkText}
              css={{
                boxSizing: 'border-box'
              }}
            />
            <FormInput
              label="URL"
              ref={inputRef}
              onChange={(event) => {
                setEditedLinkUrl(event.target.value);
              }}
              onKeyDown={(event) => {
                monitorInputInteraction(event);
              }}
              value={editedLinkUrl}
              css={{
                boxSizing: 'border-box'
              }}
            />
          </Box>
          <Flex>
            <Button
              color="primary"
              onClick={() => {
                handleLinkSubmission();
              }}
            >
              Save
            </Button>
            <Button
              color="bright"
              onClick={() => {
                setIsLinkEditMode(false);
                setIsLink(false);
              }}
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

function useFloatingLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement | null
) {
  const [activeEditor, setActiveEditor] = useState(editor);
  const [editedLinkUrl, setEditedLinkUrl] = useState<string>('https://');
  const [editedLinkText, setEditedLinkText] = useState('');
  const [isLink, setIsLink] = useState(false);

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
        (_payload, newEditor) => {
          updateToolbar();
          setActiveEditor(newEditor);
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
              setEditedLinkUrl(url);
              setEditedLinkText(linkNode.getTextContent());
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

  if (!anchorElem) return null;

  return createPortal(
    <FloatingLinkEditor
      editor={activeEditor}
      isLink={isLink}
      anchorElem={anchorElem}
      setIsLink={setIsLink}
      editedLinkText={editedLinkText}
      editedLinkUrl={editedLinkUrl}
      setEditedLinkText={setEditedLinkText}
      setEditedLinkUrl={setEditedLinkUrl}
    />,
    anchorElem
  );
}

export default function FloatingLinkEditorPlugin({
  anchorElem = document.body
}: {
  anchorElem?: HTMLElement | null;
  // isLinkEditMode: boolean;
  // setIsLinkEditMode: Dispatch<boolean>;
}) {
  const [editor] = useLexicalComposerContext();
  return useFloatingLinkEditorToolbar(editor, anchorElem);
}
