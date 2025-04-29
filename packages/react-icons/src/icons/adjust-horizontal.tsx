import React from 'react';
import { IconProps } from '../types';

export const AdjustHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M24 6.66667H28"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4 6.66667H18.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M13.3333 16H28"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4 16H8"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M24 25.3333H28"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4 25.3333H18.6667"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M23.2189 4.78105C24.2603 5.82245 24.2603 7.51089 23.2189 8.55229C22.1775 9.59369 20.4891 9.59369 19.4477 8.55229C18.4063 7.51089 18.4063 5.82245 19.4477 4.78105C20.4891 3.73965 22.1775 3.73965 23.2189 4.78105Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M12.5523 14.1144C13.5937 15.1558 13.5937 16.8442 12.5523 17.8856C11.5109 18.927 9.82245 18.927 8.78105 17.8856C7.73965 16.8442 7.73965 15.1558 8.78105 14.1144C9.82245 13.073 11.5109 13.073 12.5523 14.1144"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M23.2189 23.4477C24.2603 24.4891 24.2603 26.1776 23.2189 27.219C22.1775 28.2604 20.4891 28.2604 19.4477 27.219C18.4063 26.1776 18.4063 24.4891 19.4477 23.4477C20.4891 22.4063 22.1775 22.4063 23.2189 23.4477Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }
);
