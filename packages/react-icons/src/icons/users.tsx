import React from 'react';
import { IconProps } from '../types';

export const UsersIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1510_4565)">
          <path
            d="M18.3571 14.6429C19.6588 15.9447 19.6588 18.0552 18.3571 19.357C17.0554 20.6587 14.9448 20.6587 13.6431 19.357C12.3413 18.0552 12.3413 15.9447 13.6431 14.6429C14.9448 13.3412 17.0554 13.3412 18.3571 14.6429Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.6717 6.64297C26.9735 7.94472 26.9735 10.0553 25.6717 11.357C24.37 12.6588 22.2594 12.6588 20.9577 11.357C19.6559 10.0553 19.6559 7.94471 20.9577 6.64297C22.2594 5.34122 24.37 5.34122 25.6717 6.64297"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 16.3333C26.044 16.3333 28 17.044 29.3333 18.1106"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.0424 6.64297C12.3441 7.94472 12.3441 10.0553 11.0424 11.357C9.74065 12.6588 7.63011 12.6588 6.32836 11.357C5.02661 10.0553 5.02661 7.94471 6.32836 6.64297C7.63011 5.34122 9.74065 5.34122 11.0424 6.64297"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66669 18.1106C4.00002 17.044 5.95602 16.3333 8.00002 16.3333"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.1213 26.3333C20.568 25.132 18.336 24.3333 16 24.3333C13.664 24.3333 11.432 25.132 9.87866 26.3333"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1510_4565">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
