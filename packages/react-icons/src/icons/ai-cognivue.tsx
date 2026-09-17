import React from 'react';
import { IconProps } from '../types';

export const AiCognivueIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({
    color = 'currentColor', size = 32, strokeWidth = 1.5, ...rest
  }, ref) => {
    return (
      <svg
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <g clipPath="url(#clip0_1402_607)">
          <path
            d="M9.43936 30.7165H8.08373C5.83765 30.7165 4.01685 28.8957 4.01685 26.6496V25.294"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9954 6.315H24.3511C26.5972 6.315 28.418 8.13578 28.418 10.3819V11.7375"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M33.9831 6.315H32.6275C30.3815 6.315 28.5607 8.13578 28.5607 10.3819V11.7375"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M33.9831 6.1725H32.6275C30.3815 6.1725 28.5607 4.3517 28.5607 2.10562V0.75"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M22.9954 6.1725H24.3511C26.5972 6.1725 28.418 4.3517 28.418 2.10562V0.75"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.01685 11.7375V10.3819C4.01685 8.13578 5.83765 6.315 8.08373 6.315H9.43936"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M28.418 25.294V26.6496C28.418 28.8957 26.5972 30.7165 24.3511 30.7165H22.9954"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M5.37231 18.5161H28.418"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M13.5073 24.5649H18.9276"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.2174 21.9033V24.5655"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M16.2174 11.7409V18.5163"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.6377 14.1459V12.2952C21.6377 11.9622 21.3683 11.6927 21.0353 11.6927H11.3997C11.0667 11.6927 10.7972 11.9622 10.7972 12.2952V14.1474"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_1402_607">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
