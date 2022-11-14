import React from 'react';
import { IconProps } from '../types';

export const FileUploadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.3333 28H22.6667C23.7275 28 24.745 27.5786 25.4951 26.8284C26.2453 26.0783 26.6667 25.0609 26.6667 24V11.3457C26.6667 10.2849 26.2452 9.26748 25.4951 8.51733L22.1493 5.17157C21.3992 4.42143 20.3818 4 19.3209 4H9.33334C8.27248 4 7.25506 4.42143 6.50492 5.17157C5.75477 5.92172 5.33334 6.93913 5.33334 8V16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6667 11.3333H22C21.2928 11.3333 20.6145 11.0524 20.1144 10.5523C19.6143 10.0522 19.3333 9.37391 19.3333 8.66667V4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66666 26.6667L12 21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 21.3333H12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 25.3333V21.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
