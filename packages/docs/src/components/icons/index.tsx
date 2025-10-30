import React, { useState } from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import { twigsComponentLoader } from '@site/src/theme/ReactLiveScope/twigs-loader';

export default function AllIcons() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const Icons =
          require('@site/../react-icons/src/index');

        const [search, setSearch] = useState('');
        const filteredIcons = Object.entries(Icons).filter(([key]) => key.toLowerCase().includes(search.toLowerCase()));

        const Text = twigsComponentLoader('Text');
        return (
          <div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search icons"
              style={{
                border: '1px solid #ddd',
                borderRadius: '6px',
                width: '100%',
                padding: '0 12px',
                letterSpacing: '1.1px',
                height: 48
              }}
            />
            <Text size="xs" css={{ color: '$neutral700', marginTop: '$2', marginBottom: '$8' }}>
              {Object.entries(filteredIcons).length} of {Object.entries(Icons).length} icons
            </Text>

            <div className='row' style={{ padding: 8 }}>
              {filteredIcons.map(([key, value]) => {
                const IconComponent = value as React.ComponentType<{ key: string }>;
                return (
                  <div className='col col--3' style={{
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'center',
                    padding: '16px 8px',
                    flexDirection: 'column',
                    border: '1px solid #fffdfd',
                    letterSpacing: '1.1px',
                    gap: '14px',
                    marginBottom: 20
                  }}
                  >
                    <IconComponent key={key} />
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
          </div>
        )
      }}
    </BrowserOnly>
  );
}

