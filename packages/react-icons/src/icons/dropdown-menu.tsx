import React from 'react';
import { IconProps } from '../types';

export const DropdownMenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
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
          d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V14.6667C4 16.1394 5.19391 17.3333 6.66667 17.3333H16H25.3333C26.8061 17.3333 28 16.1394 28 14.6667V6.66667C28 5.19391 26.8061 4 25.3333 4Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66666 22.6667H27.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66666 28H27.3333"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 9.66669L20 11.6667L18 9.66669"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
