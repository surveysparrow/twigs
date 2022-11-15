import React from 'react';
import * as ReactIcons from '../index';
import IconCustomDocs from './icon-custom-story-docs';

const AllIcons = (args) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: '10px',
      fontFamily: 'system-ui'
    }}
    >
      {Object.entries(ReactIcons).map(([key, value]) => {
        const IconComponent = value;
        return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 8px',
            flexDirection: 'column',
            border: '1px solid #fcf6f6',
            borderRadius: '6px',
            letterSpacing: '1.1px'
          }}
          >
            <IconComponent key={key} {...args} />
            <p style={{
                fontSize: '12px',
                marginBottom: 0,
                fontWeight: 300,
                opacity: 0.8
              }}
              >
                {' '}
                {key}
                {' '}
              </p>
          </div>
        )
      })}
    </div>
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