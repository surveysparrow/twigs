import React from 'react';
import { IconProps } from '../types';

export const ColorDropperIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.65, ...rest
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
        <g clipPath="url(#clip0_941_566)">
          <path
            d="M8.92965 25.0882C8.00138 24.168 7.26456 23.0731 6.76172 21.8666C6.25889 20.6601 6 19.3659 6 18.0588C6 16.7517 6.25889 15.4576 6.76172 14.2511C7.26456 13.0446 8.00138 11.9496 8.92965 11.0294L16.0025 4L23.0753 11.0294C24.0021 11.9504 24.7377 13.0457 25.2396 14.2521C25.7416 15.4585 26 16.7522 26 18.0589C26 19.3655 25.7416 20.6593 25.2396 21.8657C24.7377 23.0721 24.0021 24.1673 23.0753 25.0883C21.1938 26.9535 18.6518 28 16.0025 28C13.3532 28 10.8111 26.9534 8.92965 25.0882Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_941_566">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
