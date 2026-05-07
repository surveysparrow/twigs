import React from 'react';
import { IconProps } from '../types';

export const HelpDocumentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1510_596)">
          <path
            d="M21.3676 25.1792C21.3356 25.1792 21.3076 25.2072 21.3076 25.2392C21.3076 25.2712 21.3356 25.2992 21.3676 25.2992C21.3996 25.2992 21.4277 25.2712 21.4277 25.2392C21.4277 25.2072 21.401 25.1792 21.3676 25.1792V25.1792"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3677 22.7506C22.4041 22.7506 23.2445 21.9103 23.2445 20.8738C23.2445 19.8374 22.4055 18.9971 21.3677 18.9971C20.3566 18.9971 19.5389 19.7961 19.5002 20.7978"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.3669 12.6647V10.0783C23.3669 9.41106 23.0855 8.77024 22.5855 8.29813L18.8149 4.73776C18.3149 4.26564 17.6362 4 16.9295 4H7.36686C5.89353 4 4.7002 5.12678 4.7002 6.51794V24.1435C4.7002 25.5347 5.89353 26.6615 7.36686 26.6615H12.7002"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.69983 9.33203H18.0332"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.69983 15.3307H14.0332"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.69983 21.3293H11.3665"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.369 28C18.0542 28 15.3665 25.3128 15.3665 21.9989C15.3665 18.6849 18.0542 15.9977 21.369 15.9977C24.685 15.9977 27.3715 18.6849 27.3715 21.9989C27.3715 25.3128 24.685 28 21.369 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1510_596">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
