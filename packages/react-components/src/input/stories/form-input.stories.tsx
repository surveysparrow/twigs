import React from 'react';
import { FormInput } from '../form-input';

export default {
  component: FormInput,
  title: 'Form/FormInput',
  args: {
    variant: 'default'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    variant: {
      control: 'select',
      options: ['default', 'filled']
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
    errorBorder: {
      control: 'boolean'
    }
  }
};

const Template = (args) => {
  const [value, setValue] = React.useState('');
  return (
    <FormInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Placeholder"
    />
  );
};

export const Default = Template.bind({});
