import React from "react";
import { Editor, EditorToolbar, BoldTool, ItalicTool, RichEditor } from "@sparrowengg/twigs-editor-react";
import { Flex, Button } from "@sparrowengg/twigs-react";

export default function ToolbarBasic() {
  return (
    <Editor>
      <EditorToolbar>
        <Flex
          justifyContent="space-between"
          css={{
            marginBottom: "$3",
          }}
        >
          <Flex>
            <BoldTool />
            <ItalicTool />
          </Flex>
          <Button>Save</Button>
        </Flex>
      </EditorToolbar>
      <RichEditor placeholder="Start typing" />
    </Editor>
  );
}