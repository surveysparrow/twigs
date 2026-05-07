import React from 'react';
import { IconProps } from '../types';

export const UserSyncIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_230)">
          <path
            d="M13.3333 20H9.33333C7.91885 20 6.56229 20.5619 5.5621 21.5621C4.5619 22.5623 4 23.9188 4 25.3333V26.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.3283 21.8711C26.3657 20.1016 24.5126 19.0001 22.4982 19.0001C20.2127 19.0001 18.2529 20.3945 17.4231 22.379"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.3283 27.5079C26.3657 29.2774 24.5126 30.379 22.4982 30.379C20.2127 30.379 18.2529 28.9846 17.4231 27.0001"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.3846 26.6154H17V30"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.6154 22.3846H28V19"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 9.33333C20 12.2789 17.6122 14.6667 14.6667 14.6667C11.7212 14.6667 9.33334 12.2789 9.33334 9.33333C9.33334 6.38781 11.7212 4 14.6667 4C17.6122 4 20 6.38781 20 9.33333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_230">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
