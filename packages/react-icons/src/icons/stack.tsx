import React from 'react';
import { IconProps } from '../types';

export const StackIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1336_3729)">
          <path
            d="M19.448 19.2187L20.552 18.1147C21.052 17.6145 21.7301 17.3335 22.4373 17.3333H26.6667C27.0203 17.3333 27.3594 17.4738 27.6095 17.7239C27.8595 17.9739 28 18.3131 28 18.6667V23.8333C28 24.5406 27.719 25.2189 27.219 25.719C26.7189 26.2191 26.0406 26.5 25.3333 26.5H6.66667C5.95942 26.5 5.28115 26.2191 4.78105 25.719C4.28095 25.2189 4 24.5406 4 23.8333V18.6667C4 18.3131 4.14048 17.9739 4.39052 17.7239C4.64057 17.4738 4.97971 17.3333 5.33333 17.3333H9.56267C10.2699 17.3335 10.948 17.6145 11.448 18.1147L12.552 19.2187C13.052 19.7188 13.7301 19.9999 14.4373 20H17.5627C18.2699 19.9999 18.948 19.7188 19.448 19.2187Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.6666 5.33334H5.33331"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.6666 12H5.33331"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1336_3729">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
