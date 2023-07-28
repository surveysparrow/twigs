import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from '../radio';
import { Flex } from '../../flex';
import { FormLabel } from '../../form-label';

export default {
  component: Radio,
  title: 'Form/Radio',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  }
} as ComponentMeta<typeof Radio>;

const Template = (args) => (
  <RadioGroup defaultValue="default" aria-label="View density" {...args}>
    <Radio size="sm" value="default" id="r1" {...args}>Default</Radio>
    <Radio size="sm" value="comfortable" id="r2" {...args}>Comfortable</Radio>
  </RadioGroup>
);
export const Default = Template.bind({});
