import React from 'react';
import { IconProps } from '../types';

export const FileHistoryIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1396_1957)">
          <path
            d="M23.1176 12.7105V9.85263C23.1176 9.15526 22.8446 8.48553 22.3593 7.99211L18.6995 4.27105C18.2142 3.77763 17.5555 3.5 16.8696 3.5H7.58823C6.15824 3.5 5 4.67763 5 6.13158V24.5526C5 26.0066 6.15824 27.1842 7.58823 27.1842H12.7647"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.1176 10.0789H17.9412C17.2268 10.0789 16.6471 9.48947 16.6471 8.76316V3.5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.038 20.5829V22.8961L22.8265 24.0053"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.1765 28.5C17.9606 28.5 15.3529 25.8487 15.3529 22.5789C15.3529 19.3092 17.9606 16.6579 21.1765 16.6579C24.3936 16.6579 27 19.3092 27 22.5789C27 25.8487 24.3936 28.5 21.1765 28.5Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1396_1957">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
