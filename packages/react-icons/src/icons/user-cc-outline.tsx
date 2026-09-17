import React from 'react';
import { IconProps } from '../types';

export const UserCcOutlineIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_111)">
          <path
            d="M19.815 10.125C19.3099 10.5705 18.6869 10.8608 18.0208 10.961C17.3547 11.0613 16.6739 10.9672 16.06 10.69C15.4461 10.4129 14.9251 9.96451 14.5598 9.39867C14.1944 8.83282 14 8.17357 14 7.5C14 6.82643 14.1944 6.16718 14.5598 5.60133C14.9251 5.03549 15.4461 4.5871 16.06 4.30997C16.6739 4.03284 17.3547 3.93874 18.0208 4.03896C18.6869 4.13919 19.3099 4.42948 19.815 4.875"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.166 10.125C27.6609 10.5705 27.0379 10.8608 26.3718 10.961C25.7057 11.0613 25.0249 10.9672 24.411 10.69C23.7971 10.4129 23.2762 9.96451 22.9108 9.39867C22.5454 8.83282 22.351 8.17357 22.351 7.5C22.351 6.82643 22.5454 6.16718 22.9108 5.60133C23.2762 5.03549 23.7971 4.5871 24.411 4.30997C25.0249 4.03284 25.7057 3.93874 26.3718 4.03896C27.0379 4.13919 27.6609 4.42948 28.166 4.875"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14 15C15.6569 15 17 16.3431 17 18C17 19.6569 15.6569 21 14 21C12.3431 21 11 19.6569 11 18C11 16.3431 12.3431 15 14 15Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8 26C8.17535 25.5615 8.44586 25.1674 8.792 24.8462C9.37717 24.3028 10.146 24.0005 10.9445 24H17.057C17.8551 24.0004 18.6235 24.3027 19.208 24.8462C19.5549 25.1667 19.8256 25.561 20 26"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.8657 26.4682C16.1112 28.5721 11.6006 28.4722 8 26.3932"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_111">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
