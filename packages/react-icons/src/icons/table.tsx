import React from 'react';
import { IconProps } from '../types';

export const TableIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.3333 28H22.6666C23.7275 28 24.7449 27.5786 25.4951 26.8284C26.2452 26.0783 26.6666 25.0609 26.6666 24V11.3457C26.6666 10.2849 26.2452 9.26748 25.4951 8.51733L22.1493 5.17157C21.3992 4.42143 20.3818 4 19.3209 4H9.33331C8.27245 4 7.25503 4.42143 6.50489 5.17157C5.75474 5.92172 5.33331 6.93913 5.33331 8V12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6666 11.3333H22C21.2927 11.3333 20.6145 11.0524 20.1144 10.5523C19.6143 10.0522 19.3333 9.37391 19.3333 8.66667V4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.99998 16H14.6666C15.3739 16 16.0522 16.281 16.5523 16.781C17.0524 17.2811 17.3333 17.9594 17.3333 18.6667V25.3333C17.3333 26.0406 17.0524 26.7189 16.5523 27.219C16.0522 27.719 15.3739 28 14.6666 28H7.99998C7.29274 28 6.61446 27.719 6.11436 27.219C5.61426 26.7189 5.33331 26.0406 5.33331 25.3333V18.6667C5.33331 17.9594 5.61426 17.2811 6.11436 16.781C6.61446 16.281 7.29274 16 7.99998 16V16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.3333 22H5.33331"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3333 16V28"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
