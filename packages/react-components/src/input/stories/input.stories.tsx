import React from 'react';
import { UserCircleIcon } from '@sparrowengg/twigs-react-icons';
import { Input } from '../input';

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl']
    },
    variant: {
      control: 'select',
      options: ['default', 'filled']
    },
    disabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => (
  <Input
    {...args}
    placeholder="Placeholder"
  />
);

const TemplateWithLeftIcon = (args) => (
  <Input
    iconLeft={<UserCircleIcon />}
    {...args}
  />
);

const TemplateWithRightIcon = (args) => (
  <Input
    iconRight={<UserCircleIcon />}
    {...args}
  />
);

export const Default = Template.bind({});
export const InputWithLeftIcon = TemplateWithLeftIcon.bind({});
export const InputWithRightIcon = TemplateWithRightIcon.bind({});
