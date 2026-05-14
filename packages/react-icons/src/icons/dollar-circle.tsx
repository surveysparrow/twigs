import React from 'react';
import { IconProps } from '../types';

export const DollarCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_521)">
          <path
            d="M16.0015 11.9975V10.6636"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0015 20.0008V21.3347"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.6873 19.048C14.0291 19.6356 14.6555 19.9995 15.3353 20.0053H16.7972C17.7428 20.0046 18.5396 19.2992 18.6552 18.3607C18.7707 17.4222 18.1687 16.5447 17.2515 16.3146L14.7514 15.6866C13.8342 15.4565 13.2322 14.579 13.3477 13.6405C13.4633 12.702 14.2601 11.9967 15.2057 11.9959H16.6676C17.3461 12.0006 17.9719 12.3627 18.314 12.9487"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0001 3.99414C22.6303 3.99414 28.0051 9.36896 28.0051 15.9991C28.0051 22.6293 22.6303 28.0041 16.0001 28.0041C9.36994 28.0041 3.99512 22.6293 3.99512 15.9991C3.99512 9.36896 9.36994 3.99414 16.0001 3.99414Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_521">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
