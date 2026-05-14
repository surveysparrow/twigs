import React from 'react';
import { IconProps } from '../types';

export const NotesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_4117_47)">
          <path
            d="M10.6667 15.3333H17.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6667 21.3333H21.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6667 10.6667H21.3333C20.5973 10.6667 20 10.0693 20 9.33333V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M7.99999 4H20.2293C20.936 4 21.6147 4.28133 22.1147 4.78133L25.8853 8.552C26.3853 9.052 26.6667 9.73067 26.6667 10.4373V25.3333C26.6667 26.8067 25.4733 28 24 28H7.99999C6.52666 28 5.33333 26.8067 5.33333 25.3333V6.66667C5.33333 5.19333 6.52666 4 7.99999 4Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4117_47">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
