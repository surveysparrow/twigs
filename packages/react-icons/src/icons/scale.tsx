import React from 'react';
import { IconProps } from '../types';

export const ScaleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2881_596)">
          <path
            d="M22.9979 8.20228L18.235 16.2632C18.0633 16.5442 17.9829 16.8715 18.0047 17.2001C18.1506 19.8804 20.32 22.005 23.0027 22.095C25.6838 22.0027 27.8508 19.8788 27.9971 17.2001C28.017 16.8744 27.9357 16.5505 27.7644 16.2728C26.7494 14.5608 22.9979 8.20228 22.9979 8.20228Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9979 8.20228L9.00197 12.3017"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.9491 16.6998H18.0479"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.9521 20.7993H4.05084"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.0007 5.80273V10.5452"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.7673 20.3722C13.9376 20.6516 14.0172 20.9768 13.9953 21.3032C13.8507 23.9822 11.6834 26.1068 9.00204 26.198C6.31974 26.1088 4.14994 23.9854 4.00284 21.3056C3.9833 20.9755 4.06718 20.6476 4.24278 20.3674L9.00564 12.3018L13.7673 20.3722Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2881_596">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
