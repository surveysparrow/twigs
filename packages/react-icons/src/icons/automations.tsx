import React from 'react';
import { IconProps } from '../types';

export const AutomationsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_5055_14)">
          <path
            d="M14.867 26.4807H7.0189C5.85326 26.4807 4.90695 25.5344 4.90695 24.3688V16.5206"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.7668 5.51269L24.615 5.51269C25.7806 5.51269 26.7269 6.45901 26.7269 7.62464L26.7269 15.4728"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.8504 12.5344H9.88369C11.3693 12.5344 12.5726 11.3364 12.5726 9.85717V5.84131C12.5726 4.36213 11.3693 3.16406 9.88369 3.16406H5.8504C4.36481 3.16406 3.16154 4.36213 3.16154 5.84131V9.85717C3.16154 11.3364 4.36481 12.5344 5.8504 12.5344Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.937 28.8341H25.9703C27.4558 28.8341 28.6591 27.636 28.6591 26.1568V22.141C28.6591 20.6618 27.4558 19.4637 25.9703 19.4637H21.937C20.4514 19.4637 19.2481 20.6618 19.2481 22.141V26.1568C19.2481 27.636 20.4514 28.8341 21.937 28.8341Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_5055_14">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
