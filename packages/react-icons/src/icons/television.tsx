import React from 'react';
import { IconProps } from '../types';

export const TelevisionIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.40165, ...rest
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
        <g clipPath="url(#clip0_22_400)">
          <path
            d="M7.26007 27.2163C12.0867 25.5555 19.9135 25.5555 24.7415 27.2163"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.5089 22.0246H6.49134C5.1146 22.0246 3.99951 20.9095 3.99951 19.5328V7.35901C3.99951 5.98228 5.1146 4.86719 6.49134 4.86719H25.5077C26.8844 4.86719 27.9995 5.98228 27.9995 7.35901V19.5341C28.0008 20.9095 26.8844 22.0246 25.5089 22.0246Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_400">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
