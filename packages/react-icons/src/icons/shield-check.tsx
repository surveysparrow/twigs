import React from 'react';
import { IconProps } from '../types';

export const ShieldCheckIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_638)">
          <path
            d="M20.4257 13.7887L14.895 19.3193L11.5763 16.0007"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M25.4668 7.894C22.1882 7.63533 19.2042 6.33 16.8495 4.31C16.3668 3.89667 15.6322 3.89667 15.1508 4.31C12.7962 6.32867 9.81216 7.63533 6.5335 7.894C5.85083 7.94733 5.3335 8.53133 5.3335 9.21533V14.9887C5.3335 20.8113 9.5415 26.2713 15.3042 27.902C15.7562 28.03 16.2455 28.03 16.6975 27.902C22.4588 26.27 26.6668 20.8127 26.6668 14.99V9.21667C26.6668 8.53133 26.1495 7.94733 25.4668 7.894Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_638">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
