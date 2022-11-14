import React from 'react';
import * as ReactIcons from '../index';
import IconCustomDocs from './icon-custom-story-docs';

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
      control: 'color',
      defaultValue: "#000000"
    },
    size: {
      control: 'number',
      defaultValue: 32
    }
  },
  parameters: {
    docs: {
      page: IconCustomDocs
    }
  }
}

const Template = (args) => <AllIcons {...args} />
export const Icons = Template.bind({});