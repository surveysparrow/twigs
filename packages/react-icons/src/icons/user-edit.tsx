import React from 'react';
import { IconProps } from '../types';

export const UserEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1596_558)">
          <path
            d="M18.2937 19.334H12.8438C11.5583 19.3346 10.3952 20.1199 9.88154 21.334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.7053 28.0007C9.4333 28.0325 4.263 22.942 4.00967 16.4853C3.75634 10.0287 8.51096 4.52483 14.765 4.03504C21.0191 3.54525 26.5266 8.24546 27.2235 14.6673"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.1231 19.0578C25.6177 18.5372 24.7983 18.5372 24.2929 19.0578L20.614 22.8481C20.3713 23.0981 20.2349 23.4373 20.2349 23.791V26.6673H23.0268C23.3701 26.6673 23.6993 26.5269 23.942 26.2768L27.6209 22.4865C27.8636 22.2365 28 21.8973 28 21.5437C28 21.1901 27.8636 20.851 27.6209 20.6009L26.1231 19.0578Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.9408 12.6673C18.9408 14.5083 17.4922 16.0007 15.7053 16.0007C13.9184 16.0007 12.4699 14.5083 12.4699 12.6673C12.4699 10.8264 13.9184 9.334 15.7053 9.334C17.4922 9.334 18.9408 10.8264 18.9408 12.6673Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1596_558">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
