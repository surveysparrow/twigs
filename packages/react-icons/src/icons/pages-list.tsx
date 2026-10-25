import React from 'react';
import { IconProps } from '../types';

export const PagesListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2083_609)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6667 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H26.6667C27.4027 4 28 4.59733 28 5.33333V8C28 8.736 27.4027 9.33333 26.6667 9.33333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6667 18.6667H5.33333C4.59733 18.6667 4 18.0693 4 17.3333V14.6667C4 13.9307 4.59733 13.3333 5.33333 13.3333H26.6667C27.4027 13.3333 28 13.9307 28 14.6667V17.3333C28 18.0693 27.4027 18.6667 26.6667 18.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6667 28H5.33333C4.59733 28 4 27.4027 4 26.6667V24C4 23.264 4.59733 22.6667 5.33333 22.6667H26.6667C27.4027 22.6667 28 23.264 28 24V26.6667C28 27.4027 27.4027 28 26.6667 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2083_609">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
