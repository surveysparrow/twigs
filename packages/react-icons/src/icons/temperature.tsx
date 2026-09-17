import React from 'react';
import { IconProps } from '../types';

export const TemperatureIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1539_592)">
          <path
            d="M7.50683 18.2427V7.25867C7.50683 5.45867 8.9655 4 10.7655 4C12.5655 4 14.0242 5.45867 14.0242 7.25867V18.2453C15.3362 19.2373 16.1975 20.7947 16.1975 22.5653C16.1975 25.568 13.7655 28 10.7655 28C7.7655 28 5.3335 25.568 5.3335 22.568C5.3335 20.7973 6.19483 19.2373 7.50683 18.248"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0002 9.33333H26.6668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0002 5.33333H26.6668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0002 13.3333H26.6668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6668 20.6667C11.7714 20.6667 12.6668 21.5621 12.6668 22.6667C12.6668 23.7712 11.7714 24.6667 10.6668 24.6667C9.56226 24.6667 8.66683 23.7712 8.66683 22.6667C8.66683 21.5621 9.56226 20.6667 10.6668 20.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6668 20.6667V12"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1539_592">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
