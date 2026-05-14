import React from 'react';
import { IconProps } from '../types';

export const UsersNetworkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_22_183)">
          <path
            d="M6.70803 8.64533C5.40316 9.97501 4.45584 11.6462 4 13.5102"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.0565 26.2995C12.7827 26.4557 13.5358 26.5423 14.3099 26.5423C15.4059 26.5423 16.4638 26.3764 17.459 26.0702"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4.00123 18.4898C4.45707 20.3538 5.40439 22.025 6.70926 23.3547"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M24.4847 19.0058C23.9699 20.7283 23.0189 22.2617 21.7668 23.4926"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M21.7668 8.50748C23.0189 9.73835 23.9686 11.2717 24.4847 12.9942"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M12.0565 5.70053C12.7827 5.54438 13.5358 5.45777 14.3099 5.45777C15.4059 5.45777 16.4638 5.62367 17.459 5.92986"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M27.1003 13.8435C28.2999 15.0345 28.2999 16.9655 27.1003 18.1565C25.9007 19.3474 23.9558 19.3474 22.7563 18.1565C21.5567 16.9655 21.5567 15.0345 22.7563 13.8435C23.9558 12.6525 25.9007 12.6525 27.1003 13.8435Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.4873 22.7938C12.6869 23.9848 12.6869 25.9158 11.4873 27.1068C10.2878 28.2977 8.34286 28.2977 7.14328 27.1068C5.9437 25.9158 5.9437 23.9848 7.14328 22.7938C8.34286 21.6028 10.2878 21.6028 11.4873 22.7938Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M11.4873 4.89324C12.6869 6.08423 12.6869 8.0152 11.4873 9.20619C10.2878 10.3972 8.34286 10.3972 7.14328 9.20619C5.9437 8.0152 5.9437 6.08423 7.14328 4.89324C8.34286 3.70225 10.2878 3.70225 11.4873 4.89324Z"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>
        <defs>
          <clipPath id="clip0_22_183">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
