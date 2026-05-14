import React from 'react';
import { IconProps } from '../types';

export const AppsGridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_513)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6667 13.3333H6.66667C5.19333 13.3333 4 12.14 4 10.6667V6.66667C4 5.19333 5.19333 4 6.66667 4H10.6667C12.14 4 13.3333 5.19333 13.3333 6.66667V10.6667C13.3333 12.14 12.14 13.3333 10.6667 13.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3333 13.3333H21.3333C19.86 13.3333 18.6667 12.14 18.6667 10.6667V6.66667C18.6667 5.19333 19.86 4 21.3333 4H25.3333C26.8067 4 28 5.19333 28 6.66667V10.6667C28 12.14 26.8067 13.3333 25.3333 13.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3333 28H21.3333C19.86 28 18.6667 26.8067 18.6667 25.3334V21.3334C18.6667 19.86 19.86 18.6667 21.3333 18.6667H25.3333C26.8067 18.6667 28 19.86 28 21.3334V25.3334C28 26.8067 26.8067 28 25.3333 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6667 28H6.66668C5.19334 28 4.00001 26.8067 4.00001 25.3333V21.3333C4.00001 19.86 5.19334 18.6667 6.66668 18.6667H10.6667C12.14 18.6667 13.3333 19.86 13.3333 21.3333V25.3333C13.3333 26.8067 12.14 28 10.6667 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_513">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
