import React from 'react';
import { IconProps } from '../types';

export const DocumentClipIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.6667 13.3333V6.66667C26.6667 5.95942 26.3857 5.28115 25.8856 4.78105C25.3855 4.28095 24.7072 4 24 4H6.66667C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 10.6667H21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 16H14.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33334 21.3333H13.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 24V19.3333C24 18.8029 24.2107 18.2942 24.5858 17.9191C24.9609 17.544 25.4696 17.3333 26 17.3333C26.5304 17.3333 27.0391 17.544 27.4142 17.9191C27.7893 18.2942 28 18.8029 28 19.3333V24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28C22.9391 28 21.9217 27.5786 21.1716 26.8284C20.4214 26.0783 20 25.0609 20 24V19.9996"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
