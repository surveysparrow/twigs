import React from 'react';
import { IconProps } from '../types';

export const HeatmapIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_475_14)">
          <path
            d="M4 21.5634L25.6338 21.5634"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.1549 5.67614V10.7466"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.0986 15.817L11.0986 27.986"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.35211 15.1408L24.2817 15.1408C25.0284 15.1408 25.6338 15.7462 25.6338 16.493V26.6338C25.6338 27.3806 25.0284 27.9859 24.2817 27.9859H5.35211C4.60536 27.9859 4 27.3806 4 26.6338L4 16.493C4 15.7462 4.60536 15.1408 5.35211 15.1408Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.07042 5L26.6479 5C27.3946 5 28 5.60536 28 6.35211V10.0704C28 10.8172 27.3946 11.4225 26.6479 11.4225L9.07042 11.4225C8.32367 11.4225 7.71831 10.8172 7.71831 10.0704V6.35211C7.71831 5.60536 8.32367 5 9.07042 5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_475_14">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
