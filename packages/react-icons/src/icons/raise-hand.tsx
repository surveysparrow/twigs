import React from 'react';
import { IconProps } from '../types';

export const RaiseHandIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1099_578)">
          <path
            d="M12.9639 15.9993V4.66602C12.9639 3.56202 13.8599 2.66602 14.9639 2.66602C16.0679 2.66602 16.9639 3.56202 16.9639 4.66602V15.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.9639 7.33231C12.9639 6.22831 12.0679 5.33231 10.9639 5.33231C9.8599 5.33231 8.9639 6.22831 8.9639 7.33231V15.999"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.9639 7.33231C16.9639 6.22831 17.8599 5.33231 18.9639 5.33231C20.0679 5.33231 20.9639 6.22831 20.9639 7.33231V18.6656L23.4986 16.131C24.3079 15.3216 25.6199 15.3216 26.4292 16.131C27.1279 16.8296 27.2359 17.9243 26.6879 18.7456L22.0052 25.7696C20.5212 27.995 18.0239 29.3323 15.3492 29.3323H12.9639C8.54523 29.3323 4.9639 25.751 4.9639 21.3323V9.99898C4.9639 8.89498 5.8599 7.99898 6.9639 7.99898C8.0679 7.99898 8.9639 8.89498 8.9639 9.99898"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1099_578">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
