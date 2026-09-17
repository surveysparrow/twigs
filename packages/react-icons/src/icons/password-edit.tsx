import React from 'react';
import { IconProps } from '../types';

export const PasswordEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1995_564)">
          <path
            d="M22.4308 21.5684C22.3007 21.4381 22.3008 21.2271 22.431 21.0969C22.5611 20.9668 22.7722 20.9668 22.9024 21.0969C23.0326 21.2271 23.0326 21.4381 22.9025 21.5684C22.7723 21.6986 22.5611 21.6986 22.4308 21.5684"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.7641 21.5684C15.6339 21.4381 15.634 21.2271 15.7642 21.0969C15.8944 20.9668 16.1054 20.9668 16.2356 21.0969C16.3658 21.2271 16.3659 21.4381 16.2358 21.5684C16.1055 21.6986 15.8943 21.6986 15.7641 21.5684"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.09755 21.5684C8.96744 21.4381 8.96751 21.2271 9.0977 21.0969C9.2279 20.9668 9.43893 20.9668 9.56913 21.0969C9.69932 21.2271 9.69939 21.4381 9.56928 21.5684C9.43901 21.6986 9.22782 21.6986 9.09755 21.5684"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 14.6667H25.3333C26.0406 14.6665 26.719 14.9474 27.2192 15.4475C27.7193 15.9476 28.0002 16.626 28 17.3333V25.3333C28.0002 26.0406 27.7193 26.719 27.2192 27.2192C26.719 27.7193 26.0406 28.0002 25.3333 28H6.66667C5.95936 28.0002 5.28097 27.7193 4.78083 27.2192C4.28069 26.719 3.99981 26.0406 4 25.3333V20"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.9725 4.39068C13.2226 4.14057 13.5617 4.00003 13.9154 4C14.269 3.99997 14.6082 4.14044 14.8583 4.39051L16.9428 6.47502C17.1929 6.72509 17.3334 7.06427 17.3333 7.41793C17.3333 7.77159 17.1928 8.11075 16.9427 8.36079L9.69083 15.6097C9.44079 15.8596 9.10173 16 8.74819 16H6C5.63181 16 5.33333 15.7015 5.33333 15.3333V12.5855C5.33332 12.2319 5.47373 11.8928 5.72368 11.6428L12.9725 4.39068Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1995_564">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
