import React from 'react';
import { IconProps } from '../types';

export const AlarmRingIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_459)">
          <path
            d="M26.6665 27.7733L23.6532 24.76"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.34654 24.76L5.33321 27.7733"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.6665 12.576V18.0893L19.9999 20.732"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.0185 4.13333C8.42254 3.68 6.63988 4.06 5.38388 5.316C4.30254 6.39866 3.87321 7.87333 4.05988 9.28266"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.9985 4.13333C23.5945 3.68 25.3759 4.06 26.6319 5.316C27.7145 6.39866 28.1439 7.87333 27.9572 9.28266"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9185 7.48133C17.3612 5.22666 23.5999 7.81066 25.8545 13.2533C28.1092 18.696 25.5239 24.9347 20.0825 27.188C14.6399 29.4427 8.40121 26.8573 6.14788 21.416C3.89321 15.9747 6.47721 9.73466 11.9185 7.48133Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_459">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
