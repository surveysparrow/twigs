import React from 'react';
import { IconProps } from '../types';

export const FolderDeleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1018_568)">
          <path
            d="M3.5 28.5L28.5 3.5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.81579 21.9211V7.44737C4.81579 5.99399 5.99399 4.81579 7.44737 4.81579H13.3304C13.7744 4.81579 14.1896 5.03547 14.4393 5.40253L16.3342 8.18754C16.5792 8.54762 16.9865 8.76315 17.422 8.76316H17.9737"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.2368 8.76316H25.8684C27.3218 8.76316 28.5 9.94136 28.5 11.3947V23.2368C28.5 24.6902 27.3218 25.8684 25.8684 25.8684H6.13158"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1018_568">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
