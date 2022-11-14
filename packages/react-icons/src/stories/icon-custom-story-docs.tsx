import { useState } from 'react';
import * as ReactIcons from '../index';

const CustomIcon = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input
        type={"text"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search icons"
        style={{
          marginBottom: "16px",
          height: "36px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          minWidth: "200px",
          padding: "0 12px",
          letterSpacing: "1.1px"
        }}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gap: "10px",
        fontFamily: "system-ui"
      }}>
        {Object.entries(ReactIcons).filter(([key, value]) => key.toLowerCase().includes(search.toLowerCase())).map(([key, value]) => {
          const IconComponent = value;
          return (
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
              flexDirection: "column",
              border: "1px solid #ececec",
              borderRadius: "6px",
              letterSpacing: "1.1px"
            }}>
              <IconComponent key={key} />
              <p style={{
                fontSize: "14px",
                marginBottom: 0,
                opacity: 0.8
              }}> {key} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CustomIcon;