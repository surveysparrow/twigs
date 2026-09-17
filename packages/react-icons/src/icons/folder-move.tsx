import React from 'react';
import { IconProps } from '../types';

export const FolderMoveIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1018_570)">
          <path
            d="M8 20.0007L10.6667 22.6673"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6667 22.6673L8 25.334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.6667 22.6673H4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6667 26.6673H25.3333C26.8061 26.6673 28 25.4734 28 24.0007V11.9207C28 10.4479 26.8061 9.25398 25.3333 9.25398H16.7055C16.2642 9.25399 15.8514 9.03559 15.6031 8.67069L13.7298 5.91728C13.4815 5.55236 13.0688 5.33397 12.6274 5.33398H6.66667C5.19391 5.33398 4 6.52789 4 8.00065V16.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1018_570">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
