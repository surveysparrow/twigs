import React from 'react';
import { IconProps } from '../types';

export const LabsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3850_429)">
          <path
            d="M18.5556 8V13.5627C18.5556 14.2693 18.8369 14.948 19.3369 15.448L25.7742 21.8853C26.2742 22.3853 26.5556 23.064 26.5556 23.7707V25.3333C26.5556 26.8067 25.3622 28 23.8889 28H7.8889C6.41556 28 5.22223 26.8067 5.22223 25.3333V23.7707C5.22223 23.064 5.50356 22.3853 6.00356 21.8853L12.4409 15.448C12.9409 14.948 13.2222 14.2693 13.2222 13.5627V8"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.5556 8C19.2916 8 19.8888 7.40267 19.8888 6.66667V5.33333C19.8888 4.59733 19.2915 4 18.5555 4H13.2222C12.4862 4 11.8888 4.59733 11.8888 5.33333V6.66667C11.8888 7.40267 12.4862 8 13.2222 8"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M18.5556 8H13.2222"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.46227 22.6667H26.3156"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.9822 14.6667H18.7955"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3850_429">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
