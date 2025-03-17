import React from 'react';
import { IconProps } from '../types';

export const UserIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...rest}
      >
        <g clipPath="url(#clip0_11624_24128)">
          <rect
            x="8.55469"
            y="4"
            width="7.11116"
            height="7.11116"
            rx="3.55558"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.55558 14.2852H15.6667C17.6304 14.2852 19.2223 15.877 19.2223 17.8407V19.1106C19.2223 19.6015 18.8244 19.9995 18.3334 19.9995H5.8889C5.39797 19.9995 5 19.6015 5 19.1106V17.8407C5 15.877 6.59189 14.2852 8.55558 14.2852Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_11624_24128">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
