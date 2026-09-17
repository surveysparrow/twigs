import React from 'react';
import { IconProps } from '../types';

export const LibraryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_824_576)">
          <path
            d="M7.99997 8H24"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6666 4H21.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.6666 17H19.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.84 28H8.15997C6.5161 28 5.13967 26.7544 4.97597 25.1187L4.01597 15.5187C3.92593 14.619 4.22066 13.7233 4.82729 13.0529C5.43393 12.3825 6.29584 12 7.19997 12H24.8C25.7041 12 26.566 12.3825 27.1726 13.0529C27.7793 13.7233 28.074 14.619 27.984 15.5187L27.024 25.1187C26.8603 26.7544 25.4838 28 23.84 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_824_576">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
