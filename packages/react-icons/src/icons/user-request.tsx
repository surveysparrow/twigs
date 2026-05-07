import React from 'react';
import { IconProps } from '../types';

export const UserRequestIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1243_10)">
          <path
            d="M13.3333 20H9.33333C6.38781 20 4 22.3878 4 25.3333V26.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.9406 22.1H23.6072"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.9406 25.1H23.6072"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 23.6667C28 26.7963 25.4629 29.3333 22.3333 29.3333C19.2037 29.3333 16.6667 26.7963 16.6667 23.6667C16.6667 20.5371 19.2037 18 22.3333 18C25.4629 18 28 20.5371 28 23.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 9.33333C20 12.2789 17.6122 14.6667 14.6667 14.6667C11.7211 14.6667 9.33333 12.2789 9.33333 9.33333C9.33333 6.38781 11.7211 4 14.6667 4C17.6122 4 20 6.38781 20 9.33333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1243_10">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
