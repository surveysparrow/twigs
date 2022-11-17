import React from 'react';
import { IconProps } from '../types';

export const OpenNewIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M4 16L4 24C4 26.2091 5.79086 28 8 28H16C18.2091 28 20 26.2091 20 24V16C20 13.7909 18.2091 12 16 12H8C5.79086 12 4 13.7909 4 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33337 22.6667L14.6667 17.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33337 17.3333H14.6667V22.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4H24C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V16C28 17.0609 27.5786 18.0783 26.8284 18.8284C26.0783 19.5786 25.0609 20 24 20"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
