import React from 'react';
import { IconProps } from '../types';

export const CameraIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_759)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.8389 13.5577C21.915 15.6337 21.915 18.9997 19.8389 21.0757C17.7629 23.1517 14.397 23.1517 12.321 21.0757C10.2449 18.9997 10.2449 15.6337 12.321 13.5577C14.397 11.4817 17.7629 11.4817 19.8389 13.5577Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 12.0007V24.0007C28 25.474 26.8067 26.6673 25.3333 26.6673H6.66667C5.19333 26.6673 4 25.474 4 24.0007V12.0007C4 10.5273 5.19333 9.33398 6.66667 9.33398H9.33333L11.2827 5.99532C11.5213 5.58598 11.96 5.33398 12.4347 5.33398H19.5067C19.9747 5.33398 20.408 5.57932 20.6493 5.97932L22.6667 9.33398H25.3333C26.8067 9.33398 28 10.5273 28 12.0007Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_759">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
