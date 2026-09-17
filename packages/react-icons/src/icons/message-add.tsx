import React from 'react';
import { IconProps } from '../types';

export const MessageAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_972_28)">
          <path
            d="M13 14H19"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 17V11"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.676 24H24C26.2091 24 28 22.2091 28 20V8C28 5.79086 26.2091 4 24 4H8C5.79086 4 4 5.79086 4 8V20C4 22.2091 5.79086 24 8 24H10.676V27.2572C10.676 27.5422 10.8394 27.802 11.0963 27.9255C11.3532 28.049 11.6581 28.0143 11.8807 27.8362L16.676 24Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_972_28">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
