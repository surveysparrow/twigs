import React from 'react';
import { IconProps } from '../types';

export const ArchiveListIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1498_566)">
          <path
            d="M27.5561 9.33333V25.3333C27.5561 26.8067 26.3628 28 24.8895 28H7.1108C5.63747 28 4.44413 26.8067 4.44413 25.3333V9.33333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.0001 9.33333H4.00008C3.26408 9.33333 2.66675 8.736 2.66675 8V5.33333C2.66675 4.59733 3.26408 4 4.00008 4H28.0001C28.7361 4 29.3334 4.59733 29.3334 5.33333V8C29.3334 8.736 28.7361 9.33333 28.0001 9.33333Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0001 18.6667H12.0001C11.2641 18.6667 10.6668 18.0693 10.6668 17.3333V16C10.6668 15.264 11.2641 14.6667 12.0001 14.6667H20.0001C20.7361 14.6667 21.3335 15.264 21.3335 16V17.3333C21.3335 18.0693 20.7361 18.6667 20.0001 18.6667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1498_566">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
