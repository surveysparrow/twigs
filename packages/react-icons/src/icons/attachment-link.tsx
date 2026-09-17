import React from 'react';
import { IconProps } from '../types';

export const AttachmentLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_406)">
          <path
            d="M21.9681 18.6152L24.8894 15.6939C27.2299 13.2943 27.182 9.45171 24.7824 7.11122C22.425 4.81189 18.6641 4.81189 16.3067 7.11122L13.3854 10.0326"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.5601 12.4406L12.4401 19.5606"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.0321 13.3859L7.11074 16.3072C4.77024 18.7068 4.81815 22.5494 7.21773 24.8899C9.57511 27.1892 13.336 27.1892 15.6934 24.8899L18.6147 21.9686"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_406">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
