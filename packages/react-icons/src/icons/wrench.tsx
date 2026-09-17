import React from 'react';
import { IconProps } from '../types';

export const WrenchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_430)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.0001 18.266L8.93339 27.3326C7.73339 28.5326 5.86672 28.5326 4.66672 27.3326C3.46672 26.1326 3.46672 24.266 4.66672 23.066L13.7334 13.9993C12.6667 11.3326 13.3334 8.26597 15.4667 6.13264C17.7334 3.86597 21.0667 3.46597 23.7334 4.53264C23.8667 4.53264 23.8667 4.66597 23.7334 4.7993L18.9334 9.5993L22.4001 13.066L27.3334 8.26597C27.3334 8.26597 27.4667 8.26597 27.6001 8.26597C28.9334 10.9326 28.2667 14.266 26.0001 16.5326C23.7334 18.666 20.6667 19.1993 18.0001 18.266Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_430">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
