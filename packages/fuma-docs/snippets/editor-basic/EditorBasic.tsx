import { Editor, EditorToolbar, RichEditor } from "@sparrowengg/twigs-editor-react";

export default function EditorBasic() {
  return (
    <Editor>
      <EditorToolbar
        tools={[
          "format",
          "bold",
          "italic",
          "underline",
          "code",
          "ordered-list",
          "unordered-list",
          "codeblock",
        ]}
      />
      <RichEditor />
    </Editor>
  );
}