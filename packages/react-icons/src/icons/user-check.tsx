import React from 'react';
import { IconProps } from '../types';

export const UserCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2570_588)">
          <path
            d="M18.8356 16.9552C17.2768 16.3324 15.448 15.9892 13.6 15.9892C8.7424 15.9892 4 18.3496 4 21.9796V23.1796C4 23.842 4.5376 24.3796 5.2 24.3796H16.4956"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.6664 20.6668L21.3328 24.0004L19.3336 22"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.563 5.22734C18.1995 6.86379 18.1995 9.517 16.563 11.1535C14.9266 12.7899 12.2734 12.7899 10.6369 11.1535C9.00047 9.517 9.00047 6.86379 10.6369 5.22734C12.2734 3.59089 14.9266 3.59089 16.563 5.22734Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22 28C18.6868 28 16 25.3144 16 22C16 18.7552 18.76 15.9964 22.0048 16C25.3168 16.0024 28 18.688 28 22C28 25.3132 25.3144 28 22 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2570_588">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
