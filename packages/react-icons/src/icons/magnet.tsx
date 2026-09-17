import React from 'react';
import { IconProps } from '../types';

export const MagnetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3158_7)">
          <path
            d="M10.0704 7.40287L14.6098 11.9423"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.0569 17.3896L24.5963 21.929"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3333 2.66602V3.99935"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.0001 10.6661H29.3334"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6666 5.33256L25.7238 6.27536"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.8965 14.5502L16.9952 20.4515C16.2728 21.1738 15.2931 21.5797 14.2715 21.5797C13.2499 21.5797 12.2702 21.1738 11.5478 20.4515C10.0436 18.9472 10.0436 16.5084 11.5478 15.0042L17.4491 9.1029C17.8103 8.74172 18.0132 8.25185 18.0132 7.74107C18.0132 7.23028 17.8103 6.74041 17.4491 6.37923L15.6334 4.56346C14.8812 3.81136 13.6618 3.81136 12.9097 4.56346L7.00847 10.4647C5.08218 12.391 4 15.0036 4 17.7278C4 20.452 5.08218 23.0646 7.00847 24.9909C11.0198 29.0022 17.5233 29.0022 21.5346 24.9909L27.4359 19.0896C27.7971 18.7285 28 18.2386 28 17.7278C28 17.217 27.7971 16.7272 27.4359 16.366L25.6201 14.5502C24.868 13.7981 23.6486 13.7981 22.8965 14.5502Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3158_7">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
