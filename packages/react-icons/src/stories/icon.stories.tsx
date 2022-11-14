import React from 'react';
import * as ReactIcons from '../index';
import CustomIcon from './icon-custom-story-docs';

const AllIcons = (args) => {
  return (
    <>
      {Object.entries(ReactIcons).map(([key, value]) => {
        const IconComponent = value;
        return (
          <IconComponent key={key} {...args}/>
        )
      })}
    </>
  )
}

export default {
  component: AllIcons,
  title: 'Icons',
  argTypes: {
    color: {
      control: 'text'
    },
    height: {
      control: 'number'
    },
    width: {
      control: 'number'
    }
  },
  parameters: {
    docs: {
      page: CustomIcon
    }
  }
}

const Template = (args) => <AllIcons {...args} />
export const Icons = Template.bind({});