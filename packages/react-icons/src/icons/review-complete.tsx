import React from 'react';
import { IconProps } from '../types';

export const ReviewCompleteIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_21)">
          <path
            d="M25.047 11.751L27.0258 13.7297"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.7555 7.58341C10.9302 8.05435 9.26765 9.01385 7.94668 10.3588C6.6257 11.7037 5.69621 13.3831 5.25811 15.2167C4.82001 17.0502 4.88987 18.9685 5.46017 20.7653C6.03048 22.5621 7.07966 24.1695 8.49497 25.4148C9.91027 26.66 11.6382 27.4961 13.493 27.833C15.3477 28.1699 17.2593 27.995 19.0221 27.3271C20.785 26.6591 22.3325 25.5234 23.4983 24.042C24.6641 22.5605 25.4041 20.7894 25.6389 18.9189"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.5344 15.8378L13.8706 20.7027L11.4582 18.2904"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M26.3772 8.54054C26.3772 11.0482 24.3443 13.0811 21.8366 13.0811C19.3289 13.0811 17.2961 11.0482 17.2961 8.54054C17.2961 6.03287 19.3289 4 21.8366 4C24.3443 4 26.3772 6.03287 26.3772 8.54054Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_21">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
