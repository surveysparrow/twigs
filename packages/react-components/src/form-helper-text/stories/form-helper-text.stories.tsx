import React from 'react';
import { FormHelperText } from '../form-helper-text';

export default {
  component: FormHelperText,
  title: 'Form/Form helper text'
};

const Template = (args) => (
  <FormHelperText {...args}>Enter a strong password</FormHelperText>
);
export const Default = Template.bind({});
