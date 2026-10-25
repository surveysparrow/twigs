import React from 'react';
import { IconProps } from '../types';

export const UserCcIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_109)">
          <path
            d="M19.7064 10.125C19.2047 10.5705 18.5859 10.8608 17.9245 10.961C17.263 11.0613 16.5868 10.9672 15.9771 10.69C15.3674 10.4129 14.8501 9.96451 14.4872 9.39867C14.1243 8.83282 13.9313 8.17357 13.9313 7.5C13.9313 6.82643 14.1243 6.16718 14.4872 5.60133C14.8501 5.03549 15.3674 4.5871 15.9771 4.30997C16.5868 4.03284 17.263 3.93874 17.9245 4.03896C18.5859 4.13919 19.2047 4.42948 19.7064 4.875"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28 10.125C27.4983 10.5705 26.8796 10.8608 26.2181 10.961C25.5566 11.0613 24.8804 10.9672 24.2707 10.69C23.661 10.4129 23.1437 9.96451 22.7808 9.39867C22.4179 8.83282 22.2249 8.17357 22.2249 7.5C22.2249 6.82643 22.4179 6.16718 22.7808 5.60133C23.1437 5.03549 23.661 4.5871 24.2707 4.30997C24.8804 4.03284 25.5566 3.93874 26.2181 4.03896C26.8796 4.13919 27.4983 4.42948 28 4.875"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9175 15C17.563 15 18.8969 16.3431 18.8969 18C18.8969 19.6569 17.563 21 15.9175 21C14.2721 21 12.9382 19.6569 12.9382 18C12.9382 16.3431 14.2721 15 15.9175 15Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.95877 26C10.1329 25.5615 10.4016 25.1674 10.7453 24.8462C11.3265 24.3028 12.09 24.0005 12.883 24H18.9535C19.7461 24.0004 20.5092 24.3027 21.0898 24.8462C21.4343 25.1667 21.7031 25.561 21.8763 26"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.1493 5.5C8.21065 6.57921 6.56142 8.20631 5.44796 10.2682C2.91195 14.9644 3.76685 20.7834 7.54457 24.5391C11.3223 28.2948 17.1117 29.0814 21.7429 26.4682C25.7126 24.2283 28.0107 19.9535 27.8247 15.5"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_109">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
