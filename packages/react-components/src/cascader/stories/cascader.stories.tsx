import React from 'react';
import { Cascader } from '../cascader';
import { data } from '../tests/data';

export default {
  component: Cascader,
  title: 'Form/Cascader'
};

const Template = (args) => <Cascader {...args} data={data} />;
export const Default = Template.bind({});
