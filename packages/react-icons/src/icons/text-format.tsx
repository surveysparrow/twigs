import React from 'react';
import { IconProps } from '../types';

export const TextFormatIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          clipPath="url(#clip0_239_7411)"
        >
          <path
            d="M9.164 4.998h8.337M13.33 15.002V4.998M5.768 15.002v-6.67M2.906 8.332h5.836"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_239_7411">
            <path
              fill="#fff"
              d="M0 0H20V20H0z"
              vectorEffect="non-scaling-stroke"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
