import React from 'react';
import { IconProps } from '../types';

export const StrokeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_752_32)">
          <path
            d="M5 6.43945H27"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.37443 25.5621H25.6256C26.3846 25.5621 27 24.9467 27 24.1876V21.4365C27 20.6774 26.3846 20.0621 25.6256 20.0621H6.37443C5.61535 20.0621 5 20.6774 5 21.4365V24.1876C5 24.9467 5.61535 25.5621 6.37443 25.5621Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.37443 15.6483H25.6256C26.3846 15.6483 27 15.0329 27 14.2739V12.9147C27 12.1556 26.3846 11.5403 25.6256 11.5403H6.37443C5.61535 11.5403 5 12.1556 5 12.9147V14.2739C5 15.0329 5.61535 15.6483 6.37443 15.6483Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_752_32">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
