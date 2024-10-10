import React, { useState } from 'react';
import * as ReactIcons from '@sparrowengg/twigs-react-icons';

const AllIcons = (args) => {
  const [search, setSearch] = useState('');
  return (
    <div style={{ border: '1px solid rgba(0,0,0,.1)', padding: '20px 15px' }}>
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '10px',
          fontFamily: 'system-ui',
          border: '1px solid rgba(0,0,0,.1)',
          padding: '10px'
        }}
      >
        {Object.entries(ReactIcons)
          .filter(([key]) => key.toLowerCase().includes(search.toLowerCase()))
          .map(([key, value]) => {
            const IconComponent = value;
            return (
              <div
                style={{
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
                <p
                  style={{
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
    </div>
  );
};

export default AllIcons;
