import React from 'react';
import { IconProps } from '../types';

export const CloudKeySSOIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_4774_15)">
          <path
            d="M14.9858 17.2885H21.0448L21.0445 19.2265"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.0153 19.2265V17.2885"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.905 12.2173C5.85625 12.6468 3.5 15.3152 3.5 18.5782C3.5 22.1391 6.29875 25.0268 9.75 25.0268H23.5C26.2613 25.0268 28.5 22.7169 28.5 19.8679C28.5 17.0189 26.2613 14.709 23.5 14.709C23.5 10.4349 20.1425 6.9707 16 6.9707C12.7037 6.9707 9.91125 9.1671 8.905 12.2173Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.3988 15.8153C15.1873 16.6289 15.1873 17.948 14.3988 18.7616C13.6102 19.5752 12.3318 19.5752 11.5432 18.7616C10.7547 17.948 10.7547 16.6289 11.5432 15.8153C12.3318 15.0017 13.6102 15.0017 14.3988 15.8153Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4774_15">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
