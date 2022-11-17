import React from 'react';
import { IconProps } from '../types';

export const DeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.6666 9.33334V25.3333C24.6666 26.0406 24.3857 26.7189 23.8856 27.219C23.3855 27.719 22.7072 28 22 28H9.99998C9.29274 28 8.61446 27.719 8.11436 27.219C7.61426 26.7189 7.33331 26.0406 7.33331 25.3333V9.33334"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6666 9.33334H5.33331"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3333 9.33333V8.66667C11.3333 7.42899 11.825 6.24201 12.7001 5.36684C13.5753 4.49167 14.7623 4 16 4V4C17.2377 4 18.4246 4.49167 19.2998 5.36684C20.175 6.24201 20.6666 7.42899 20.6666 8.66667V9.33333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 21.3333V16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6667 21.3333V16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="21.3333" r="1.33333" fill={color} />
      </svg>
    );
  }
);
