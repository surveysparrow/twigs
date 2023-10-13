import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode } from '@lexical/rich-text';
import { EditorState, LexicalEditor } from 'lexical';
import { HashTagNode } from './nodes/hashtag';
import { ImageNode } from './nodes/image';
import { KudosNode } from './nodes/kudos';
import { MentionNode } from './nodes/mention';
import { AutoLinkPlugin } from './plugins/auto-link';
import { HashTagPlugin } from './plugins/hashtag';
import { ImagesPlugin } from './plugins/images';
import { KudosPlugin } from './plugins/kudos';
import { MentionsPlugin } from './plugins/mentions';
import { ToolbarPlugin } from './plugins/toolbar';

const initialConfig = {
  namespace: 'MyEditor',
  theme: {
    text: {
      bold: 'text-bold',
      italic: 'text-italic',
      underline: 'text-underline'
    }
  },
  nodes: [
    MentionNode,
    HashTagNode,
    AutoLinkNode,
    LinkNode,
    KudosNode,
    ListNode,
    ListItemNode,
    ImageNode,
    HeadingNode
  ],
  onError: (err) => {
    console.error(err);
  }
};

export const Editor = ({
  editorState,
  onChange
}: {
  editorState: EditorState;
  onChange: (
    newEditorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>
  ) => void;
}) => {
  return (
    <LexicalComposer initialConfig={{ ...initialConfig, editorState }}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={(
          <ContentEditable
            style={{
              width: '400px',
              minHeight: '120px',
              border: '2px solid #fff',
              textAlign: 'left',
              borderRadius: 5,
              padding: '12px'
            }}
          />
        )}
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={<div>Start typing...</div>}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
      <MentionsPlugin />
      <HashTagPlugin />
      <KudosPlugin />
      <AutoLinkPlugin />
      <CheckListPlugin />
      <ImagesPlugin />
      {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
      <ListPlugin />
    </LexicalComposer>
  );
};
