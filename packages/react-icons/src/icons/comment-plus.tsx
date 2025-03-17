import React from 'react';
import { IconProps } from '../types';

export const CommentPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_622_4114)">
          <path
            d="M13.3333 14H18.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 16.6667V11.3333"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 24L13.0778 27.8569C12.8771 28.0142 12.6042 28.0431 12.3748 27.9315C12.1455 27.8199 12 27.5872 12 27.3321V24H10.6667C6.98477 24 4 21.0152 4 17.3333V10.6667C4 6.98477 6.98477 4 10.6667 4H21.3333C25.0152 4 28 6.98477 28 10.6667V17.3333C28 21.0152 25.0152 24 21.3333 24H18Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_622_4114">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
