import React from 'react';
import { Editor } from '../editor';
import {
  RichEditor,
  EditorToolbar,
  EditorFloatingToolbar,
  DialogLinkEditor
} from '../components';

export default {
  component: Editor,
  title: 'Editor'
};

const Template = (args) => {
  return (
    <Editor {...args}>
      <EditorToolbar />
      <DialogLinkEditor />
      <RichEditor />
      <EditorFloatingToolbar />
    </Editor>
  );
};
export const Default = Template.bind({});
