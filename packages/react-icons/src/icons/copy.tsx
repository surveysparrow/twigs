import React from 'react';
import { IconProps } from '../types';

export const CopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        ref={ref}
        {...rest}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_7662_120821)">
          <path
            d="M8.33333 14.167L15 14.167C16.3807 14.167 17.5 13.0477 17.5 11.667V5.00033C17.5 3.61961 16.3807 2.50033 15 2.50033L8.33333 2.50033C6.95262 2.50033 5.83333 3.61961 5.83333 5.00033L5.83333 11.667C5.83333 13.0477 6.95262 14.167 8.33333 14.167Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33333 14.167L15 14.167C16.3807 14.167 17.5 13.0477 17.5 11.667V5.00033C17.5 3.61961 16.3807 2.50033 15 2.50033L8.33333 2.50033C6.95262 2.50033 5.83333 3.61961 5.83333 5.00033L5.83333 11.667C5.83333 13.0477 6.95262 14.167 8.33333 14.167Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1667 16.7675C13.9348 17 13.6592 17.1843 13.3558 17.31C13.0525 17.4356 12.7273 17.5001 12.3989 17.4997H5C4.33696 17.4997 3.70107 17.2363 3.23223 16.7674C2.76339 16.2986 2.5 15.6627 2.5 14.9997V7.60079C2.49956 7.27242 2.56403 6.9472 2.68969 6.64382C2.81534 6.34045 2.99972 6.0649 3.23222 5.83301"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_7662_120821">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
