import React from 'react';
import { IconProps } from '../types';

export const LayoutAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1879_561)">
          <path
            d="M5.33333 12.3578V10.6667C5.33314 9.95962 5.61382 9.28145 6.11364 8.78135C6.61347 8.28125 7.29148 8.00019 7.99853 8H24C24.7071 7.9998 25.3852 8.28049 25.8853 8.78031C26.3854 9.28013 26.6665 9.95815 26.6667 10.6652V12.3574"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.6667 20H18.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 22.3333V17.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.66667 8.3574V6.66667C6.66647 5.95962 6.94716 5.28145 7.44698 4.78135C7.9468 4.28125 8.62482 4.00019 9.33187 4H22.6667C23.3737 3.9998 24.0519 4.28049 24.552 4.78031C25.0521 5.28013 25.3331 5.95815 25.3333 6.6652V8.3574"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3333 28H6.66667C5.19391 28 4 26.8061 4 25.3333V14.6667C4 13.1939 5.19391 12 6.66667 12H25.3333C26.8061 12 28 13.1939 28 14.6667V25.3333C28 26.8061 26.8061 28 25.3333 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1879_561">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
