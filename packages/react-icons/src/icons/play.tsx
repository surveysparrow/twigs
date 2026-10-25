import React from 'react';
import { IconProps } from '../types';

export const PlayIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_402)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8393 9.24786L22.5763 14.6331C23.8079 15.3132 23.8079 16.9809 22.5763 17.6611L12.8393 23.0463C11.5852 23.7405 10 22.8938 10 21.5311V10.763C10 9.40032 11.5852 8.5536 12.8393 9.24786Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_402">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
