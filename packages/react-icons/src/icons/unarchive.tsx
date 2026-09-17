import React from 'react';
import { IconProps } from '../types';

export const UnarchiveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3047_627)">
          <path
            d="M28 16.0001V25.3334C28 26.8068 26.8067 28.0001 25.3333 28.0001H6.66667C5.19333 28.0001 4 26.8068 4 25.3334V6.66681C4 5.19348 5.19333 4.00015 6.66667 4.00015H16"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 20.0001H9.84267C10.348 20.0001 10.8093 20.2854 11.0347 20.7374L11.6307 21.9294C11.8573 22.3814 12.3187 22.6667 12.824 22.6667H19.176C19.6813 22.6667 20.1427 22.3814 20.368 21.9294L20.964 20.7374C21.1907 20.2854 21.652 20.0001 22.1573 20.0001H28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.0323 8.39187L23.4242 4L27.816 8.39187"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.4242 14V4.02204"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3047_627">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
