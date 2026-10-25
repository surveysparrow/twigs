import React from 'react';
import { IconProps } from '../types';

export const MailEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1351_566)">
          <path
            d="M14.3202 24.8918H9.1601C6.31026 24.8918 4 22.5568 4 19.6764V10.5494C4 7.66901 6.31026 5.33398 9.1601 5.33398H22.0604C24.9102 5.33398 27.2205 7.66901 27.2205 10.5494V14.461"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.1601 11.2014L14.5842 13.5917C15.2392 13.8804 15.9834 13.8815 16.6394 13.5949L22.0604 11.2257"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3344 26.6673H22.8355L27.6368 21.8145C28.1211 21.3251 28.1211 20.534 27.6368 20.0458L25.8869 18.2772C25.4027 17.7877 24.62 17.7877 24.137 18.2772L19.3357 23.13L19.3344 26.6673Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1351_566">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
