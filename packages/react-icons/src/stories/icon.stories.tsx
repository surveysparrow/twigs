import React, { useState } from 'react';
import * as ReactIcons from '../index';

const AllIcons = (args) => {
  const [search, setSearch] = useState('');
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search icons"
        style={{
          marginBottom: '16px',
          height: '36px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          minWidth: '200px',
          padding: '0 12px',
          letterSpacing: '1.1px'
        }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px',
        fontFamily: 'system-ui'
      }}
      >
        {Object.entries(ReactIcons).filter(([key, value]) => key.toLowerCase().includes(search.toLowerCase())).map(([key, value]) => {
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
          );
        })}
      </div>
    </>
  );
};

export default {
  component: AllIcons,
  title: 'Icons',
  argTypes: {
    color: {
      control: 'color',
      defaultValue: '#000000'
    },
    size: {
      control: 'number',
      defaultValue: 32
    },
    strokeWidth: {
      control: 'number',
      defaultValue: 1.5
    }
  }
};

const Template = (args) => <AllIcons {...args} />;
export const Icons = Template.bind({});
