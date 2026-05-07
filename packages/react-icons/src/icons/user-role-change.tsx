import React from 'react';
import { IconProps } from '../types';

export const UserRoleChangeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1649_35)">
          <path
            d="M14.4004 26.8005L16 25.2009"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 25.2009L14.4004 23.6013"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 25.2009C9.3724 25.2009 4 23.1116 4 20.534C4.08437 19.6547 4.57846 18.8667 5.3332 18.4076"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6668 18.4076C27.4215 18.8667 27.9156 19.6547 28 20.534C28 22.4972 24.88 24.1736 20.4664 24.8636"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.1028 18.4449H11.8972C11.5127 18.4435 11.2013 18.1322 11.2 17.7477V17.1813C11.2046 15.5712 12.5083 14.2669 14.1184 14.2617H17.8816C19.4917 14.2669 20.7954 15.5712 20.8 17.1813V17.7477C20.7987 18.1322 20.4873 18.4435 20.1028 18.4449Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 10.7768C14.4609 10.7775 13.2122 9.53113 13.21 7.99202C13.2078 6.4529 14.4529 5.20299 15.992 5.19923C17.5311 5.19549 18.7823 6.43932 18.7876 7.97843C18.7902 8.71952 18.4976 9.43115 17.9746 9.95619C17.4516 10.4812 16.7411 10.7765 16 10.7768Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1649_35">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
