import React from 'react';
import { IconProps } from '../types';

export const TimeSavedIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1386_31)">
          <path
            d="M14.8008 26.229C8.97965 26.2132 4.21231 21.5986 4.00686 15.7811C3.80142 9.96365 8.23138 5.02433 14.0369 4.5979C19.8424 4.17146 24.9465 8.41046 25.5933 14.1955"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.7907 21.8163L22.7871 23.8223L21.5838 22.619"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.7079 18.8477L15.1073 16.1654V10.5686"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.5933 27.4324H20.7799C19.4507 27.4324 18.3732 26.3548 18.3732 25.0257V20.2123C18.3732 18.8831 19.4507 17.8056 20.7799 17.8056H25.5933C26.9225 17.8056 28 18.8831 28 20.2123V25.0257C28 26.3548 26.9225 27.4324 25.5933 27.4324Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1386_31">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
