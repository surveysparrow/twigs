import React from 'react';
import { IconProps } from '../types';

export const ClockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_463)">
          <path
            d="M20.4999 19.5L15.6253 17.4187V10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4853 7.51472C29.1715 12.201 29.1715 19.799 24.4853 24.4853C19.799 29.1715 12.201 29.1715 7.51472 24.4853C2.82843 19.799 2.82843 12.201 7.51472 7.51472C12.201 2.82843 19.799 2.82843 24.4853 7.51472Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_463">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
