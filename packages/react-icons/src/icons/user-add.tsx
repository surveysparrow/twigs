import React from 'react';
import { IconProps } from '../types';

export const UserAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_483)">
          <path
            d="M22.6666 19.9993V25.3327"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3332 22.666H19.9999"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.5033 25.312H4.00326C3.26726 25.312 2.66992 24.7147 2.66992 23.9787V22.6453C2.66992 18.612 7.93926 15.9893 13.3366 15.9893C13.7269 15.9893 14.1164 16.0031 14.5033 16.0302"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.6666 29.3327C18.9852 29.3327 15.9999 26.3487 15.9999 22.666C15.9999 19.0607 19.0666 15.9953 22.6719 15.9993C26.3519 16.002 29.3332 18.986 29.3332 22.666C29.3332 26.3473 26.3492 29.3327 22.6666 29.3327Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.6255 4.02973C18.4438 5.84801 18.4438 8.79602 16.6255 10.6143C14.8072 12.4326 11.8592 12.4326 10.0409 10.6143C8.22265 8.79602 8.22265 5.84801 10.0409 4.02973C11.8592 2.21145 14.8072 2.21145 16.6255 4.02973Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_483">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
