import React from 'react';
import { IconProps } from '../types';

export const CameraIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M10 4H6.66667C5.19333 4 4 5.19333 4 6.66667V10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 22V25.3333C4 26.8067 5.19333 28 6.66667 28H10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 28H25.3333C26.8067 28 28 26.8067 28 25.3333V22"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 10V6.66667C28 5.19333 26.8067 4 25.3333 4H22"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.7827 15.0907C18.7392 16.0472 18.7392 17.598 17.7827 18.5545C16.8261 19.5111 15.2753 19.5111 14.3188 18.5545C13.3622 17.598 13.3622 16.0472 14.3188 15.0907C15.2753 14.1341 16.8261 14.1341 17.7827 15.0907Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 13.5V21C23.5 21.92 22.7533 22.6667 21.8333 22.6667H10.1667C9.24667 22.6667 8.5 21.92 8.5 21V13.5C8.5 12.58 9.24667 11.8333 10.1667 11.8333H11.8333L13.052 9.74667C13.2013 9.49067 13.4747 9.33334 13.772 9.33334H18.192C18.484 9.33334 18.7547 9.48667 18.9067 9.73734L20.168 11.8333H21.8347C22.7533 11.8333 23.5 12.58 23.5 13.5V13.5Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
