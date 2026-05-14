import React from 'react';
import { IconProps } from '../types';

export const ManageLocationsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_531_38)">
          <path
            d="M4 4H27.4758"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 11.3043H27.4758"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 18.6087H13.8474"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.4148 21.7913C23.6028 21.792 23.7547 21.9442 23.7542 22.1313C23.7537 22.3184 23.6011 22.4698 23.4131 22.4696C23.2251 22.4693 23.0728 22.3176 23.0728 22.1304C23.0723 22.0401 23.1082 21.9534 23.1725 21.8896C23.2368 21.8259 23.3241 21.7905 23.4148 21.7913Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.827 22.1304C18.827 19.6091 20.8805 17.5652 23.4135 17.5652C25.9466 17.5652 28 19.6091 28 22.1304C28 24.2676 25.657 26.5506 24.319 27.6796C23.7911 28.1068 23.0346 28.1068 22.5067 27.6796C21.1701 26.5506 18.827 24.2676 18.827 22.1304Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_531_38">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
