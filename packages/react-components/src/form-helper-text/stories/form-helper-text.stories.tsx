import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormHelperText } from '../form-helper-text';

export default {
  component: FormHelperText,
  title: 'Form helper text'
} as ComponentMeta<typeof FormHelperText>;

const Template: ComponentStory<typeof FormHelperText> = (args) => (
  <FormHelperText {...args}>
    Enter a strong password
  </FormHelperText>
);
export const Default = Template.bind({});
