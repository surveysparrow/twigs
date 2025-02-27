import React from 'react';
import { SearchIcon } from '@sparrowengg/twigs-react-icons';
import { Button } from '@src/button';
import { Select } from '../select';

export default {
  component: Select,
  title: 'Form/Select',
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300
      }
    }
  },
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
    }
  }
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Template = (args) => (
  <Select {...args} options={options} dropdownIndicatorIcon={<SearchIcon />} />
);

export const Default = Template.bind({});

export const WithInfo = (args) => (
  <Select
    {...args}
    options={options}
    dropdownIndicatorIcon={<SearchIcon />}
    label="Label"
    info="Info goes here"
    topRightElement={(
      <Button variant="ghost" color="primary">
        Label
      </Button>
    )}
  />
);
