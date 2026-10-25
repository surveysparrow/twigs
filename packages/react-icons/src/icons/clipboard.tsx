import React from 'react';
import { IconProps } from '../types';

export const ClipboardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_509)">
          <path
            d="M10.8421 5.66292L12.5184 3.56754C12.7634 3.26193 13.1335 3.08398 13.5255 3.08398H18.4758C18.8678 3.08398 19.2379 3.26193 19.4829 3.56754L21.1579 5.66292"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.8421 5.66292V6.95239C10.8421 7.66418 11.4198 8.24186 12.1316 8.24186H19.8684C20.5802 8.24186 21.1579 7.66418 21.1579 6.95239V5.66292"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.8421 5.66292L8.26319 5.663C6.83832 5.663 5.68424 6.81708 5.68424 8.24194V25.005C5.68424 26.4299 6.83832 27.584 8.26319 27.584H23.7369C25.1617 27.584 26.3158 26.4299 26.3158 25.005V8.24194C26.3158 6.81708 25.1617 5.663 23.7369 5.663L21.1579 5.66292"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.8421 14.6892H21.1579"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M10.8421 21.1366H21.1579"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_509">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
