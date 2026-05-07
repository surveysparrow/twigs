import React from 'react';
import { IconProps } from '../types';

export const TemplatesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1915_603)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2 4C12.5255 4 13.6 5.13097 13.6 6.52609V11.5783C13.6 12.9734 12.5255 14.1044 11.2 14.1044H6.4C5.07452 14.1044 4 12.9734 4 11.5783V6.52609C4 5.13097 5.07452 4 6.4 4H11.2Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 22.9457C4.00013 20.1557 6.14887 17.8939 8.79964 17.8935C11.4356 17.9352 13.5624 20.1754 13.6 22.9499C13.5989 25.7402 11.449 28.0012 8.79799 28C6.14702 27.9988 3.99889 25.7359 4 22.9457Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.6 4.00001C26.9255 4.00001 28 5.13098 28 6.5261V25.4718C28 26.8669 26.9255 27.9979 25.6 27.9979H19.6C18.2745 27.9979 17.2 26.8669 17.2 25.4718V6.52611C17.2 5.13098 18.2745 4.00001 19.6 4.00001H25.6Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1915_603">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
