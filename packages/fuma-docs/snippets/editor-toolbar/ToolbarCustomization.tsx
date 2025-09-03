import React from "react";
import { Editor, EditorToolbar, BoldTool, ItalicTool, RichEditor } from "@sparrowengg/twigs-editor-react";
import { Flex, Button } from "@sparrowengg/twigs-react";

export default function ToolbarCustomization() {
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
            <BoldTool
              renderButton={({ active }) => {
                return (
                  <Button
                    onClick={() => {}}
                    color={active ? "primary" : "default"}
                  >
                    Custom Bold
                  </Button>
                );
              }}
            />
            <ItalicTool />
          </Flex>
          <Button>Save</Button>
        </Flex>
      </EditorToolbar>
      <RichEditor placeholder="Start typing" />
    </Editor>
  );
}