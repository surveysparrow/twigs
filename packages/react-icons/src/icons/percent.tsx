import React from 'react';
import { IconProps } from '../types';

export const PercentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_357)">
          <path
            d="M22.6667 9.33268L9.33336 22.666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.5523 20.7804C25.5937 21.8218 25.5937 23.5103 24.5523 24.5517C23.5109 25.593 21.8225 25.593 20.7811 24.5517C19.7397 23.5103 19.7397 21.8218 20.7811 20.7804C21.8225 19.739 23.5109 19.739 24.5523 20.7804Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.219 7.44706C12.2604 8.48846 12.2604 10.1769 11.219 11.2183C10.1776 12.2597 8.48914 12.2597 7.44774 11.2183C6.40634 10.1769 6.40634 8.48846 7.44774 7.44706C8.48913 6.40567 10.1776 6.40567 11.219 7.44706Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_357">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
