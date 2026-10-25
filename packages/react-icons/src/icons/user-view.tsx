import React from 'react';
import { IconProps } from '../types';

export const UserViewIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_580)">
          <path
            d="M15.0004 17.6687H8.33092C5.38417 17.6687 2.99536 20.0575 2.99536 23.0043V25.672"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.5704 12.9036C13.9521 12.817 15.8426 10.869 15.8579 8.48577C15.8211 6.1542 13.902 4.29345 11.5704 4.32862C9.23879 4.29345 7.31971 6.1542 7.2829 8.48577C7.29758 10.8693 9.1884 12.8176 11.5704 12.9036Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.7059 23.6842C16.2148 22.9397 16.2148 21.9553 16.7059 21.2109C18.2258 18.9109 20.6146 17.0687 23.0034 17.0687C25.3922 17.0687 27.7788 18.9109 29.3009 21.2087C29.7942 21.9531 29.7942 22.9375 29.3009 23.682C27.7766 25.9797 25.39 27.8219 23.0034 27.8219C20.6146 27.8241 18.2258 25.9819 16.7059 23.6842Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <ellipse
            cx="23.0042"
            cy="22.4456"
            rx="2.73145"
            ry="2.34017"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_22_580">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
