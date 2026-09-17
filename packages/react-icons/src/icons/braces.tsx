import React from 'react';
import { IconProps } from '../types';

export const BracesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3633_45)">
          <path
            d="M11.0583 28C9.10921 28 7.52916 26.3211 7.52916 24.25V19.75C7.52916 18.7554 7.15734 17.8016 6.49549 17.0983C5.83365 16.3951 4.93599 16 4 16C4.93599 16 5.83365 15.6049 6.49549 14.9017C7.15734 14.1984 7.52916 13.2446 7.52916 12.25V7.75C7.52916 5.67893 9.10921 4 11.0583 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.9417 4C22.8908 4 24.4708 5.67893 24.4708 7.75V12.25C24.4708 14.3211 26.0509 16 28 16C26.0509 16 24.4708 17.6789 24.4708 19.75V24.25C24.4708 26.3211 22.8908 28 20.9417 28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3633_45">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
