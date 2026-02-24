import React from "react";
import { Editor, MentionNode, EditorToolbar, RichEditor, MentionsPlugin } from "@sparrowengg/twigs-editor-react";

export default function EditorFeatureMentions() {
  const users = [
    {
      id: "1",
      name: "Gautham",
      username: "gautham",
    },
    {
      id: "2",
      name: "Maneesh",
      username: "maneesh",
    },
    {
      id: "3",
      name: "Akshay",
      username: "akshay",
    },
    {
      id: "4",
      name: "Pranav",
      username: "pranav",
    },
  ];

  return (
    <Editor nodes={[MentionNode]}>
      <EditorToolbar />
      <RichEditor
        placeholder="Type mention (@), followed by a letter (gautham, maneesh, akshay, pranav)"
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