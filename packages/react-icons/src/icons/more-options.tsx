import React from 'react';
import { IconProps } from '../types';

export const MoreOptionsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_183_3)">
          <path
            d="M25.3333 15.999H26.6667C27.4027 15.999 28 16.5964 28 17.3324V25.3324C28 26.0684 27.4027 26.6657 26.6667 26.6657H5.33333C4.59733 26.6657 4 26.0684 4 25.3324V17.3324C4 16.5964 4.59733 15.999 5.33333 15.999H6.66667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20 7.99902L24 11.999"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.276 5.72303L12.3213 15.6777C12.0707 15.9284 11.9307 16.267 11.9307 16.6204V19.999H15.4467C15.8 19.999 16.14 19.859 16.3893 19.6084L26.2747 9.72303C26.796 9.2017 26.796 8.3577 26.2747 7.8377L24.16 5.72303C23.6413 5.2017 22.7973 5.2017 22.276 5.72303Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_183_3">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
