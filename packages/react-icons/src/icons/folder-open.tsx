import React from 'react';
import { IconProps } from '../types';

export const FolderOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1608_583)">
          <path
            d="M26.7371 15.0793V12.2104C26.7371 10.8151 25.6061 9.68405 24.2108 9.68405H16.0886C15.6705 9.68405 15.2794 9.47714 15.0442 9.13144L13.2179 6.4472C12.9827 6.10146 12.5916 5.89453 12.1734 5.89453H6.52635C5.13108 5.89453 4 7.02561 4 8.42088V24.1056C4 25.21 4.8953 26.1053 5.9997 26.1053"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.9997 26.1053C7.01864 26.1053 7.87465 25.3392 7.98717 24.3265L8.80299 16.9841C8.94515 15.7047 10.0266 14.7367 11.3139 14.7367H25.4737C26.1922 14.7367 26.8768 15.0428 27.3561 15.5783C27.8353 16.1136 28.064 16.8279 27.9845 17.5421L27.2828 23.858C27.1406 25.1373 26.0592 26.1053 24.7719 26.1053H5.9997Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1608_583">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
