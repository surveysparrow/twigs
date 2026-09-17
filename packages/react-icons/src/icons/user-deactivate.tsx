import React from 'react';
import { IconProps } from '../types';

export const UserDeactivateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_487)">
          <path
            d="M12.5 25.31H3.99996C3.26396 25.31 2.66663 24.7127 2.66663 23.9767V22.6434C2.66663 18.61 7.93596 15.9874 13.3333 15.9874C13.7236 15.9874 14.1131 16.0011 14.5 16.0282"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27 18.9993L18 26.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.6256 4.02973C18.4438 5.84801 18.4438 8.79602 16.6256 10.6143C14.8073 12.4326 11.8593 12.4326 10.041 10.6143C8.22271 8.79602 8.22271 5.84801 10.041 4.02973C11.8593 2.21145 14.8073 2.21145 16.6256 4.02973Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.6666 29.3327C18.9853 29.3327 16 26.3487 16 22.666C16 19.0607 19.0666 15.9954 22.672 15.9994C26.352 16.002 29.3333 18.986 29.3333 22.666C29.3333 26.3474 26.3493 29.3327 22.6666 29.3327Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_487">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
