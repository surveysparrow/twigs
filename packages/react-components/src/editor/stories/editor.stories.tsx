import React from 'react';
import { Editor } from '../editor';

export default {
  component: Editor,
  title: 'Editor'
};

const Template = (args) => {
  return <Editor {...args} />;
};
export const Default = Template.bind({});
