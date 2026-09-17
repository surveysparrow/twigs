import React from 'react';
import { IconProps } from '../types';

export const UnpinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_4089_321)">
          <path
            d="M6.66277 26.6704L12.4312 20.902"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.8296 15.0575C24.1644 14.7163 24.6366 14.5465 25.112 14.5962L27.1324 14.8268C27.4641 14.8645 27.7833 14.688 27.9278 14.3871C28.0723 14.0861 28.0104 13.7267 27.7736 13.4914L19.8418 5.55958C19.6065 5.32279 19.2471 5.26092 18.9461 5.40541C18.6452 5.5499 18.4687 5.86907 18.5064 6.20077L18.737 8.22121C18.7866 8.69663 18.6168 9.16875 18.2757 9.50358L17.8917 9.8876"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M20.6606 18.2265C20.3648 18.5199 20.1987 18.9193 20.1993 19.3359V24.8852C20.1983 25.5197 19.8156 26.0913 19.2294 26.334C18.6431 26.5767 17.9684 26.4428 17.5192 25.9946L7.34554 15.8117C6.89739 15.3625 6.76351 14.6878 7.00618 14.1016C7.24886 13.5153 7.82044 13.1326 8.45494 13.1316H14.0042C14.4181 13.131 14.8147 12.9659 15.1067 12.6726"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.6711 24.0026L9.33054 6.66204"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_4089_321">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
