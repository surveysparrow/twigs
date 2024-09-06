import React from 'react';
import { SearchIcon } from '@sparrowengg/twigs-react-icons';
import { Select } from '../select';

export default {
  component: Select,
  title: 'Form/Select',
  args: {
    placeholder: 'Select an option',
    isClearable: true,
    isSearchable: true,
    isMulti: false,
    disabled: false,
    size: 'md',
    variant: 'default'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl']
    },
    isMulti: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['default', 'filled']
    },
    menuPlacement: {
      control: 'select',
      options: ['auto', 'bottom', 'top']
    }
  }
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Template = (args) => (
  <Select
    {...args}
    options={options}
    dropdownIndicatorIcon={<SearchIcon />}
    // adding margin top to test the top placement of the menu
    css={{
      marginTop: '200px'
    }}
  />
);
export const Default = Template.bind({});
