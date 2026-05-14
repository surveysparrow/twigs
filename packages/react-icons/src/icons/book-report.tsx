import React from 'react';
import { IconProps } from '../types';

export const BookReportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_63)">
          <path
            d="M22.6667 8.19002C23.9 7.97908 25.192 7.85655 26.608 7.81108C27.3653 7.78708 28 8.35549 28 9.07296V24.0249C28 24.7095 27.4227 25.2754 26.7013 25.2855C22.5787 25.3449 19.4747 26.0649 16 28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 28C12.5253 26.0649 9.42133 25.3449 5.29867 25.2868C4.57733 25.2766 4 24.7095 4 24.0249V9.07296C4 8.36686 4.612 7.78708 5.356 7.80981C9.45067 7.93487 12.5413 8.66497 16 10.5003"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 28V9.8258C16.4627 7.49908 18.436 5.2393 20.7773 4.12773C21.6453 3.71468 22.6667 4.35763 22.6667 5.27846V20.7217C22.6667 21.2573 22.3107 21.736 21.7747 21.9066C19.0147 22.7845 16.528 25.3486 16 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_63">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
