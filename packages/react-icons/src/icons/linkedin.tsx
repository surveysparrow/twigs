import React from 'react';
import { IconProps } from '../types';

export const LinkedinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_179)">
          <path
            d="M11.9787 14.2888V20.1797"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.904 20.1797V16.7428C15.904 15.3868 17.002 14.2888 18.3581 14.2888C19.7141 14.2888 20.8121 15.3868 20.8121 16.7428V20.1797"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <circle
            cx="11.9763"
            cy="10.9755"
            r="0.75"
            stroke={color}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4854 7.51459C29.1715 12.2007 29.1715 19.7993 24.4854 24.4854C19.7993 29.1715 12.2007 29.1715 7.51459 24.4854C2.82847 19.7993 2.82847 12.2007 7.51459 7.51459C12.2007 2.82847 19.7993 2.82847 24.4854 7.51459Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_179">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
