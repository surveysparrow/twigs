import React from 'react';
import { IconProps } from '../types';

export const HammerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_392_8)">
          <path
            d="M17.0438 11.5506V9.80524L16.0225 8.78391C15.5599 8.32141 14.9326 8.06149 14.2785 8.06123H13.2998C13.0504 8.06158 12.8254 7.91149 12.7299 7.68108C12.6344 7.45067 12.6873 7.18542 12.8638 7.00923L14.4278 5.44522C15.353 4.51987 16.608 4 17.9165 4C19.225 4 20.48 4.51987 21.4052 5.44522L24.8932 8.93324L24.4972 10.2772L25.7652 11.5466H27.5106L28.2586 12.2946C28.5231 12.5583 28.6718 12.9164 28.6718 13.2899C28.6718 13.6634 28.5231 14.0216 28.2586 14.2853L25.0172 17.528C24.4674 18.0774 23.5763 18.0774 23.0265 17.528L22.2772 16.7786V15.0346L21.0079 13.7666L19.6612 14.1666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.0438 11.5506L19.6612 14.1666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.0438 11.5506L4.4251 22.4386C3.7591 23.0136 3.36245 23.8398 3.33033 24.7191C3.2982 25.5983 3.6335 26.4513 4.25577 27.0733C4.88184 27.6992 5.74137 28.0342 6.62582 27.9972C7.51027 27.9602 8.33882 27.5546 8.91046 26.8787L19.6612 14.1666"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_392_8">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
