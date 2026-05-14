import React from 'react';
import { IconProps } from '../types';

export const SwipeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_575_16739)">
          <path
            d="M14.3049 6.3303C14.9416 5.92882 15.6264 5.58573 16.3658 5.32342C19.0532 4.37005 21.8717 4.59678 24.2567 5.73175"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.7005 4L14.1143 6.67135L16.7846 7.25819"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.5775 14.799L10.2675 9.06594C9.65852 8.01107 8.33942 7.63114 7.32315 8.21789C6.30687 8.80464 5.97635 10.137 6.58538 11.1918L12.102 20.7469L10.3334 20.2375C9.14187 19.8943 7.93412 20.5916 7.63557 21.795C7.37785 22.8339 7.88231 23.9373 8.83987 24.4308L15.1308 27.6767C15.9959 28.1234 17.0087 28.106 17.8298 27.6319L24.3202 23.8847C25.5587 23.1697 26.0495 21.6106 25.4679 20.246L22.9431 14.3366C22.3215 12.883 20.6983 12.152 19.2688 12.6835L13.5775 14.799Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_575_16739">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
