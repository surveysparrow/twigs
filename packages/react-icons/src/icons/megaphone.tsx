import React from 'react';
import { IconProps } from '../types';

export const MegaphoneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_496_42)">
          <path
            d="M15.3333 18.3498L16.2587 23.9045C16.5587 25.7085 15.168 27.3498 13.34 27.3498C11.8933 27.3498 10.6587 26.3045 10.4213 24.8765L9.33334 18.3498"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.3333 18.3471V9.34715"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.3333 18.3498H7.83334C5.34801 18.3498 3.33334 16.3351 3.33334 13.8498C3.33334 11.3645 5.34801 9.34981 7.83334 9.34981H18.3333L25.0013 4.90448C25.9987 4.24048 27.3333 4.95515 27.3333 6.15381V21.5471C27.3333 22.7458 25.9987 23.4591 25.0013 22.7951L18.3333 18.3498Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_496_42">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
