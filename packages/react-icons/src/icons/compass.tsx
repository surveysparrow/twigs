import React from 'react';
import { IconProps } from '../types';

export const CompassIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1836_21)">
          <path
            d="M24.1388 19.0125C24.7161 18.5984 25.2605 18.1402 25.767 17.6419"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.23325 17.6419C6.73959 18.1415 7.28398 18.601 7.86148 19.0163"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.1054 8.25564V5.89476C14.1054 4.84831 14.9537 4 16.0002 4C17.0466 4 17.8949 4.84831 17.8949 5.89476V8.2569"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0002 7.78918C13.9073 7.78918 12.2106 9.48581 12.2106 11.5787C12.2106 13.6716 13.9073 15.3682 16.0002 15.3682C18.0931 15.3682 19.7897 13.6716 19.7897 11.5787C19.7897 9.48581 18.0931 7.78918 16.0002 7.78918Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0002 7.78918C17.5483 7.7894 18.9635 8.66424 19.6558 10.049L26.1056 22.9473V28H23.5527L17.1509 15.1964"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.0002 7.78918C14.452 7.7894 13.0368 8.66424 12.3446 10.049L5.89478 22.9473V28H8.42113L14.8229 15.1964"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.084 21.063C17.4152 21.8846 14.5604 21.8811 11.8936 21.0529"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.9368 4.06316C15.9368 4.09804 15.965 4.12632 15.9999 4.12632C16.0348 4.12632 16.0631 4.09804 16.0631 4.06316C16.0631 4.02828 16.0348 4 15.9999 4C15.965 4 15.9368 4.02828 15.9368 4.06316"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1836_21">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
