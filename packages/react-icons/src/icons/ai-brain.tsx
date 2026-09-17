import React from 'react';
import { IconProps } from '../types';

export const AiBrainIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.2, ...rest
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
        <g clipPath="url(#clip0_1319_7)">
          <path
            d="M16.0002 5.1755V26.8233"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0012 21.331C20.0012 19.8589 21.1954 18.6655 22.6686 18.6655"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9992 10.6691C11.9992 12.1412 10.805 13.3346 9.33182 13.3346"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9992 21.331C11.9992 19.8589 10.805 18.6655 9.33182 18.6655"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0012 10.6691C20.0012 12.1412 21.1954 13.3346 22.6686 13.3346"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.8391 4.88091C16.3499 5.27646 15.6505 5.27646 15.1613 4.88091C14.0921 4.02822 12.661 3.78055 11.367 4.22425C10.0731 4.66795 9.09572 5.74152 8.77567 7.07061C8.66249 7.58774 8.25733 7.99106 7.73941 8.10216C6.21683 8.41097 4.94779 9.45655 4.35418 10.8913C3.76057 12.326 3.92019 13.9619 4.77998 15.255C5.08979 15.7083 5.08979 16.305 4.77998 16.7583C3.92019 18.0515 3.76057 19.6873 4.35418 21.122C4.94779 22.5568 6.21683 23.6024 7.73941 23.9112C8.25733 24.0223 8.66249 24.4256 8.77567 24.9427C9.09747 26.2707 10.0756 27.3424 11.3692 27.7847C12.6629 28.227 14.093 27.9785 15.1613 27.1258C15.6505 26.7302 16.3499 26.7302 16.8391 27.1258C17.9093 27.9784 19.3414 28.2253 20.6355 27.7801C21.9297 27.335 22.9064 26.2596 23.2247 24.9294C23.3379 24.4123 23.7431 24.0089 24.261 23.8978C25.7838 23.5889 27.0528 22.5429 27.6462 21.1078C28.2396 19.6727 28.0795 18.0367 27.2191 16.7437C26.9105 16.291 26.9105 15.6957 27.2191 15.243C28.0795 13.95 28.2396 12.3139 27.6462 10.8788C27.0528 9.44376 25.7838 8.39782 24.261 8.08883C23.7431 7.97773 23.3379 7.57441 23.2247 7.05729C22.9029 5.72934 21.9248 4.65756 20.6312 4.2153C19.3375 3.77303 17.9074 4.02154 16.8391 4.87425V4.88091Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1319_7">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
