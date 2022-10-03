import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup, RadioIndicator } from '../radio';
import { Flex } from '../../flex';
import { FormLabel } from '../../form-label';

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Radio>;

const Template = (args) => (
  <RadioGroup defaultValue="default" aria-label="View density" {...args}>
    <Flex css={{ alignItems: 'center' }}>
      <Radio size="sm" value="default" id="r1" {...args}>
        <RadioIndicator />
      </Radio>
      <FormLabel htmlFor="r1" css={{ marginLeft: '6px' }}>Default</FormLabel>
    </Flex>
    <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
      <Radio size="sm" value="comfortable" id="r2" {...args}>
        <RadioIndicator />
      </Radio>
      <FormLabel htmlFor="r2" css={{ marginLeft: '6px' }}>Comfortable</FormLabel>
    </Flex>
  </RadioGroup>
);
export const Default = Template.bind({});
