import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormLabel } from '../form-label';

export default {
  component: FormLabel,
  title: 'Form label',
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
  <FormLabel {...args}>
    Email address
  </FormLabel>
);
export const Default = Template.bind({});
