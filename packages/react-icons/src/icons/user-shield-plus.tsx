import React from 'react';
import { IconProps } from '../types';

export const UserShieldPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_428)">
          <path
            d="M19.1506 17.0607C17.4186 16.3687 15.3866 15.9874 13.3333 15.9874C7.93596 15.9874 2.66663 18.6101 2.66663 22.6434V23.9767C2.66663 24.7127 3.26396 25.3101 3.99996 25.3101H16.5506"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.1112 22.6664H24.2223"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.667 24.2217V21.1106"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.6256 4.02973C18.4438 5.84801 18.4438 8.79602 16.6256 10.6143C14.8073 12.4326 11.8593 12.4326 10.041 10.6143C8.22271 8.79602 8.22271 5.84801 10.041 4.02973C11.8593 2.21145 14.8073 2.21145 16.6256 4.02973Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.4448 22.0774V18.7089C16.4419 18.3088 16.7463 17.9734 17.1448 17.9374C18.9999 17.7921 20.7605 17.0599 22.1715 15.8467C22.458 15.6063 22.8758 15.6063 23.1623 15.8467C24.5731 17.0602 26.3338 17.7925 28.189 17.9374C28.5876 17.9738 28.8919 18.3095 28.889 18.7097V22.0782C28.8025 25.5891 26.4484 28.638 23.0737 29.6101C22.8079 29.6847 22.5267 29.6847 22.2609 29.6101C18.8856 28.6382 16.5311 25.5888 16.4448 22.0774Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_428">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
