import React from 'react';
import { IconProps } from '../types';

export const LayoutSplitMiddleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_603)">
          <path
            d="M28.0061 15.3326H3.99605"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.99512 28.0041H26.0051C27.1097 28.0041 28.0051 27.1087 28.0051 26.0041V5.99414C28.0051 4.88957 27.1097 3.99414 26.0051 3.99414H5.99512C4.89055 3.99414 3.99512 4.88957 3.99512 5.99414V26.0041C3.99512 27.1087 4.89055 28.0041 5.99512 28.0041Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_603">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
