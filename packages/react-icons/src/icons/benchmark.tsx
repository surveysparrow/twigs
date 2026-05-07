import React from 'react';
import { IconProps } from '../types';

export const BenchmarkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_655)">
          <path
            d="M26.6665 16.0009V26.6675"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.5999 19.5609V26.6675"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.33319 22.6675V26.6675"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.3999 18.1342V26.6675"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.0265 8.48087L21.3865 11.5075"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.6532 11.7075L14.3332 9.48087"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.98652 12.7075L10.6132 9.68087"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.2524 11.3456C22.1636 12.2568 22.1636 13.7342 21.2524 14.6454C20.3412 15.5567 18.8638 15.5567 17.9526 14.6454C17.0413 13.7342 17.0413 12.2568 17.9526 11.3456C18.8638 10.4344 20.3412 10.4344 21.2524 11.3456Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.4564 5.34162C29.3676 6.25285 29.3676 7.73023 28.4564 8.64145C27.5452 9.55267 26.0678 9.55267 25.1566 8.64145C24.2453 7.73022 24.2453 6.25283 25.1566 5.34162C26.0678 4.4304 27.5452 4.4304 28.4564 5.34162Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.84311 12.5376C7.75433 13.4488 7.75433 14.9262 6.84311 15.8374C5.93188 16.7487 4.45449 16.7487 3.54328 15.8374C2.63206 14.9262 2.63206 13.4488 3.54328 12.5376C4.45451 11.6264 5.93189 11.6264 6.84311 12.5376Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.0484 6.53495C14.9596 7.44618 14.9596 8.92357 14.0484 9.83478C13.1372 10.746 11.6598 10.746 10.7486 9.83478C9.83734 8.92356 9.83734 7.44617 10.7486 6.53495C11.6598 5.62373 13.1372 5.62373 14.0484 6.53495Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_655">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
