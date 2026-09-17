import React from 'react';
import { IconProps } from '../types';

export const GlobeContinentIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.4423, ...rest
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
        <g clipPath="url(#clip0_22_314)">
          <path
            d="M4 16H9.56224C11.6454 16 13.3331 14.3123 13.3331 12.2291C13.3331 11.2288 12.9357 10.2688 12.2291 9.56224L8.95744 6.29056"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.3886 24.5843L22.0193 21.0304C21.5912 20.3872 20.8692 20.0013 20.0955 20.0013C19.22 20.0013 18.4193 19.5059 18.0276 18.7225L17.851 18.3673C17.5246 17.7164 17.5246 16.9504 17.851 16.2995L19.362 13.2793C19.7537 12.496 20.5544 12.0006 21.4299 12.0006H27.307"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4853 7.51472C29.1716 12.201 29.1716 19.799 24.4853 24.4853C19.799 29.1716 12.201 29.1716 7.51472 24.4853C2.82843 19.799 2.82843 12.201 7.51472 7.51472C12.201 2.82843 19.799 2.82843 24.4853 7.51472Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_314">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
