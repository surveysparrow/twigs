import React from 'react';
import { IconProps } from '../types';

export const FilterAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1688_20320)">
          <path
            d="M19.0025 20.9413V25.3517C19.0025 26.162 18.4453 26.8679 17.6494 27.0642L14.0774 27.9465C12.9501 28.2246 11.8585 27.3832 11.8585 26.234V17.4119L4.41864 10.0607C4.15003 9.79533 4 9.43674 4 9.06262V5.41177C4 4.63247 4.64011 4 5.42881 4H25.4322C26.2209 4 26.861 4.63247 26.861 5.41177V6.82355"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.9174 14.7994H28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.9587 18.7925V10.8063"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1688_20320">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
