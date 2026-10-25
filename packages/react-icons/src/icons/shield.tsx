import React from 'react';
import { IconProps } from '../types';

export const ShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_242)">
          <path
            d="M22.5343 23.7347L21.9213 22.5087C21.6445 21.955 21.2189 21.4893 20.6923 21.1639C20.1658 20.8384 19.5589 20.666 18.9399 20.666H13.0601C12.4411 20.666 11.8342 20.8384 11.3077 21.1639C10.7811 21.4893 10.3555 21.955 10.0787 22.5087L9.46883 23.7284"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.3333 13.9994C19.3333 15.8403 17.8409 17.3327 16 17.3327C14.159 17.3327 12.6667 15.8403 12.6667 13.9994C12.6667 12.1584 14.159 10.666 16 10.666C17.8409 10.666 19.3333 12.1584 19.3333 13.9994Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6667 16.6939C26.6667 21.7268 20.4735 25.4656 17.5202 26.9667C17.0504 27.2068 16.5304 27.3323 16.0028 27.3327C15.4752 27.3332 14.955 27.2086 14.4849 26.9693C11.5335 25.4696 5.33333 21.7217 5.33333 16.6939V9.42518C5.33807 9.09601 5.46295 8.77992 5.68447 8.5364C5.906 8.29288 6.20888 8.13872 6.53613 8.10294C9.36535 7.88795 12.0778 6.88483 14.3661 5.20726C14.8384 4.85582 15.4113 4.66602 16 4.66602C16.5886 4.66602 17.1616 4.85582 17.6338 5.20726C19.9221 6.88483 22.6346 7.88795 25.4638 8.10294C25.7911 8.13871 26.094 8.29287 26.3155 8.53639C26.537 8.77991 26.6619 9.096 26.6667 9.42518V16.6939Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_242">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
