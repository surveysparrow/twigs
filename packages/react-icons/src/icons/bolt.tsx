import React from 'react';
import { IconProps } from '../types';

export const BoltIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_300)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.4267 15.4135L17.1216 27.4103C16.3603 28.5087 14.6374 27.9712 14.6374 26.6338V18.7267H7.69467C6.59489 18.7267 5.9469 17.4915 6.57416 16.5865L14.8792 4.58972C15.6405 3.49132 17.3634 4.02878 17.3634 5.36621V13.2733H24.3061C25.4045 13.2733 26.0525 14.5085 25.4267 15.4135Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_300">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
