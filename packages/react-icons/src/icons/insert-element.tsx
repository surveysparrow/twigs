import React from 'react';
import { IconProps } from '../types';

export const InsertElementIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.49938, ...rest
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
        <g clipPath="url(#clip0_4836_82)">
          <path
            d="M12.7998 21.3326L19.1998 10.666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.9967 28H20.0033C24.4198 28 28 24.4198 28 20.0033V11.9967C28 7.58023 24.4198 4 20.0033 4H11.9967C7.58023 4 4 7.58023 4 11.9967V20.0033C4 24.4198 7.58023 28 11.9967 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4836_82">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
