
import { Editor, EmojiNode, EditorToolbar, RichEditor, EmojiPlugin } from "@sparrowengg/twigs-editor-react";

export default function EditorFeatureEmoji() {
  return (
    <Editor nodes={[EmojiNode]}>
      <EditorToolbar />
      <RichEditor placeholder="Type : to trigger emoji dropdown" />
      <EmojiPlugin />
    </Editor>
  );
}