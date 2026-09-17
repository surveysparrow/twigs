import React from 'react';
import { IconProps } from '../types';

export const TagsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_541_65)">
          <path
            d="M26 13.3333L17.3253 4.76933C16.8253 4.276 16.1533 4 15.452 4H10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.2193 13.5273C12.4104 13.7184 12.4104 14.0283 12.2193 14.2194C12.0283 14.4105 11.7184 14.4105 11.5273 14.2194C11.3362 14.0283 11.3362 13.7184 11.5273 13.5273C11.7184 13.3362 12.0283 13.3362 12.2193 13.5273Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.6133 8.38667L25.2267 18C26.256 19.0293 26.256 20.6987 25.2267 21.728L19.728 27.2267C18.6987 28.256 17.0293 28.256 16 27.2267L6.38667 17.6133C6.14 17.3667 6 17.0307 6 16.6813V9.31867C6 8.59067 6.59067 8 7.31867 8H14.6827C15.032 8 15.3667 8.13867 15.6133 8.38667Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_541_65">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
