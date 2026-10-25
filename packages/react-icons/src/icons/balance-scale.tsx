import React from 'react';
import { IconProps } from '../types';

export const BalanceScaleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2881_582)">
          <path
            d="M13.6345 7.75107H6.99991"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.9962 7.75107H18.4336"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.99991 26.6472H24.9962"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0341 10.1506L15.9981 26.6472"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.3269 17.949H4.04856"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.9597 17.949H19.6694"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.7271 6.05436C18.6642 6.99143 18.6642 8.51071 17.7271 9.44778C16.7901 10.3848 15.2708 10.3848 14.3337 9.44778C13.3966 8.51071 13.3966 6.99143 14.3337 6.05436C15.2708 5.1173 16.7901 5.1173 17.7271 6.05436Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.1757 17.6214C12.3125 17.8374 12.3905 18.0905 12.3665 18.3449C12.1661 20.478 10.3713 22.1481 8.18534 22.1481C6.00059 22.1481 4.20576 20.4792 4.0042 18.3461C3.9802 18.0917 4.05939 17.8338 4.19736 17.6178L8.18534 11.3503C8.18534 11.3503 11.3275 16.2873 12.1757 17.6214Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.8049 17.6214C27.9416 17.8374 28.0196 18.0905 27.9956 18.3449C27.7953 20.478 26.0004 22.1481 23.8145 22.1481C21.6297 22.1481 19.8349 20.4792 19.6334 18.3461C19.6094 18.0917 19.6885 17.8338 19.8265 17.6178L23.8145 11.3503C23.8145 11.3503 26.9554 16.2873 27.8049 17.6214Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2881_582">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
