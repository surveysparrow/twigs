import React from 'react';
import { IconProps } from '../types';

export const FolderSearchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_636_594)">
          <path
            d="M19.7067 21.6673L17.8934 19.8539"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.3333 9.25398H16.7053C16.264 9.25398 15.8507 9.03532 15.6027 8.66998L13.7293 5.91665C13.4813 5.55265 13.0693 5.33398 12.628 5.33398H6.66667C5.19333 5.33398 4 6.52732 4 8.00065V24.0007C4 25.474 5.19333 26.6673 6.66667 26.6673H25.3333C26.8067 26.6673 28 25.474 28 24.0007V11.9207C28 10.4487 26.8067 9.25398 25.3333 9.25398Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.8924 15.2803C19.154 16.542 19.154 18.5875 17.8924 19.8492C16.6307 21.1108 14.5852 21.1108 13.3235 19.8492C12.0619 18.5875 12.0619 16.542 13.3235 15.2803C14.5852 14.0187 16.6307 14.0187 17.8924 15.2803Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_636_594">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
