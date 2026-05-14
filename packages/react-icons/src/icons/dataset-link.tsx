import React from 'react';
import { IconProps } from '../types';

export const DatasetLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_2827_17632)">
          <path
            d="M14.4278 18.0676H16.7515C18.6766 18.0676 20.237 16.5073 20.237 14.5821V9.93474C20.237 8.00957 18.6766 6.44922 16.7515 6.44922H7.45672C5.53154 6.44922 3.97119 8.00957 3.97119 9.93474V14.5821C3.97119 16.5073 5.53154 18.0676 7.45672 18.0676"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.7515 11.0966H14.4278C12.5026 11.0966 10.9422 12.6569 10.9422 14.5821V19.2295C10.9422 21.1546 12.5026 22.715 14.4278 22.715H17.9133"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.208 17.4867V14.5821C27.208 12.6569 25.6477 11.0966 23.7225 11.0966"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.3988 22.8061H27.9712"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.685 26.0923V19.5199"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_2827_17632">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
