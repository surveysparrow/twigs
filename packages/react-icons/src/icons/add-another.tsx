import React from 'react';
import { IconProps } from '../types';

export const AddAnotherIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_896)">
          <path
            d="M18.6618 16V21.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9951 18.6667H21.3285"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.32845 22.6667H7.99512C5.78598 22.6667 3.99512 20.8758 3.99512 18.6667V8C3.99512 5.79086 5.78598 4 7.99512 4H18.6618C20.8709 4 22.6618 5.79086 22.6618 8V9.33333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.3272 28H24.9964C26.6525 28 27.9951 26.6574 27.9951 25.0012V12.3321C27.9951 10.6759 26.6525 9.33333 24.9964 9.33333H12.3272C10.671 9.33333 9.32845 10.6759 9.32845 12.3321V25.0012C9.32845 26.6574 10.671 28 12.3272 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_896">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
