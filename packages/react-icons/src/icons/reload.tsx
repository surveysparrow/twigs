import React from 'react';
import { IconProps } from '../types';

export const ReloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_505)">
          <path
            d="M25.9839 6.18598V10.9007H21.2706"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3693 10.9007C23.5599 7.58465 20.0426 5.33398 15.9999 5.33398C10.1093 5.33398 5.33325 10.11 5.33325 16.0007C5.33325 21.8913 10.1093 26.6673 15.9999 26.6673C21.8906 26.6673 26.6666 21.8913 26.6666 16.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_505">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
