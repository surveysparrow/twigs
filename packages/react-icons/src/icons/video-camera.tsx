import React from 'react';
import { IconProps } from '../types';

export const VideoCameraIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2887_28)">
          <path
            d="M20.5 17.463L25.56 21.535C26.5413 22.3256 28 21.627 28 20.367V11.6336C28 10.3736 26.5413 9.67496 25.56 10.4656L20.5 14.5376"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.5 23.6673H7C5.34267 23.6673 4 22.3247 4 20.6673V11.334C4 9.67665 5.34267 8.33398 7 8.33398H17.5C19.1573 8.33398 20.5 9.67665 20.5 11.334V20.6673C20.5 22.3247 19.1573 23.6673 17.5 23.6673Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2887_28">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
