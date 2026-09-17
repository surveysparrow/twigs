import React from 'react';
import { IconProps } from '../types';

export const FolderCategoryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1661_70)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5483 22.199H21.2371V25.8878H17.5483V22.199Z"
            fill={color}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.848 26.1952C24.6596 26.1952 23.6963 25.2318 23.6963 24.0434C23.6963 22.855 24.6596 21.8916 25.848 21.8916C27.0364 21.8916 27.9998 22.855 27.9998 24.0434C27.9998 25.2318 27.0364 26.1952 25.848 26.1952Z"
            fill={color}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.4667 15.1289L19.7001 19.4325H25.2332L22.4667 15.1289Z"
            fill={color}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.9423 15.9993V12.0991C26.9423 10.692 25.8015 9.54997 24.3931 9.54997H16.1454C15.7235 9.54997 15.3284 9.34094 15.0913 8.99171L13.3005 6.35972C13.0635 6.01176 12.6696 5.80273 12.2477 5.80273H6.54914C5.14074 5.80273 4 6.94347 4 8.35187V23.6467C4 25.0551 5.14074 26.1959 6.54914 26.1959H14.1966"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1661_70">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
