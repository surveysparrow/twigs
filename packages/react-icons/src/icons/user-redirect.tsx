import React from 'react';
import { IconProps } from '../types';

export const UserRedirectIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3193_21)">
          <path
            d="M28 25.4822C28.0057 24.0637 27.4659 22.7009 26.4994 21.6936C25.5329 20.6864 24.2188 20.1172 22.8462 20.1113C22.8317 20.1113 22.8173 20.1113 22.8028 20.1113H19.1507"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.0193 20.3095L13.7402 24.1547L10.0193 28"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 24.1551H12.1477"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.2947 9.70659C22.2947 12.8583 19.8225 15.4132 16.7728 15.4132C13.7231 15.4132 11.2509 12.8583 11.2509 9.70659C11.2509 6.55493 13.7231 4 16.7728 4C19.8225 4 22.2947 6.55493 22.2947 9.70659Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3193_21">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
