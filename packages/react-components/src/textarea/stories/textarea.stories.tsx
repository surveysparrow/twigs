import React from 'react';
import { Textarea } from '../textarea';

export default {
  component: Textarea,
  title: 'Form/Textarea',
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
    },
    label: {
      control: 'text'
    },
    maxLength: {
      control: 'number'
    },
    error: {
      control: 'text'
    },
    requiredIndicator: {
      control: 'boolean'
    }
  }
};
const Template = (args) => {
  const [value, setValue] = React.useState('');

  return (
    <Textarea
      rows={10}
      placeholder="Placeholder"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
