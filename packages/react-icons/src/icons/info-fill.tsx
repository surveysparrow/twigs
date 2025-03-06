import React from 'react';
import { IconProps } from '../types';

export const InfoFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          fill={color}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M10.5 16.25H13.5M12.159 16.125V11.25H10.875"
          stroke="#FDD28A"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx="11.8125"
          cy="8.4375"
          r="0.5625"
          fill="#FDD28A"
          stroke="#FDD28A"
          strokeWidth="0.75"
        />
      </svg>
    );
  }
);
