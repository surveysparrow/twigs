import React from 'react';
import { IconProps } from '../types';

export const DeskGlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_4776_121)">
          <path
            d="M6.33337 13.3368H10.196C11.6427 13.3368 12.8147 12.1648 12.8147 10.7181C12.8147 10.0235 12.5387 9.35681 12.048 8.86614L9.77604 6.59414"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.492 19.2981L18.8467 16.8301C18.5494 16.3835 18.048 16.1155 17.5107 16.1155C16.9027 16.1155 16.3467 15.7715 16.0747 15.2275L15.952 14.9808C15.7254 14.5288 15.7254 13.9968 15.952 13.5448L17.0014 11.4475C17.2734 10.9035 17.8294 10.5595 18.4374 10.5595H22.5187"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6667 29.3327H10.6667"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.33337 22.666L6.18137 21.818C10.8667 26.5033 18.4667 26.5047 23.152 21.818C27.8374 17.1327 27.8374 9.53268 23.152 4.84735C22.6974 4.39268 22.208 3.99535 21.704 3.62868L22.6667 2.66602"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6667 25.3327V29.3327"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.5592 7.4443C23.8136 10.6987 23.8136 15.975 20.5592 19.2294C17.3049 22.4838 12.0285 22.4838 8.77413 19.2294C5.51976 15.975 5.51976 10.6987 8.77413 7.4443C12.0285 4.18992 17.3049 4.18992 20.5592 7.4443Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4776_121">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
