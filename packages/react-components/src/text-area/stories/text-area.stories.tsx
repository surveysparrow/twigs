import React from 'react';
import { TextArea } from '../text-area';

export default {
  component: TextArea,
  title: 'Form/TextArea',
  args: {
    resize: 'both',
    variant: 'default'
  },
  argTypes: {
    resize: {
      control: 'select',
      options: ['horizontal', 'vertical', 'both', 'none']
    },
    variant: {
      control: 'select',
      options: ['default', 'filled']
    },
    errorBorder: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
};
const Template = (args) => (
  <TextArea rows={10} placeholder="Placeholder" {...args} />
);

export const Default = Template.bind({});
