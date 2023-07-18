import React from 'react';
import { TickCircleFillIcon, UserCircleIcon } from '@sparrowengg/twigs-react-icons';
import { Input } from '../input';
import { IconButton } from '../../button';

export default {
  component: Input,
  title: 'Form/Input',
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

const TemplateWithRightElement = (args) => (
  <Input
    rightElement={(
      <IconButton
        color="default"
        variant="ghost"
        size="lg"
        onClick={() => console.log('hello there')}
        icon={<TickCircleFillIcon color="green" />}
        css={{
          right: 10
        }}
      />
    )}
    {...args}
  />
);

export const Default = Template.bind({});
export const InputWithLeftIcon = TemplateWithLeftIcon.bind({});
export const InputWithRightIcon = TemplateWithRightIcon.bind({});
export const InputWithRightElement = TemplateWithRightElement.bind({});
