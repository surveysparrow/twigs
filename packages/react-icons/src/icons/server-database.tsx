import React from 'react';
import { IconProps } from '../types';

export const ServerDatabaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2202_592)">
          <path
            d="M8.0473 15.9535C8.07334 15.9795 8.07334 16.0218 8.0473 16.0478C8.02127 16.0738 7.97906 16.0738 7.95302 16.0478C7.92699 16.0218 7.92699 15.9795 7.95302 15.9535C7.97906 15.9275 8.02127 15.9275 8.0473 15.9535"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.968 15.492L27.068 7.54933C26.84 5.528 25.1293 4 23.0947 4H8.90533C6.87066 4 5.16 5.528 4.93066 7.54933L4.03066 15.492"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24 20H8"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24 20C26.2093 20 28 21.7907 28 24C28 26.2093 26.2093 28 24 28H8C5.79067 28 4 26.2093 4 24C4 21.7907 5.79067 20 8 20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24 20C26.2093 20 28 18.2093 28 16C28 13.7907 26.2093 12 24 12H8C5.79067 12 4 13.7907 4 16C4 18.2093 5.79067 20 8 20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6667 16H24"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.76 24H24.0933"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.13519 23.9535C8.16123 23.9795 8.16123 24.0218 8.13519 24.0478C8.10916 24.0738 8.06695 24.0738 8.04091 24.0478C8.01488 24.0218 8.01488 23.9795 8.04091 23.9535C8.06695 23.9275 8.10916 23.9275 8.13519 23.9535"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2202_592">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
