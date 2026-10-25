import React from 'react';
import { IconProps } from '../types';

export const FaceNeutralIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_537)">
          <path
            d="M20.4373 12.6927C20.2533 12.6927 20.104 12.842 20.1053 13.026C20.1053 13.21 20.2546 13.3594 20.4386 13.3594C20.6226 13.3594 20.772 13.21 20.772 13.026C20.772 12.842 20.6226 12.6927 20.4373 12.6927"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12 20H20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 16C28 9.384 22.616 4 16 4C9.38267 4 4 9.38267 4 16C4 22.6173 9.38267 28 16 28C22.6173 28 28 22.616 28 16Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.5189 12.6673C11.3349 12.6673 11.1855 12.8167 11.1869 13.0007C11.1869 13.1847 11.3362 13.334 11.5202 13.334C11.7042 13.334 11.8535 13.1847 11.8535 13.0007C11.8535 12.8167 11.7042 12.6673 11.5189 12.6673"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_537">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
