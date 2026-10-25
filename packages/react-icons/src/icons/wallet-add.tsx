import React from 'react';
import { IconProps } from '../types';

export const WalletAddIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_455)">
          <path
            d="M5.33329 15.8745V10.7879C5.33329 9.12387 6.36396 7.6332 7.91996 7.0452L19.0573 2.83987C20.8026 2.18253 22.6666 3.47053 22.6666 5.33587V9.80254"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.216 27.9999H24C26.2 27.9999 28 26.1999 28 23.9999V13.8012C28 11.5919 26.2093 9.8012 24 9.8012H7.99996C6.52663 9.8012 5.33329 10.9945 5.33329 12.4679V16.3425"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.99996 19.0759V24.9252"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.924 21.9999H7.07596"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9986 18.8012C22.8146 18.8025 22.6666 18.9519 22.6666 19.1359C22.6666 19.3199 22.816 19.4692 23 19.4679C23.184 19.4679 23.3333 19.3185 23.3333 19.1345C23.3333 18.9505 23.184 18.8012 22.9986 18.8012Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M9.99996 29.3332C5.95063 29.3332 2.66663 26.0492 2.66663 21.9999C2.66663 17.9505 5.95063 14.6665 9.99996 14.6665C14.0506 14.6665 17.3333 17.9505 17.3333 21.9999C17.3333 26.0492 14.0506 29.3332 9.99996 29.3332Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_455">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
