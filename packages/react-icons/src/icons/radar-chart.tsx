import React from 'react';
import { IconProps } from '../types';

export const RadarChartIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.2, ...rest
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
        <g clipPath="url(#clip0_22_59)">
          <path
            d="M14.8242 1.85462C15.5252 1.34533 16.4744 1.34533 17.1754 1.85462L29.0901 10.5112C29.7911 11.0205 30.0844 11.9232 29.8166 12.7472L25.2656 26.7538C24.9979 27.5779 24.23 28.1358 23.3635 28.1358H8.63611C7.76966 28.1358 7.00175 27.5779 6.734 26.7538L2.18298 12.7472C1.91524 11.9232 2.20855 11.0205 2.90953 10.5112L14.8242 1.85462Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.7398 12.5545C16.1191 12.2361 16.6743 12.2433 17.0453 12.5714L19.5443 14.7816C19.8241 15.0291 19.9427 15.4119 19.8516 15.7743L19.1241 18.6701C19.0231 19.0723 18.6843 19.3704 18.2725 19.4194L14.208 19.9033C13.7334 19.9598 13.2851 19.6725 13.1382 19.2177L12.2067 16.3346C12.0816 15.9474 12.2037 15.523 12.5154 15.2613L15.7398 12.5545Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M15.5854 6.52226C15.9595 6.21972 16.496 6.22648 16.8624 6.53835L24.521 13.0577C24.8137 13.3068 24.9377 13.7016 24.84 14.0733L22.4429 23.1928C22.32 23.6605 21.88 23.9732 21.398 23.9356L11.322 23.1497C10.9373 23.1196 10.6041 22.8709 10.466 22.5105L7.25981 14.1437C7.10478 13.7392 7.22791 13.2808 7.5648 13.0083L15.5854 6.52226Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_59">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
