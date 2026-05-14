import React from 'react';
import { IconProps } from '../types';

export const TicketVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1274_17571)">
          <path
            d="M19.3537 4H23.0124C23.6959 4 24.25 4.54502 24.25 5.21734L24.25 16L24.25 26.7827C24.25 27.455 23.6959 28 23.0124 28L19.3537 28C19.3537 27.0979 19.1388 26.589 18.4391 25.9008C17.0397 24.5243 14.9603 24.5243 13.5609 25.9008C12.8612 26.589 12.6463 27.0979 12.6463 28L8.98763 28C8.30411 28 7.75 27.455 7.75 26.7827L7.75 5.21735C7.75 4.54503 8.30411 4 8.98763 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3537 4C19.3537 4.90207 19.1388 5.41098 18.4391 6.09922C17.0397 7.47571 14.9603 7.47571 13.5609 6.09922C12.8612 5.41098 12.6463 4.90207 12.6463 4L8.98763 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3537 4L23.01 4.00045C23.6943 4.00045 24.2487 4.54661 24.2476 5.21966L24.2387 10.9123C24.2381 11.3152 23.9058 11.6416 23.4961 11.6416H8.80882C8.6063 11.6416 8.40345 11.6031 8.23186 11.4955C8.01962 11.3624 7.75947 11.1507 7.75914 10.9122L7.75124 5.21945C7.75031 4.54648 8.30345 4 8.98763 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1274_17571">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
