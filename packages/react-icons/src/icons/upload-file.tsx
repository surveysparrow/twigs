import React from 'react';
import { IconProps } from '../types';

export const UploadFileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_147)">
          <path
            d="M17.3335 28H22.6668C23.7277 28 24.7451 27.5786 25.4953 26.8284C26.2454 26.0783 26.6668 25.0609 26.6668 24V11.3457C26.6668 10.2849 26.2454 9.26748 25.4953 8.51733L22.1495 5.17157C21.3994 4.42143 20.3819 4 19.3211 4H9.3335C8.27263 4 7.25521 4.42143 6.50507 5.17157C5.75492 5.92172 5.3335 6.93913 5.3335 8V16"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6668 11.3333H22.0002C21.2929 11.3333 20.6146 11.0524 20.1145 10.5523C19.6144 10.0522 19.3335 9.37391 19.3335 8.66667V4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.66683 26.6667L12.0002 21.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.0002 21.3333H8.00016"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.0002 21.3333V25.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_147">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
