import React from 'react';
import { IconProps } from '../types';

export const TicketIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_633_578)">
          <path
            d="M28 19.3537V23.0124C28 23.6959 27.455 24.25 26.7827 24.25H16L5.21734 24.25C4.54502 24.25 4 23.6959 4 23.0124L4 19.3537C4.90207 19.3537 5.41098 19.1388 6.09922 18.4391C7.47571 17.0397 7.47571 14.9603 6.09922 13.5609C5.41098 12.8612 4.90207 12.6463 4 12.6463L4 8.98763C4 8.30411 4.54502 7.75 5.21734 7.75L26.7827 7.75C27.455 7.75 28 8.30411 28 8.98763"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 19.3537C27.0979 19.3537 26.589 19.1388 25.9008 18.4391C24.5243 17.0397 24.5243 14.9603 25.9008 13.5609C26.589 12.8612 27.0979 12.6463 28 12.6463L28 8.98763"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 19.3537L27.9996 23.01C27.9996 23.6943 27.4534 24.2487 26.7803 24.2476L21.0877 24.2387C20.6848 24.2381 20.3584 23.9058 20.3584 23.4961V8.65527C20.3584 8.55401 20.3788 8.45364 20.4271 8.36463C20.5434 8.15018 20.7955 7.75955 21.0878 7.75914L26.7806 7.75124C27.4535 7.75031 28 8.30345 28 8.98763"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_633_578">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
