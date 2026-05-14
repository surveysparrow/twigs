import React from 'react';
import { IconProps } from '../types';

export const RetrainModelIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_3112_84)">
          <path
            d="M14.6751 28C17.7661 26.2982 20.5274 25.665 24.1949 25.6128C24.8366 25.6039 25.3502 25.1063 25.3502 24.5042V19.6926"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6751 28C11.5841 26.2982 8.82277 25.665 5.15528 25.6139C4.51359 25.6051 4 25.1063 4 24.5042V11.3554C4 10.7344 4.54443 10.2245 5.20629 10.2445C7.23975 10.3059 8.99487 10.5331 10.684 11.0027"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M14.6751 28V17.8883"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.2317 15.1265C26.1132 14.1264 27.2841 12.1831 27.2839 10.061C27.2839 6.8613 24.6655 4.2472 21.4354 4.22227"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M19.1124 7.82897L18.6391 4.57149L14.8399 4"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23.5392 11.8714L24.2317 15.4603L28 15.9297"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.4354 15.8096C18.2054 15.7846 15.5869 13.1705 15.5869 9.97079C15.5868 7.84875 16.7577 5.90544 18.6391 4.90535C15.8019 6.41284 14.7535 9.92299 16.2974 12.7455C17.3215 14.6178 19.2928 15.7934 21.4354 15.8096Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_3112_84">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
