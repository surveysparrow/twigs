import React from 'react';
import { IconProps } from '../types';

export const ThumbsUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_753)">
          <path
            d="M10.001 13.802L15.4754 6.83932C16.4941 5.54234 18.4834 5.5101 19.5471 6.77191C19.9447 7.24234 20.1607 7.83441 20.1607 8.44407V13.2378H24.8055C25.7071 13.2378 26.5488 13.6774 27.0498 14.4087L27.5434 15.1283C27.986 15.7746 28.115 16.5792 27.8945 17.3251L25.8556 24.2453C25.5226 25.3752 24.4649 26.1534 23.2617 26.1534H13.8266C13.0765 26.1534 12.3594 25.8486 11.8493 25.3122L10.001 23.3689"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.41674 26.1534H5.58426C4.70962 26.1534 4 25.4602 4 24.6058V13.7786C4 12.9242 4.70962 12.231 5.58426 12.231H8.41674C9.29138 12.231 10.001 12.9242 10.001 13.7786V24.6058C10.001 25.4602 9.29138 26.1534 8.41674 26.1534V26.1534Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_753">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
