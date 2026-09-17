import React from 'react';
import { IconProps } from '../types';

export const UserGenerateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_280)">
          <path
            d="M19.1507 17.0607C17.4187 16.3687 15.3867 15.9874 13.3334 15.9874C7.93608 15.9874 2.66675 18.61 2.66675 22.6434V23.9767C2.66675 24.7127 3.26408 25.31 4.00008 25.31H16.5507"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.4081 19.7034L21.1854 21.9247L24.1481 23.4074L21.9254 25.6287"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.6257 4.02973C18.444 5.84801 18.444 8.79602 16.6257 10.6143C14.8074 12.4326 11.8594 12.4326 10.0411 10.6143C8.22283 8.79602 8.22283 5.84801 10.0411 4.02973C11.8594 2.21145 14.8074 2.21145 16.6257 4.02973Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.6667 29.3327C18.9854 29.3327 16.0001 26.3487 16.0001 22.666C16.0001 19.0607 19.0667 15.9954 22.6721 15.9994C26.3521 16.002 29.3334 18.986 29.3334 22.666C29.3334 26.3474 26.3494 29.3327 22.6667 29.3327Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_280">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
