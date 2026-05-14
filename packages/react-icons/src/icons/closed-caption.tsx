import React from 'react';
import { IconProps } from '../types';

export const ClosedCaptionIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_533)">
          <path
            d="M14.375 20.875C13.528 21.7024 12.4834 22.2415 11.3666 22.4276C10.2498 22.6138 9.10827 22.439 8.07892 21.9243C7.04958 21.4097 6.17618 20.5769 5.56353 19.5261C4.95088 18.4752 4.625 17.2509 4.625 16C4.625 14.7491 4.95088 13.5248 5.56353 12.4739C6.17618 11.4231 7.04958 10.5903 8.07892 10.0757C9.10827 9.56099 10.2498 9.38623 11.3666 9.57236C12.4834 9.75849 13.528 10.2976 14.375 11.125"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.375 20.875C26.528 21.7024 25.4834 22.2415 24.3666 22.4276C23.2498 22.6138 22.1083 22.439 21.0789 21.9243C20.0496 21.4097 19.1762 20.5769 18.5635 19.5261C17.9509 18.4752 17.625 17.2509 17.625 16C17.625 14.7491 17.9509 13.5248 18.5635 12.4739C19.1762 11.4231 20.0496 10.5903 21.0789 10.0757C22.1083 9.56099 23.2498 9.38623 24.3666 9.57236C25.4834 9.75849 26.528 10.2976 27.375 11.125"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_533">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
