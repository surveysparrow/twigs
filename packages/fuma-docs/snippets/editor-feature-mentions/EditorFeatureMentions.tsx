import React from "react";
import { Editor, MentionNode, EditorToolbar, RichEditor, MentionsPlugin } from "@sparrowengg/twigs-editor-react";

export default function EditorFeatureMentions() {
  const users = [
    {
      id: "1",
      name: "John Doe",
      username: "johndoe",
    },
    {
      id: "2",
      name: "Jane Doe",
      username: "janedoe",
    },
    {
      id: "3",
      name: "John Smith",
      username: "johnsmith",
    },
    {
      id: "4",
      name: "Jane Smith",
      username: "janesmith",
    },
  ];

  return (
    <Editor nodes={[MentionNode]}>
      <EditorToolbar />
      <RichEditor
        editorContainerProps={{
          css: {
            ".editor-container .editor": {
              ".twigs-mention": {
                backgroundColor: "$accent100",
                display: "inline-block",
                borderRadius: "$md",
                padding: "0 $2",
              },
            },
          },
        }}
      />
      <MentionsPlugin
        getResults={(searchString) => {
          return users
            .filter((user) =>
              user.name
                .toLowerCase()
                .includes((searchString || "").toLowerCase())
            )
            .map((user) => ({
              value: user.username,
              label: user.name,
            }));
        }}
      />
    </Editor>
  );
}