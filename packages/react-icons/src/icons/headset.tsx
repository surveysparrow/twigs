import React from 'react';
import { IconProps } from '../types';

export const HeadsetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1238_557)">
          <path
            d="M24 22.411H25.3333C26.8067 22.411 28 21.234 28 19.7808V15.8356C28 14.3825 26.8067 13.2055 25.3333 13.2055H24C23.264 13.2055 22.6667 13.7946 22.6667 14.5205V21.0959C22.6667 21.8218 23.264 22.411 24 22.411Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24 22.411V23.726C24 25.1792 22.8067 26.3562 21.3333 26.3562H18.5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.6667 13.2055V12.5479C24.6667 7.82685 20.7867 4 16 4C11.2133 4 7.33333 7.82685 7.33333 12.5479V13.2055"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.5 26.3562C18.5 25.4488 17.7533 24.7123 16.8333 24.7123H15.1667C14.2467 24.7123 13.5 25.4488 13.5 26.3562C13.5 27.2636 14.2467 28 15.1667 28H16.8333C17.7533 28 18.5 27.2636 18.5 26.3562Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8 22.411H6.66667C5.19333 22.411 4 21.234 4 19.7808V15.8356C4 14.3825 5.19333 13.2055 6.66667 13.2055H8C8.736 13.2055 9.33333 13.7946 9.33333 14.5205V21.0959C9.33333 21.8218 8.736 22.411 8 22.411Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1238_557">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
