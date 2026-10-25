import React from 'react';
import { IconProps } from '../types';

export const LayoutSplitTopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_605)">
          <path
            d="M28.0059 10.6661H3.99593"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.99499 28.0041H26.005C27.1096 28.0041 28.005 27.1087 28.005 26.0041V5.99414C28.005 4.88957 27.1096 3.99414 26.005 3.99414H5.995C4.89043 3.99414 3.995 4.88957 3.995 5.99414V26.0041C3.995 27.1087 4.89042 28.0041 5.99499 28.0041Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_605">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
