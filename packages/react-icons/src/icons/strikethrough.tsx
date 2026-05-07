import React from 'react';
import { IconProps } from '../types';

export const StrikethroughIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_408)">
          <path
            d="M18.3988 17.334L18.8202 17.4967C20.6468 18.2033 21.8522 19.9593 21.8522 21.918V21.926C21.8522 24.5446 19.7295 26.6673 17.1108 26.6673H13.5548C10.9362 26.6673 8.8135 24.5446 8.8135 21.926"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.3335 17.334H26.6668"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.0122 13.418C9.27083 12.5487 8.81483 11.4487 8.81483 10.2553C8.81483 7.53798 11.0188 5.33398 13.7362 5.33398H17.1108C19.7295 5.33398 21.8508 7.45665 21.8522 10.074"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_408">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
