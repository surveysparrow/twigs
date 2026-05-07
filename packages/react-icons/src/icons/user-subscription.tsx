import React from 'react';
import { IconProps } from '../types';

export const UserSubscriptionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_473)">
          <path
            d="M15.2069 20.8465C12.6134 20.8465 10.1262 21.8768 8.29237 23.7107"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.9062 15.9999C26.9062 9.9777 22.0243 5.0957 16.002 5.0957C9.97977 5.0957 5.09778 9.9777 5.09778 15.9999C5.09778 22.0222 9.97977 26.9042 16.002 26.9042"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.6367 21.3952V22.4234C19.6367 24.3173 20.8115 26.0126 22.5849 26.6776L23.1119 26.8752C23.2148 26.9139 23.3282 26.9139 23.4311 26.8752L23.9581 26.6776C25.7315 26.0126 26.9062 24.3173 26.9062 22.4234V21.3952C26.9062 20.9978 26.6479 20.6465 26.2686 20.528L23.5425 19.676C23.366 19.6209 23.177 19.6209 23.0005 19.676L20.2744 20.528C19.8951 20.6465 19.6367 20.9978 19.6367 21.3952Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.6368 13.2739V13.8797C19.6368 15.8871 18.0095 17.5144 16.002 17.5144C13.9945 17.5144 12.3673 15.8871 12.3673 13.8797V13.2739C12.3673 11.2665 13.9945 9.63912 16.002 9.63912C18.0095 9.63912 19.6368 11.2665 19.6368 13.2739Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_473">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
