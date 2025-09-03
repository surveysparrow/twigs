import React from "react";
import { Editor, EditorToolbar, RichEditor, DialogLinkEditor, ConvertSelectionToLinkOnPastePlugin } from "@sparrowengg/twigs-editor-react";

export default function EditorFeatureLink() {
  return (
    <Editor>
      <EditorToolbar />
      <RichEditor placeholder="Add editable links" />
      <DialogLinkEditor />
      <ConvertSelectionToLinkOnPastePlugin />
    </Editor>
  );
}