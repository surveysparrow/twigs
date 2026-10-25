import React from 'react';
import { IconProps } from '../types';

export const ReplyIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_835)">
          <path
            d="M14.6666 17.4626V21.5533C14.6666 22.7093 13.2946 23.3173 12.4373 22.5413L4.39725 15.2533C3.79992 14.712 3.81592 13.7693 4.43058 13.2493L12.4706 6.42529C13.3372 5.68929 14.6666 6.30529 14.6666 7.44129V10.6906C21.9506 10.6906 27.9999 15.1866 27.9999 22.6666V24.172C25.5373 19.26 20.4173 17.4626 14.6666 17.4626V17.4626Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_835">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
