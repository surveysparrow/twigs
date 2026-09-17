import React from 'react';
import { IconProps } from '../types';

export const FontCaseIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3038_604)">
          <path
            d="M4 23.3773L8.8468 9.0751C8.89237 8.94065 8.96928 8.82579 9.06783 8.745C9.16638 8.66421 9.28216 8.62109 9.4006 8.62109C9.51903 8.62109 9.63482 8.66421 9.73337 8.745C9.83192 8.82579 9.90883 8.94065 9.9544 9.0751L14.8 23.3773"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 13.2916V23.3772"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.5648 19.7772H13.2352"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 18.3344C28 21.1195 26.1196 23.3772 23.8 23.3772C21.4804 23.3772 19.6 21.1195 19.6 18.3344C19.6 15.5493 21.4804 13.2916 23.8 13.2916C26.1196 13.2916 28 15.5493 28 18.3344Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3038_604">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
