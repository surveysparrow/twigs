import React from 'react';
import { Pagination } from '../pagination';

export default {
  component: Pagination,
  title: 'Pagination',
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
  }
};

const Template = (args) => {

  return (
    <Pagination {...args} />
  )
}
export const Default = Template.bind({});
