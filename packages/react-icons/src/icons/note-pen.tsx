import React from 'react';
import { IconProps } from '../types';

export const NotePenIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2160_557)">
          <path
            d="M11.6821 12.8422H19.2134"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.6821 17.8948H14.1925"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.6821 26.737H7.91637C7.25074 26.7372 6.6123 26.4713 6.14149 25.9978C5.67069 25.5242 5.4061 24.8819 5.40592 24.2121V6.52633C5.40573 5.85649 5.66997 5.21401 6.14052 4.74023C6.61106 4.26645 7.24936 4.00018 7.91499 4H22.9791C23.6447 3.99981 24.2832 4.26573 24.754 4.73925C25.2248 5.21277 25.4894 5.8551 25.4896 6.52494V11.579"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.15069 10.3158H7.07537"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.15069 15.3685H7.07537"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.00006 20.4212H7.07537"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.0911 16.0434L16.6152 23.5665C16.1351 24.0497 15.8237 24.6765 15.7276 25.3529L15.4542 27.2791C15.4263 27.4759 15.492 27.6744 15.6317 27.815C15.7714 27.9556 15.9687 28.0218 16.1643 27.9936L18.0784 27.7185C18.7505 27.6219 19.3735 27.3084 19.8536 26.8253L27.3294 19.3022C28.2236 18.4023 28.2236 16.9433 27.3294 16.0434C26.9 15.6113 26.3175 15.3685 25.7102 15.3685C25.1029 15.3685 24.5205 15.6113 24.0911 16.0434Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2160_557">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
