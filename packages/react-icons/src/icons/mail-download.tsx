import React from 'react';
import { IconProps } from '../types';

export const MailDownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_371)">
          <path
            d="M27.8536 12.9482L17.6213 20.7839C16.6645 21.5165 15.3354 21.5165 14.3787 20.7839L4.14629 12.9482"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.6667 13.3334L16 15.3334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 15.3334L13.3333 13.3334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16 15.3334V10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.6213 4.5495L26.9547 11.6967C27.6136 12.2014 28 12.984 28 13.814L27.9999 24C27.9999 26.2092 26.2091 28 23.9999 28H8C5.79086 28 4 26.2092 4 24V13.814C3.99999 12.984 4.3864 12.2014 5.04533 11.6968L14.3787 4.5495C15.3354 3.81683 16.6646 3.81683 17.6213 4.5495Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_371">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
