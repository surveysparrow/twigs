import React from 'react';
import { IconProps } from '../types';

export const UserSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_266)">
          <path
            d="M27.3333 26.6667L25.5922 24.9255"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 28H10.6667C6.98477 28 4 25.0152 4 21.3333V10.6667C4 6.98477 6.98477 4 10.6667 4H21.3333C25.0152 4 28 6.98477 28 10.6667V15.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10 21.3333C10.5292 20.1192 11.7275 19.334 13.0519 19.3333H16"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23 18.6667C25.025 18.6667 26.6667 20.3083 26.6667 22.3333C26.6667 24.3584 25.025 26 23 26C20.975 26 19.3333 24.3584 19.3333 22.3333C19.3335 20.3083 20.975 18.6668 23 18.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3333 12.6667C19.3333 14.5076 17.8409 16 16 16C14.1591 16 12.6667 14.5076 12.6667 12.6667C12.6667 10.8257 14.1591 9.33333 16 9.33333C17.8409 9.33333 19.3333 10.8257 19.3333 12.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_266">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
