import React from 'react';
import { IconProps } from '../types';

export const CommentIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <g clipPath="url(#clip0_1480_4309)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9755 24L14.0533 27.8569C13.8525 28.0142 13.5796 28.0431 13.3503 27.9315C13.121 27.8199 12.9755 27.5872 12.9755 27.3321V24H11.6421C7.96023 24 4.97546 21.0152 4.97546 17.3333V10.6667C4.97546 6.98477 7.96023 4 11.6421 4H22.3088C25.9907 4 28.9755 6.98477 28.9755 10.6667V17.3333C28.9755 21.0152 25.9907 24 22.3088 24H18.9755Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 11H23"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 17H19"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1480_4309">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0.975464)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
