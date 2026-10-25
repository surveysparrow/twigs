import React from 'react';
import { IconProps } from '../types';

export const FilterIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_546_544)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2353 17.2942L25.9738 10.5557C26.2171 10.3124 26.353 9.98369 26.353 9.64075V6.29413C26.353 5.57977 25.7732 5 25.0589 5H6.94104C6.22668 5 5.64691 5.57977 5.64691 6.29413V9.64075C5.64691 9.98369 5.7828 10.3137 6.02609 10.5557L12.7646 17.2942"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7646 17.2942V25.3812C12.7646 26.4334 13.7533 27.206 14.7744 26.951L18.0097 26.1422C18.7293 25.9623 19.2353 25.3152 19.2353 24.5724V17.2942"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_546_544">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
