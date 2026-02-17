import React from "react";
import { Editor, EditorToolbar, RichEditor } from "@sparrowengg/twigs-editor-react";

export default function ToolbarBasic() {
  return (
    <Editor>
      <EditorToolbar/>
      <RichEditor placeholder="Default toolbar" />
    </Editor>
  );
}