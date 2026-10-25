import React from 'react';
import { IconProps } from '../types';

export const ZoomOutIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_284)">
          <path
            d="M26.6666 26.6673L22.4044 22.4051"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.4044 22.4051C21.0059 23.8036 19.224 24.756 17.2842 25.1418C15.3444 25.5277 13.3337 25.3297 11.5065 24.5728C9.67922 23.8159 8.11743 22.5342 7.01862 20.8897C5.9198 19.2452 5.33331 17.3118 5.33331 15.334C5.33351 12.6819 6.38714 10.1385 8.26246 8.26314C10.1378 6.38781 12.6812 5.33418 15.3333 5.33398C17.3111 5.33398 19.2445 5.92047 20.889 7.01929C22.5335 8.1181 23.8152 9.67989 24.5721 11.5072C25.329 13.3344 25.527 15.3451 25.1412 17.2849C24.7553 19.2247 23.8029 21.0065 22.4044 22.4051Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.6666 15.334H18"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_284">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
