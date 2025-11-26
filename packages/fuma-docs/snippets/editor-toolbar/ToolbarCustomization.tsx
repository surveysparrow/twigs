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
              renderButton={({ active, onChange }) => {
                return (
                  <Button
                    onClick={onChange}
                    color={active ? "secondary" : "default"}
                    css={{marginRight: "$4"}}
                  >
                    Custom Bold
                  </Button>
                );
              }}
            />
            <ItalicTool
              renderButton={({ active, onChange }) => {
                return (
                  <Button
                    onClick={onChange}
                    color={active ? "secondary" : "default"}
                  >
                    Custom Italic
                  </Button>
                );
              }}
            />
          </Flex>
        </Flex>
      </EditorToolbar>
      <RichEditor placeholder="Customized toolbar" />
    </Editor>
  );
}