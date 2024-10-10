import React from 'react';
import { FormLabel } from '../form-label';

export default {
  component: FormLabel,
  title: 'Form/Form label',
  args: {
    requiredIndicator: false
  },
  argTypes: {
    requiredIndicator: {
      control: 'boolean'
    }
  }
};

const Template = (args) => <FormLabel {...args}>Email address</FormLabel>;
export const Default = Template.bind({});
