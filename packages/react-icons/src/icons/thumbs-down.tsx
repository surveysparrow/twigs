import React from 'react';
import { IconProps } from '../types';

export const ThumbsDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_33_756)">
          <path
            d="M21.999 18.198L16.5246 25.1607C15.5059 26.4577 13.5166 26.4899 12.4529 25.2281C12.0553 24.7577 11.8393 24.1656 11.8393 23.5559V18.7622H7.19453C6.29288 18.7622 5.45124 18.3226 4.95015 17.5913L4.45657 16.8717C4.014 16.2254 3.88498 15.4208 4.10551 14.6749L6.14435 7.75471C6.47741 6.6248 7.53508 5.8466 8.73828 5.8466H18.1734C18.9235 5.8466 19.6406 6.15143 20.1507 6.68781L21.999 8.63109"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.5833 5.8466H26.4157C27.2904 5.8466 28 6.53979 28 7.39419V18.2214C28 19.0758 27.2904 19.769 26.4157 19.769H23.5833C22.7086 19.769 21.999 19.0758 21.999 18.2214V7.39419C21.999 6.53979 22.7086 5.8466 23.5833 5.8466V5.8466Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_33_756">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
