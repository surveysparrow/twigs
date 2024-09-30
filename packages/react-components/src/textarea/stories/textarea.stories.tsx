import React from 'react';
import { Button } from '@src/button';
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
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
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
    },
    rows: {
      control: 'number'
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

const WithInfoIconAndCounterButton = (args) => {
  const [value, setValue] = React.useState('');

  return (
    <Textarea
      rows={10}
      label="Label"
      placeholder="Placeholder"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      info="Textarea info goes here"
      counterSideElement={<Button variant="ghost" color="primary">Label</Button>}
      maxLength={100}
      showCount
      {...args}
    />
  );
};

export const Default = Template.bind({});

export const WithInfo = WithInfoIconAndCounterButton.bind({});
