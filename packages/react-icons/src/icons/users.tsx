import React from 'react';
import { IconProps } from '../types';

export const UsersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_632)">
          <path
            d="M20 25.334V24.6673C20 22.09 17.9107 20.0007 15.3333 20.0007H8.66667C6.08934 20.0007 4 22.09 4 24.6673V25.334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M29.3333 25.334V24.6673C29.3333 22.09 27.244 20.0007 24.6667 20.0007H24"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3333 5.33398C23.9107 5.33398 26 7.42332 26 10.0007C26 12.578 23.9107 14.6673 21.3333 14.6673"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.6667 10.0007C16.6667 12.578 14.5773 14.6673 12 14.6673C9.42267 14.6673 7.33333 12.578 7.33333 10.0007C7.33333 7.42334 9.42267 5.334 12 5.334C14.5773 5.334 16.6667 7.42334 16.6667 10.0007Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_632">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
