import React from 'react';
import { Pagination } from '../pagination';

export default {
  component: Pagination,
  title: 'Navigation/Pagination',
  argTypes: {
    total: {
      control: 'number',
      defaultValue: 10
    },
    itemsPerPage: {
      control: 'number',
      defaultValue: 1
    },
    activePage: {
      control: 'number',
      defaultValue: 1
    }
  },
  args: {
    total: 1000,
    itemsPerPage: 10,
    activePage: 1
  }
};

const Template = (args) => {
  return <Pagination {...args} />;
};
export const Default = Template.bind({});
