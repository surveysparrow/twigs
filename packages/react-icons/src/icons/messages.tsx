import React from 'react';
import { IconProps } from '../types';

export const MessagesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_788)">
          <path
            d="M23.4787 12.6667V7.24667C23.4787 5.45333 22.0253 4 20.232 4H7.24667C5.45333 4 4 5.45333 4 7.24667V16.1747C4 17.968 5.45333 19.4213 7.24667 19.4213H8.86933V22.6667L12 20.58"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 25.3333H14.6667C13.1933 25.3333 12 24.14 12 22.6667V15.3333C12 13.86 13.1933 12.6667 14.6667 12.6667H25.3333C26.8067 12.6667 28 13.86 28 15.3333V22.6667C28 24.14 26.8067 25.3333 25.3333 25.3333H24V28L20 25.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_788">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
