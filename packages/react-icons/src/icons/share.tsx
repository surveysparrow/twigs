import React from 'react';
import { IconProps } from '../types';

export const ShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_517)">
          <path
            d="M17.2926 17.4626V21.5533C17.2926 22.7093 18.6646 23.3173 19.522 22.5413L27.562 15.2533C28.1593 14.712 28.1433 13.7693 27.5286 13.2493L19.4886 6.42529C18.622 5.68929 17.2926 6.30529 17.2926 7.44129V10.6906C10.0086 10.6906 3.95931 15.1866 3.95931 22.6666V24.172C6.42198 19.26 11.542 17.4626 17.2926 17.4626V17.4626Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_517">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
