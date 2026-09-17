import React from 'react';
import { IconProps } from '../types';

export const HandIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3463_21)">
          <path
            d="M18 11.3327V6.66602C18 5.56202 17.104 4.66602 16 4.66602C14.896 4.66602 14 5.56202 14 6.66602V11.3327"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18 7.99935C18 6.89535 18.896 5.99935 20 5.99935C21.104 5.99935 22 6.89535 22 7.99935V13.9993"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10 15.3327V7.99935C10 6.89535 10.896 5.99935 12 5.99935C13.104 5.99935 14 6.89535 14 7.99935"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10 12.666H8.276C7.672 12.666 7.09333 12.906 6.66667 13.3327C6.24 13.7593 6 14.338 6 14.942V19.3327C6 23.7513 9.58133 27.3327 14 27.3327H18C22.4187 27.3327 26 23.7513 26 19.3327V10.666C26 9.56202 25.104 8.66602 24 8.66602C22.896 8.66602 22 9.56202 22 10.666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3463_21">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
