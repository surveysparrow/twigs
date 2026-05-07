import React from 'react';
import { IconProps } from '../types';

export const LocationPinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_4803_4)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 17.3333C13.7907 17.3333 12 15.5427 12 13.3333C12 11.124 13.7907 9.33333 16 9.33333C18.2093 9.33333 20 11.124 20 13.3333C20 15.5427 18.2093 17.3333 16 17.3333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 28C16 28 6.66667 20.3333 6.66667 13.3333C6.66667 8.17867 10.8453 4 16 4C21.1547 4 25.3333 8.17867 25.3333 13.3333C25.3333 20.3333 16 28 16 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4803_4">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
