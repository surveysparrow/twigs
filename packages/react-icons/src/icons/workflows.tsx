import React from 'react';
import { IconProps } from '../types';

export const WorkflowsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_528_16667)">
          <path
            d="M12.3802 9.2124L19.6197 9.2124"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.15719 18.4125L8.15719 13.4897"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.541 13.5862V18.4125"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M8.18977 4.9375C5.87545 4.9375 3.99933 6.80606 3.99933 9.11105C3.99933 11.416 5.87545 13.2846 8.18977 13.2846C10.5041 13.2846 12.3802 11.416 12.3802 9.11105C12.3802 6.80606 10.5041 4.9375 8.18977 4.9375Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.5736 18.5115C21.2593 18.5115 19.3832 20.38 19.3832 22.685C19.3832 24.99 21.2593 26.8586 23.5736 26.8586C25.8879 26.8586 27.764 24.99 27.764 22.685C27.764 20.38 25.8879 18.5115 23.5736 18.5115Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.0138 13.4837H25.6051C26.9279 13.4837 27.9993 12.4169 27.9993 11.0998V7.52405C27.9993 6.20698 26.9279 5.1402 25.6051 5.1402H22.0138C20.6911 5.1402 19.6197 6.20698 19.6197 7.52405V11.0998C19.6197 12.4169 20.6911 13.4837 22.0138 13.4837Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M6.63001 27.0577H10.2213C11.5441 27.0577 12.6155 25.9909 12.6155 24.6738V21.098C12.6155 19.781 11.5441 18.7142 10.2213 18.7142H6.63001C5.30722 18.7142 4.23582 19.781 4.23582 21.098V24.6738C4.23582 25.9909 5.30722 27.0577 6.63001 27.0577Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_528_16667">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
