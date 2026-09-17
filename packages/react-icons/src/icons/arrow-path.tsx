import React from 'react';
import { IconProps } from '../types';

export const ArrowPathIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_282)">
          <path
            d="M24.6667 12.6667L28 9.33333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 9.33333L24.6667 6"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 9.33333L21.3333 9.33333C19.124 9.33333 17.3333 11.124 17.3333 13.3333V18.6667C17.3333 20.876 15.5427 22.6667 13.3333 22.6667H12M10.8284 19.8383C12.3905 21.4004 12.3905 23.933 10.8284 25.4951C9.26633 27.0572 6.73366 27.0572 5.17157 25.4951C3.60948 23.933 3.60948 21.4004 5.17157 19.8383C6.73366 18.2762 9.26633 18.2762 10.8284 19.8383Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_282">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
