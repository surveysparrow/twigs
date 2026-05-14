import React from 'react';
import { IconProps } from '../types';

export const CursorIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.7203, ...rest
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
        <g clipPath="url(#clip0_1863_576)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.881 17.5905L24.9407 15.8067C25.5038 15.5599 25.8603 15.0012 25.8432 14.3925C25.826 13.7838 25.4386 13.2457 24.8625 13.0302L8.89966 7.06007C8.32687 6.84584 7.67996 6.99272 7.25912 7.43256C6.83828 7.8724 6.72588 8.5191 6.9741 9.07257L12.8231 25.0701C13.0708 25.6225 13.6294 25.9743 14.2405 25.9626C14.8517 25.951 15.3962 25.5782 15.6222 25.0168L17.881 17.5905Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1863_576">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
