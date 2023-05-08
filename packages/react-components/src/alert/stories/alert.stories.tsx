import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert, AlertDescription } from '../alert';

export default {
  component: Alert,
  title: 'Alert',
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'info', 'error', 'warning']
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  },
  args: {
    status: 'info',
    size: 'sm'
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert
    {...args}
    css={{
      maxWidth: 400
    }}
  >
    <AlertDescription>
      {`A ${args.status} message here`}
    </AlertDescription>
  </Alert>
);
export const Default = Template.bind({});
