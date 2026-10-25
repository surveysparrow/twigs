import React from 'react';
import { IconProps } from '../types';

export const ArrowAlignParentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1520_566)">
          <path
            d="M23.1586 11.9099L15.9999 4.62109L8.84131 11.9099"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9997 6.51805V14.9789"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 23.3809C20 25.59 18.2091 27.3809 16 27.3809C13.7909 27.3809 12 25.59 12 23.3809C12 21.1717 13.7909 19.3809 16 19.3809C18.2091 19.3809 20 21.1717 20 23.3809Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1520_566">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
