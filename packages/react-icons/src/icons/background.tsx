import React from 'react';
import { IconProps } from '../types';

export const BackgroundIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1905_64)">
          <path
            d="M21.3333 17.36L17.9467 14.6L15.0933 17.5733L13.5333 16.5333L10.6667 18.9466"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.3773 26.3893L26.1253 27.1666C27.0067 27.5586 28 26.9133 28 25.948V6.05195C28 5.08662 27.0067 4.44128 26.1253 4.83328L24.3773 5.61062C19.044 7.98128 12.956 7.98128 7.62267 5.61062L5.87467 4.83328C4.99333 4.44128 4 5.08662 4 6.05195V25.948C4 26.9133 4.99333 27.5586 5.87467 27.1666L7.62267 26.3893C12.956 24.0199 19.044 24.0199 24.3773 26.3893Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 20.6666H12C11.264 20.6666 10.6667 20.0693 10.6667 19.3333V12.6666C10.6667 11.9306 11.264 11.3333 12 11.3333H20C20.736 11.3333 21.3333 11.9306 21.3333 12.6666V19.3333C21.3333 20.0693 20.736 20.6666 20 20.6666Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1905_64">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
