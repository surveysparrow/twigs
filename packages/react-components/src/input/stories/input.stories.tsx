import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../input';
import { UserCircleIcon } from '@sparrowengg/twigs-react-icons';

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
      options: ['outlined', 'filled']
    }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input
    {...args}
  />
);

const TemplateWithLeftIcon: ComponentStory<typeof Input> = (args) => (
  <Input
    iconLeft={<UserCircleIcon />}
    {...args}
  />
);

const TemplateWithRightIcon: ComponentStory<typeof Input> = (args) => (
  <Input
    iconRight={<UserCircleIcon />}
    {...args}
  />
);

export const Default = Template.bind({});
export const InputWithLeftIcon = TemplateWithLeftIcon.bind({});
export const InputWithRightIcon = TemplateWithRightIcon.bind({});
