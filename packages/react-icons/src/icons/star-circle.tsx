import React from 'react';
import { IconProps } from '../types';

export const StarCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_363)">
          <path
            d="M15.9973 19.7891L18.7758 21.2484C19.3174 21.5338 19.9483 21.0723 19.8456 20.4707L19.3147 17.3774L21.5623 15.1885C22.0011 14.763 21.7584 14.0187 21.1541 13.932L18.0475 13.4811L16.6589 10.6653C16.3881 10.1171 15.6065 10.1171 15.337 10.6653L13.9485 13.4811L10.8418 13.932C10.2376 14.02 9.99481 14.763 10.4337 15.1885L12.6813 17.3774L12.149 20.472C12.0463 21.0736 12.6773 21.5325 13.2188 21.2497L15.9973 19.7904"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4889 7.536C29.2575 12.3046 29.1761 20.0852 24.2448 24.7512C19.6922 29.0583 12.3078 29.0583 7.75521 24.7512C2.82383 20.0852 2.74246 12.3046 7.51111 7.536C12.1997 2.84738 19.8002 2.84738 24.4889 7.536Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_363">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
