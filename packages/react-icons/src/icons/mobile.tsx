import React from 'react';
import { IconProps } from '../types';

export const MobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
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
        <g clipPath="url(#clip0_2928_8910)">
          <path
            d="M12.6653 3.995V6.396C12.632 6.80006 12.9288 7.15621 13.3322 7.19633H18.6678C19.0712 7.15621 19.368 6.80006 19.3347 6.396V3.995"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3322 24.0034H18.6678"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3355 28.005H10.6644C9.19105 28.005 7.99664 26.8106 7.99664 25.3372V6.66277C7.99664 5.1894 9.19105 3.995 10.6644 3.995H21.3355C22.8089 3.995 24.0033 5.1894 24.0033 6.66277V25.3372C24.0033 26.8106 22.8089 28.005 21.3355 28.005Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2928_8910">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
