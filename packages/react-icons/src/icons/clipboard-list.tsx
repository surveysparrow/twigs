import React from 'react';
import { IconProps } from '../types';

export const ClipboardListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_377)">
          <path
            d="M10.6644 6.66192H7.99667C6.52329 6.66192 5.32889 7.85632 5.32889 9.3297V25.3364C5.32889 26.8097 6.52329 28.0041 7.99667 28.0041H11.9983"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3356 6.66192H24.0033C25.4767 6.66192 26.6711 7.85632 26.6711 9.3297V11.9975"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0017 20.0008H24.0033"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0017 24.0025H24.0033"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.3333 28.0041H26.6717C27.408 28.0041 28.005 27.4072 28.005 26.6708V17.3325C28.005 16.5961 27.408 15.9991 26.6717 15.9991H17.3333C16.597 15.9991 16 16.5961 16 17.3325V26.6708C16 27.4072 16.597 28.0041 17.3333 28.0041Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9978 9.3297H20.0022C20.7386 9.3297 21.3356 8.73274 21.3356 7.99636V5.32747C21.3356 4.59109 20.7386 3.99414 20.0022 3.99414H11.9978C11.2614 3.99414 10.6644 4.59109 10.6644 5.32747V7.99636C10.6644 8.73274 11.2614 9.3297 11.9978 9.3297Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_377">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
