import React from 'react';
import { IconProps } from '../types';

export const BuildingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2625_17731)">
          <path
            d="M26.8 26.8007V6.74506C26.7983 6.23996 26.5495 5.76766 26.134 5.48057C25.7184 5.19347 25.1886 5.12791 24.7156 5.30506L17.0008 8.19346C16.3977 8.41951 15.9986 8.99659 16 9.64066V26.8007L16 13.3007C16 12.5551 15.3956 11.9507 14.65 11.9507H6.55C5.80442 11.9507 5.2 12.5551 5.2 13.3007V26.8007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.5756 20.0507H12.6256"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.5756 16.0007H12.6256"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6 24.7763V26.8007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 26.8007H4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.6 12.4691V22.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.2 12.4691V22.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.25 7.90066H11.95C12.6956 7.90066 13.3 8.50507 13.3 9.25066V11.9507H7.9V9.25066C7.9 8.50507 8.50442 7.90066 9.25 7.90066Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2625_17731">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
