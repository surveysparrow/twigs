import React from 'react';
import { IconProps } from '../types';

export const FingerPrintScannerIcon = React.forwardRef<
  SVGSVGElement,
  IconProps
>(({
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
      <g clipPath="url(#clip0_594_3582)">
        <path
          d="M16.0067 21.3422V18.6744"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M12.005 21.3422V18.6744C12.0048 17.0559 12.9797 15.5966 14.475 14.9773C15.9704 14.358 17.6916 14.7005 18.8358 15.8453"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M20.0083 20.0083V21.3422"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M8.00332 21.3422V18.6744C8.0038 17.2058 8.41051 15.7659 9.17847 14.514"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.8463 11.8463C14.3146 10.3358 17.4066 10.2775 19.9301 11.6941C22.4535 13.1106 24.0141 15.7806 24.01 18.6744V21.3422"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M28.0116 22.6761V25.3439C28.0118 26.0515 27.7308 26.7302 27.2305 27.2305C26.7301 27.7309 26.0515 28.0119 25.3439 28.0117H22.6761"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M4.00165 9.33722V6.66944C4.00145 5.96184 4.28246 5.28317 4.78281 4.78282C5.28315 4.28247 5.96183 4.00147 6.66943 4.00166H9.3372"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M22.6761 4.00166H25.3439C26.0515 4.00147 26.7301 4.28247 27.2305 4.78282C27.7308 5.28317 28.0118 5.96184 28.0116 6.66944V9.33722"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M9.3372 28.0117H6.66943C5.96183 28.0119 5.28315 27.7309 4.78281 27.2305C4.28246 26.7302 4.00145 26.0515 4.00165 25.3439V22.6761"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <defs>
        <clipPath id="clip0_594_3582">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
