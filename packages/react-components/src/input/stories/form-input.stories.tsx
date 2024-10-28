import { UserIcon } from '@sparrowengg/twigs-react-icons';
import { Button } from '@src/button';
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
    },
    requiredIndicator: {
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

const TemplateWithInfo = (args) => {
  const [value, setValue] = React.useState('');
  return (
    <FormInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      info="Input info"
      label="Label"
      maxLength={100}
      showCount
      placeholder="Placeholder"
    />
  );
};

const TemplateWithCounterReplaced = (args) => {
  const [value, setValue] = React.useState('');
  return (
    <FormInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      info="Input info"
      label="Label"
      maxLength={100}
      showCount
      placeholder="Placeholder"
      renderCounter={() => (
        <Button color="primary" variant="ghost">
          Button
        </Button>
      )}
    />
  );
};

const TemplateWithIcon = (args) => {
  const [value, setValue] = React.useState('');
  return (
    <FormInput
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Placeholder"
      leftIcon={<UserIcon />}
    />
  );
};

export const Default = Template.bind({});

export const WithInfo = TemplateWithInfo.bind({});

export const WithCounterReplaced = TemplateWithCounterReplaced.bind({});

export const WithIcon = TemplateWithIcon.bind({});
