import React from 'react';
import { IconProps } from '../types';

export const ActionLightningSquareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3484_39)">
          <path
            d="M16.4401 20.44L18.6668 16H13.3335L15.5601 11.56"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.664 28H21.3362C25.0166 28 28.0001 25.0165 28.0001 21.3361V10.6639C28.0001 6.98353 25.0166 4 21.3362 4H10.664C6.98365 4 4.00012 6.98352 4.00012 10.6639V21.3361C4.00012 25.0165 6.98365 28 10.664 28Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3484_39">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
