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
  SELECTION_CHANGE_COMMAND
} from 'lexical';
import {
  useCallback, useEffect, useRef, useState
} from 'react';
import {
  DeleteIcon,
  LinkIcon,
  PencilIcon
} from '@sparrowengg/twigs-react-icons';
import { getSelectedNode } from '../../utils/getSelectedNode';
import { LinkEditorDialog } from './link-editor-dialog';
import { setFloatingElemPositionForLinkEditor } from '../../utils/setFloatingElemPositionForLinkEditor';
import { Box } from '../../../box';
import { Link } from '../../../link';
import { IconButton } from '../../../button';

function useDialogLinkEditorToolbar(
  editor: LexicalEditor,
  anchorElem: HTMLElement | null
) {
  const [linkUrl, setLinkUrl] = useState('https://');
  const [linkText, setLinkText] = useState('');
  const [isLink, setIsLink] = useState(false);
  const [lastSelection, setLastSelection] = useState<
    RangeSelection | NodeSelection | BaseSelection | null
  >(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState(false);
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
        setLinkText(parent.getTextContent());
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkText(node.getTextContent());
        setLinkUrl(node.getURL());
      } else {
        setLinkText('');
        setLinkUrl('');
      }
    }

    const nativeSelection = window.getSelection();
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
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),
      editor.registerCommand(
        TOGGLE_LINK_COMMAND,
        (payload: { url?: string } | null) => {
          if (payload?.url) {
            setIsLinkEditMode(true);
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
      if (url !== '') {
        editor.dispatchCommand(TOGGLE_LINK_COMMAND, { url });
        editor.update(() => {
          if ($isRangeSelection(lastSelection)) {
            const textNode = getSelectedNode(lastSelection);
            if ($isTextNode(textNode)) {
              textNode.setTextContent(text);
            }
          }
        });
      }
      setTimeout(() => {
        setIsLink(false);
        setIsLinkEditMode(false);
      }, 10);
    }
  };

  if (!anchorElem) return null;

  return (
    <>
      {isLink && !isLinkEditMode && (
        <Box
          ref={containerRef}
          css={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: '$black900',
            maxWidth: 200,
            borderRadius: '$lg',
            display: 'flex',
            padding: '$2 $4',
            alignItems: 'center',
            gap: '$3'
          }}
        >
          <LinkIcon color="#fff" size={16} />
          <Link
            css={{
              color: '$white900',
              textDecoration: 'underline',
              fontSize: '$sm'
            }}
            target="_blank"
            referrerPolicy="no-referrer"
            href={linkUrl}
          >
            {linkUrl}
          </Link>
          <Box
            css={{
              display: 'flex',
              borderLeft: '1px solid $white600',
              margin: '$2',
              paddingLeft: '$4'
            }}
          >
            <IconButton
              icon={<PencilIcon strokeWidth={2} />}
              size="xs"
              color="light"
              css={{
                backgroundColor: 'transparent'
              }}
              onClick={() => {
                setIsLinkEditMode(true);
              }}
            />
            <IconButton
              icon={<DeleteIcon strokeWidth={2} />}
              size="xs"
              color="light"
              css={{
                backgroundColor: 'transparent'
              }}
              onClick={() => {
                if (lastSelection !== null) {
                  editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
                }
              }}
            />
          </Box>
        </Box>
      )}
      <LinkEditorDialog
        key={`${isLink}`}
        handleLinkSubmission={handleLinkSubmission}
        linkText={linkText}
        linkUrl={linkUrl}
        open={isLink && isLinkEditMode}
        closeModal={() => {
          setIsLink(false);
          setIsLinkEditMode(false);
        }}
        setIsLinkEditMode={setIsLinkEditMode}
        textLabel="Link text"
        urlLabel="Link URL"
        removeLink={() => {
          if (lastSelection !== null) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
          }
        }}
        title="Add Link"
      />
    </>
  );
}

export function DialogLinkEditorPlugin({
  anchorElem = document.body
}: {
  anchorElem?: HTMLElement | null;
}) {
  const [editor] = useLexicalComposerContext();
  return useDialogLinkEditorToolbar(editor, anchorElem);
}
