import React from 'react';
import { IconProps } from '../types';

export const PencilSquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_234)">
          <path
            d="M28 14.6667V25.3333C28 26.8067 26.8067 28 25.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H16"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12 20L16.2 19.4813C16.4947 19.4453 16.7693 19.3107 16.98 19.1013L27.1547 8.92667C28.2813 7.8 28.2813 5.97333 27.1547 4.84533C26.028 3.71867 24.2013 3.71867 23.0733 4.84533L12.9933 14.9253C12.7893 15.1293 12.6573 15.3933 12.616 15.68L12 20Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_234">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
